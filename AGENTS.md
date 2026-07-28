# venari-psycho.github.io - Agent Instructions

## Setup
- Install dependencies: `bundle install`
- If missing, install webrick: `gem install webrick`

## Development
- Build site: `bundle exec jekyll build` (outputs to `_site/`)
- Serve locally with watch: `bundle exec jekyll serve` (http://localhost:4000)

## Important Notes
- Static site: all pages generated at build time, no dynamic backend
- Published via GitHub Pages: push to main branch triggers automatic deploy
- `_site/` directory is excluded from Git (see .gitignore)
- Configuration in `_config.yml` (url, baseurl, locale: 'it_IT', exclusions, plugins)
- Content structure:
  - Pages: root HTML files (index.html, about.html, etc.) with YAML front matter
  - Layout: `_layouts/default.html` used by all pages
  - Partials: `_includes/` (header, footer, analytics, etc.)
  - Data: `_data/` YAML files (contact.yml, social.yaml, etc.)
  - Assets: `assets/` (css, js, img, svg, vendor)
- Front matter convention: `title`, `layout: default`, `home: active` (only on homepage)
- Third-party services: Google Tag Manager and Iubenda (cookie policy) integrated via includes
- The `av-qr-code.py` file is a standalone Python script, not part of Jekyll build