# Copilot Instructions for venari-psycho.github.io

## Project Overview

This is a Jekyll-based GitHub Pages personal website for Dott.ssa Arianna Ventrelli (a psychologist/psychotherapist). The site is built with Jekyll and hosted on GitHub Pages using a Bootstrap-based template (Kelly from BootstrapMade).

## Build, Test, and Serve

### Setup
```bash
# Install dependencies
bundle install

# Or install webrick if missing (required for local Jekyll development)
gem install webrick
```

### Local Development
```bash
# Build site (outputs to _site/)
bundle exec jekyll build

# Serve locally with auto-reload (watch mode)
bundle exec jekyll serve
# Site will be available at http://localhost:4000
```

### Key Build Information
- The site builds to `_site/` directory
- `_site/` is excluded from Git (see .gitignore)
- jekyll-environment-variables plugin allows using environment variables in templates
- jekyll-sitemap plugin auto-generates sitemap.xml

## Architecture & Key Directories

### Core Layout
- **`_layouts/default.html`** - Main page template (single layout file for all pages)
- **`_includes/`** - Reusable template partials:
  - `header.html`, `footer.html`, `sub-footer.html` - Page structure
  - `google-tag-manager-script.html`, `google-tag-manager-no-script.html` - Analytics
  - `open-graph-tags.html`, `twitter-card-tags.html` - Social media metadata
  - `iubenda-*.html` - Cookie policy & privacy policy (third-party service)
  - `share-buttons.html` - Social sharing

### Content Structure
- **Root HTML files** - Main pages:
  - `index.html` - Homepage (marked with `home: active` in frontmatter)
  - `about.html`, `services.html`, `contact.html` - Main sections
  - `resume.html`, `resume-2.html` - CV/resume versions
  - `cookie-policy.html`, `credits.md` - Legal/credits
  - `404.html` - 404 error page
- **`_data/`** - YAML data files (configuration):
  - `contact.yml` - Contact information and business details
  - `social.yaml` - Social media links
  - `google.yml`, `iubenda.yml` - Service credentials/IDs
  - `version.yml` - Site version number

### Static Assets
- **`assets/`** - Static files:
  - `css/` - Stylesheets
  - `js/` - JavaScript files
  - `img/` - Images
  - `svg/` - SVG graphics
  - `vendor/` - Third-party libraries (owl-carousel, etc.)

### Configuration
- **`_config.yml`** - Jekyll site configuration:
  - `url`, `baseurl` - Site domain and path
  - `locale: 'it_IT'` - Italian locale
  - Excluded files: `Readme.txt`, `av-qr-code.py`
  - Excluded from sitemap: `assets/**`
- **`CNAME`** - Custom domain (ariannaventrelli.it)

## Conventions & Patterns

### Front Matter
- All HTML pages use YAML front matter:
  - `title` - Page title (used in HTML `<title>` and meta tags)
  - `layout: default` - Always uses the default layout
  - `home: active` - Set on homepage only (triggers Google site verification)
- Example:
  ```yaml
  ---
  title: Dott.ssa Arianna Ventrelli
  home: active
  layout: default
  ---
  ```

### Navigation & Links
- Internal links use relative paths (e.g., `href="about"`)
- Main sections link from header and footer includes
- Page structure: each page is a self-contained HTML file with layout applied

### Metadata & SEO
- All pages automatically include:
  - Open Graph tags (for social sharing)
  - Twitter Card tags
  - Meta description from `_config.yml`
  - Comprehensive Italian keywords in default layout
- Homepage includes Google Site Verification meta tag

### Internationalization
- Site is configured for Italian (`locale: 'it_IT'` in _config.yml)
- Content is in Italian
- Keywords and descriptions reference Italian locations and services

### Third-Party Services
- **Google Tag Manager** - Analytics (loaded in header and with no-script fallback)
- **Iubenda** - Cookie policy and privacy policy management
- Cookie consent solution included via iubenda

### Data-Driven Content
Contact information and business details are centralized in `_data/contact.yml`:
- Email, phone, professional registration number
- Multiple office addresses
- Business name and VAT number
- Use `{{ site.data.contact.email }}` etc. in templates

## Important Notes

- **No .cursorrules or other AI config files** - Only this copilot-instructions.md exists
- **Static site** - No dynamic backend; all pages are static HTML generated at build time
- **Published via GitHub Pages** - Push to main branch triggers automatic build and deployment
- **Bootstrap-based template** - Core styling from Kelly template; custom CSS in `assets/css/`
- **The `av-qr-code.py` file** - Python script (likely for QR code generation); not part of the Jekyll build
- **`_do_not_push` directory** - Contains files intentionally excluded from the repo
