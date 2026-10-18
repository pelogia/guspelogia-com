# guspelogia.com

Gus Pelogia's personal site. Built with [Astro](https://astro.build), content in Markdown, edited via [Keystatic](https://keystatic.com), hosted on [Netlify](https://netlify.com) and deployed from [GitHub](https://github.com/pelogia/guspelogia-com).

## Publishing a blog post (no code required)

1. Go to **[guspelogia-com.netlify.app/keystatic](https://guspelogia-com.netlify.app/keystatic)** and log in with GitHub.
2. Click **Blog Posts → Add**, fill in title, description, dates, hero image and content.
3. Click **Save** — this commits directly to the `main` branch on GitHub.
4. Netlify rebuilds and redeploys automatically (~1 minute). No pull request, no review step — it goes live as soon as you save.

The slug (and URL) is generated from the title automatically. To edit an existing post, click it in the list.

## Editing a static page (SearchIRL, Public Speaking, SEO Tools, Home)

These pages aren't in Keystatic — they're plain Astro files, since they're mostly fixed layout rather than ongoing writing:

- `src/pages/index.astro` — home
- `src/pages/searchirl.astro`
- `src/pages/public-speaking.astro`
- `src/pages/sweetspot.astro`
- `src/pages/user-agent-bulk-checker.astro`

To change one: edit the file, run `npm run dev` to preview at `localhost:4321`, then commit and push. Netlify deploys automatically on every push to `main`.

## Local setup

Requires Node ≥22.22 (the repo's system default may be older — this project uses [nvm](https://github.com/nvm-sh/nvm) to pin the right version via `.nvmrc`).

```bash
nvm use        # or: nvm install, if you don't have 22.22 yet
npm install
npm run dev    # localhost:4321
```

`npm run build` builds to `dist/`; `npx astro check` type-checks the project.

Keystatic runs against your local filesystem in dev (no login needed) and against GitHub (OAuth login) in production — see `keystatic.config.ts`.

## Handling Dependabot PRs

Dependabot opens a pull request on GitHub whenever a dependency has an update (weekly, or immediately for security fixes). Each PR gets a Netlify deploy preview automatically — check the preview link in the PR, and if the site still looks right, merge it. If Astro or Keystatic get a major version bump, read the PR description for breaking changes before merging.

## Project structure

```text
src/
  content/blog/<slug>/index.md   # one folder per post, written as Markdown
  assets/uploads/blog/            # images used in posts (Keystatic uploads here)
  assets/pages/                   # images used by the static pages above
  pages/                          # routes — blog posts render via [...slug].astro
  components/, layouts/, styles/  # shared UI and the design system
keystatic.config.ts               # defines what's editable in the CMS
astro.config.mjs                  # integrations, fonts, site URL
netlify.toml                      # build command and Node version for Netlify
public/_redirects                 # 301s for retired Wix URLs
```

## Redirects

`public/_redirects` holds 301s for Wix URLs that no longer exist on the new site (e.g. `/40b`, `/blog/categories/blog`). Every other URL from the old site was preserved as-is. If you retire a page in the future, add a redirect line there rather than letting it 404.
