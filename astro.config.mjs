// @ts-check

import keystatic from '@keystatic/astro';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// Converts Keystatic/Markdoc {% table %} blocks to HTML at build time.
// Keystatic always saves tables as Markdoc syntax; this plugin makes them
// render correctly even after CMS edits.
function remarkMarkdocTable() {
  return (tree) => {
    const nodes = tree.children;
    let i = 0;
    while (i < nodes.length) {
      if (isMarkdocTag(nodes[i], 'table')) {
        let j = i + 1;
        while (j < nodes.length && !isMarkdocTag(nodes[j], '/table')) j++;
        if (j < nodes.length) {
          const inner = nodes.slice(i + 1, j);
          nodes.splice(i, j - i + 1, { type: 'html', value: buildHtml(inner) });
        } else {
          i++;
        }
      } else {
        i++;
      }
    }
  };
}

function isMarkdocTag(node, tag) {
  if (node.type !== 'paragraph') return false;
  const text = extractText(node);
  return text.trim() === `{% ${tag} %}`;
}

function extractText(node) {
  if (!node) return '';
  if (node.type === 'text' || node.type === 'inlineCode') return node.value || '';
  return (node.children || []).map(extractText).join('');
}

function buildHtml(nodes) {
  // Each list node is one row; thematicBreak (---) separates header from body
  const rows = [];
  let isHeader = true;
  for (const node of nodes) {
    if (node.type === 'thematicBreak') { isHeader = false; continue; }
    if (node.type !== 'list') continue;
    rows.push({ cells: node.children.map(item => extractText(item)), header: isHeader });
    if (isHeader) isHeader = false;
  }
  if (!rows.length) return '';
  let html = '<table>\n';
  const headers = rows.filter(r => r.header);
  const body = rows.filter(r => !r.header);
  if (headers.length) {
    html += '<thead>\n';
    headers.forEach(r => {
      html += '<tr>' + r.cells.map(c => `<th>${c}</th>`).join('') + '</tr>\n';
    });
    html += '</thead>\n';
  }
  if (body.length) {
    html += '<tbody>\n';
    body.forEach(r => {
      html += '<tr>' + r.cells.map(c => `<td>${c || '—'}</td>`).join('') + '</tr>\n';
    });
    html += '</tbody>\n';
  }
  return html + '</table>';
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.guspelogia.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
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