// @ts-check

import keystatic from '@keystatic/astro';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

/** Converts Keystatic/Markdoc {% table %} blocks to HTML tables at build time */
function remarkMarkdocTable() {
  return (tree) => {
    const nodes = tree.children;
    let i = 0;
    while (i < nodes.length) {
      if (isTableStart(nodes[i])) {
        let j = i + 1;
        while (j < nodes.length && !isTableEnd(nodes[j])) j++;
        if (j < nodes.length) {
          nodes.splice(i, j - i + 1, { type: 'html', value: buildTableHtml(nodes.slice(i + 1, j)) });
        } else {
          i++;
        }
      } else {
        i++;
      }
    }
  };
}
function isTableStart(n) {
  return n.type === 'paragraph' && n.children?.[0]?.value?.includes('{% table %}');
}
function isTableEnd(n) {
  return n.type === 'paragraph' && n.children?.[0]?.value?.includes('{% /table %}');
}
function extractText(n) {
  if (!n) return '';
  if (n.type === 'text' || n.type === 'inlineCode') return n.value || '';
  return (n.children || []).map(extractText).join('');
}
function buildTableHtml(nodes) {
  const rows = nodes.filter(n => n.type === 'list').map(list =>
    list.children.map(item => extractText(item))
  );
  if (!rows.length) return '';
  let html = '<table>\n<thead>\n<tr>';
  rows[0].forEach(h => { html += `<th>${h}</th>`; });
  html += '</tr>\n</thead>\n<tbody>\n';
  rows.slice(1).forEach(row => {
    html += '<tr>';
    row.forEach(cell => { html += `<td>${cell || '—'}</td>`; });
    html += '</tr>\n';
  });
  return html + '</tbody>\n</table>';
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.guspelogia.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  markdown: {
    remarkPlugins: [remarkMarkdocTable],
  },
  integrations: [mdx(), sitemap(), keystatic(), react()],

  fonts: [
      {
          provider: fontProviders.google(),
          name: 'Space Grotesk',
          cssVariable: '--font-display',
          fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
          weights: [500, 700],
      },
      {
          provider: fontProviders.google(),
          name: 'Inter',
          cssVariable: '--font-body',
          fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
          weights: [400, 500, 600],
      },
      {
          provider: fontProviders.google(),
          name: 'JetBrains Mono',
          cssVariable: '--font-mono',
          fallbacks: ['ui-monospace', 'monospace'],
          weights: [400, 500],
      },
  ],

  adapter: netlify(),
});