# kevincifuentes.github.io

Personal site for Kevin Cifuentes Salas: payments, distributed systems and the work behind them.

Angular 22, prerendered to static HTML with `outputMode: "static"`. No server, no runtime framework cost beyond hydration.

## Commands

```bash
npm install
npm start          # dev server on http://localhost:4200
npm run build      # prerendered output in dist/kevincifuentes-github-io/browser
npm test           # unit tests
```

## Structure

```
src/
  content/       typed copy and data, the only place content lives
  styles/        tokens, base and print stylesheets
  app/
    core/seo/    title, meta, OG, JSON-LD
    features/    home page sections
    layout/      footer
public/          fonts, images, favicon, robots, sitemap
design/          source images and the asset recipe
docs/            PRODUCT.md and DESIGN.md
```

## Deploying

Push to `master`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes the prerendered output to GitHub Pages. Nothing built by hand is committed.

## Editing content

All copy is in `src/content/profile.ts`. Change it there, never in a template.

## Images

Source images live in `design/source/`. `design/build-images.sh` regenerates every size and format into `public/images/`. Run it after replacing a source image.
