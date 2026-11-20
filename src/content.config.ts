import { defineCollection } from 'astro:content';
import type { LoaderContext } from 'astro/loaders';
import { z } from 'astro/zod';
import { readdir, readFile } from 'node:fs/promises';
import { join, resolve, extname, basename } from 'node:path';
import { pathToFileURL } from 'node:url';
import { load as parseYaml } from 'js-yaml';

/**
 * Converts Keystatic/Markdoc {% table %} blocks to GFM pipe tables.
 * Keystatic always saves tables as Markdoc syntax in .md files; this runs
 * at build time so the table renders correctly even after CMS edits.
 */
function convertMarkdocTablesToGfm(content: string): string {
	return content.replace(
		/\{% table %\}([\s\S]*?)\{% \/table %\}/g,
		(original, inner) => {
			// Keystatic uses --- as a row separator (between every row, not just header/body)
			const sections = inner.split(/^[ \t]*---[ \t]*$/m);

			function parseCells(text: string): string[] {
				return text
					.split('\n')
					.map((l) => l.trim())
					.filter((l) => /^[-*]\s+/.test(l))
					.map((l) => l.replace(/^[-*]\s+/, '').trim());
			}

			const rows = sections.map(parseCells).filter((r) => r.length > 0);
			if (rows.length === 0) return original;

			const headers = rows[0];
			const dataRows = rows.slice(1);
			const esc = (s: string) => s.replace(/\|/g, '\\|');

			return [
				'',
				`| ${headers.map(esc).join(' | ')} |`,
				`| ${headers.map(() => '---').join(' | ')} |`,
				...dataRows.map((r) => `| ${headers.map((_, i) => esc(r[i] ?? '')).join(' | ')} |`),
				'',
			].join('\n');
		},
	);
}

const blog = defineCollection({
	loader: {
		name: 'markdoc-blog',
		async load(ctx: LoaderContext) {
			const projectRoot = resolve('.');
			const baseDir = resolve('./src/content/blog');

			async function processFile(filePath: string, id: string) {
				const raw = await readFile(filePath, 'utf-8');

				// Split YAML frontmatter from body
				const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
				if (!fmMatch) return;

				const [, yamlStr, body] = fmMatch;
				const rawData = parseYaml(yamlStr) as Record<string, unknown>;
				const data = await ctx.parseData({ id, data: rawData, filePath });

				// Transform any {% table %} blocks to GFM pipe tables before rendering
				const transformedBody = convertMarkdocTablesToGfm(body);

				const rendered = await ctx.renderMarkdown(transformedBody, {
					fileURL: pathToFileURL(filePath),
				});

				// filePath must be relative to project root (posix separators)
				const relativePath = filePath
					.slice(projectRoot.length)
					.replace(/\\/g, '/')
					.replace(/^\//, '');

				ctx.store.set({
					id,
					data,
					body: transformedBody,
					filePath: relativePath,
					digest: ctx.generateDigest(raw),
					rendered,
					assetImports: rendered.metadata?.imagePaths,
				});
			}

			const entries = await readdir(baseDir, { withFileTypes: true });

			await Promise.all(
				entries.map(async (entry) => {
					if (entry.isDirectory()) {
						for (const indexFile of ['index.md', 'index.mdx']) {
							try {
								await processFile(join(baseDir, entry.name, indexFile), entry.name);
								return;
							} catch {
								/* try next extension */
							}
						}
					} else if (entry.isFile()) {
						const ext = extname(entry.name);
						if (ext === '.md' || ext === '.mdx') {
							await processFile(join(baseDir, entry.name), basename(entry.name, ext));
						}
					}
				}),
			);
		},
	},
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			heroImageAlt: z.string().optional(),
		}),
});

export const collections = { blog };
