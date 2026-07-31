# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Jekyll site for Dott.ssa Arianna Ventrelli (psychologist/psychotherapist, Rome), served by GitHub Pages at ariannaventrelli.it. Content is in Italian; the site is fully static with no backend and no test suite.

The site started from the BootstrapMade "Kelly" template, but `assets/css/style.css` has since been rewritten around a `:root` token block (colour, z-index and easing scales) and its own components — it is project code now, not template code, and is the right place to edit. `assets/vendor/` has been pruned to what is actually loaded: Bootstrap's CSS for the grid, jQuery, and jQuery Easing.

## Commands

```bash
# Production-equivalent build. Analytics, GTM and the cookie banner are gated
# on this (see "Environment gating"), so a plain serve renders none of them.
JEKYLL_ENV=production bundle exec jekyll build
```

`gem install webrick` if `serve` fails on Ruby 3.x.

## Deployment

No CI workflows. GitHub Pages builds and deploys automatically on push to **`master`** (the repo's default branch; `.github/copilot-instructions.md` says "main" — that is stale). `CNAME` pins the custom domain.

## Architecture

**Pages** are root-level `.html` files with YAML front matter, each rendered by a layout. Two layouts exist:

- `_layouts/default.html` — everything except the cookie policy. Includes header/footer, SEO meta, analytics, cookie banner.
- `_layouts/default-modal.html` — chrome-free variant used only by `cookie-policy.html`, because Iubenda embeds that page inside a modal iframe. It deliberately omits header, footer, GTM, analytics, and the cookie solution. Changes to `default.html` do **not** propagate here; update both when the change is structural.

**Navigation highlighting** works by front matter key, not by URL. Each page sets one of `home|about|resume|services|contact: active`, and `_includes/header.html` emits `class="{{ page.home }}"` etc. A new page must set the key matching the nav item it belongs under (`resume-2.html` sets `resume: active`), or no nav item highlights. `home: active` additionally gates the Google site-verification meta tag.

**Asset and link paths are relative** (`assets/...`, `href="about"`), and pages use flat `permalink:` values (`permalink: about`). Keep pages at the repo root — a page rendered at a nested URL would break every asset reference in the layout.

**Environment gating**: `_includes/google-analytics.html`, `google-tag-manager-script.html`, `google-tag-manager-no-script.html`, and `iubenda-cookie-solution.html` are each wrapped in `{% if jekyll.environment == "production" %}`. A plain `jekyll serve` therefore renders *no* analytics, GTM, or cookie banner — build with `JEKYLL_ENV=production` when verifying anything tracking- or consent-related.

**`_data/` is the single source of truth for facts that repeat across pages**: `contact.yml` (addresses, email, phone, albo number, P.IVA), `social.yaml`, `google.yml` (GA/GTM ids), `iubenda.yml` (site + policy ids), `version.yml`. Edit the YAML, not the HTML — contact details appear in the footer, contact page, and structured metadata.

**Versioning convention**: `_data/version.yml` holds `release: vX.Y.Z`, rendered in `_includes/sub-footer.html`. Git history shows it bumped as part of shipping user-visible changes ("Bump release version in _data/version.yml").
