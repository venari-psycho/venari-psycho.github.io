# ariannaventrelli.it

> Personal website of Dott.ssa Arianna Ventrelli — psychologist and psychotherapist in Rome

**[ariannaventrelli.it](https://ariannaventrelli.it)**

A static Jekyll site built and deployed by GitHub Pages. Content is in Italian; there is no
backend, no database, and no test suite. Five pages — home, about, services, résumé, contact —
plus a cookie policy rendered inside an Iubenda modal.

## Quick start

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000, rebuilds on save
```

If `serve` fails on Ruby 3.x, install the missing web server: `gem install webrick`.

> [!IMPORTANT]
> Analytics, Google Tag Manager and the cookie banner are wrapped in
> `{% if jekyll.environment == "production" %}`, so a plain `serve` renders **none** of them.
> To check anything tracking- or consent-related, build the production equivalent:
>
> ```bash
> JEKYLL_ENV=production bundle exec jekyll build
> ```

## Project structure

```
├── *.html              pages, one per route, at the repository root
├── _layouts/
│   ├── default.html          every page…
│   └── default-modal.html    …except cookie-policy.html, which Iubenda
│                             embeds in an iframe and so ships without
│                             header, footer, analytics and banner
├── _includes/          header, footer, meta tags, third-party snippets
│   └── icon.html       every UI icon, as inline SVG on a 24×24 grid
├── _data/              contact details, service ids, release version
├── assets/
│   ├── css/style.css   the site's stylesheet: :root tokens for colour,
│   │                   z-index and easing, then components
│   ├── js/main.js      mobile navigation, smooth scroll, back to top
│   └── vendor/         Bootstrap's CSS (grid only), jQuery, jQuery Easing
├── _config.yml         site config, plugins, build exclusions
└── CNAME               pins the custom domain
```

## Conventions

Four things the code will not tell you, and that will bite if ignored.

**Navigation highlights by front matter, not by URL.** Each page sets one of
`home | about | resume | services | contact` to `active`, and `_includes/header.html` turns that
into the CSS class. A new page that sets none of them highlights nothing. `home: active` also
gates the Google site-verification meta tag.

**Pages live at the repository root.** Permalinks are flat (`permalink: about`) and every asset
and link path in the layouts is relative (`assets/…`, `href="about"`). A page served from a
nested URL would break every one of them.

**`_data/` is the single source of truth** for anything that repeats: addresses, email, phone,
albo number and VAT in `contact.yml`; analytics and Iubenda ids in `google.yml` and
`iubenda.yml`; the release number in `version.yml`. Edit the YAML, never the HTML — contact
details surface in the footer, the contact page and the structured metadata.

**Releases are tagged.** Bump `release:` in `_data/version.yml` — it is rendered in the page
footer, which is how you tell which build is live — then tag `vX.Y.Z` and publish a GitHub
release. `git tag --sort=-v:refname | head` shows the convention.

## Deployment

There are no CI workflows. GitHub Pages builds and deploys on its own.

> [!NOTE]
> The publishing branch is **`master`**, not `main`. Any documentation saying otherwise is
> stale. Pushing to `master` triggers a deploy; pushing any other branch does not.

## Credits

Built on the [Kelly](https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/)
template by [BootstrapMade](https://bootstrapmade.com/). Fonts, libraries and illustrations are
credited in [credits.md](credits.md).

`av-qr-code.py` regenerates the vCard QR code on the contact page with
[segno](https://github.com/heuer/segno); it is excluded from the build.
