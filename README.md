# Imperial Partners Club — Website

Next.js 14 (App Router) + Tailwind CSS 3. Builds to **static files**, so it runs
on cPanel/GoDaddy with no Node server, and also deploys to Netlify as-is.

## Run locally (VSCode)
Requires Node.js 20+ (Next.js 16).
```bash
npm install      # once
npm run dev      # http://localhost:3000 — live reload while editing
```

## Build for production
```bash
npm run build    # outputs static site into the ./out folder
```
Everything to deploy is inside `out/`. Nothing else is needed on the server.

---

## Deploy A — Netlify (testing)
**Option 1 — drag & drop (fastest):**
1. Run `npm run build`.
2. Go to https://app.netlify.com/drop and drag the **`out`** folder in.

**Option 2 — connect the Git repo (auto-deploy on push):**
1. Push this folder to GitHub.
2. Netlify → Add new site → Import from Git → pick the repo.
3. Build command: `npm run build`  •  Publish directory: `out`

## Deploy B — cPanel / GoDaddy (production)
Your domain already points at this hosting, so you only upload files.
1. Run `npm run build` locally.
2. Zip the **contents** of `out/` (the files inside it, not the folder itself).
3. cPanel → **File Manager** → open `public_html`.
4. Upload the zip, then **Extract** it there. (Back up/clear old site files first.)
5. Visit your domain — done. No Node setup required.

> Updating later = repeat: `npm run build`, then re-upload `out/`.

---

## Editing content
- **Text, tiles, pricing, links, contact:** `lib/content.js` (one file).
- **Brand colors & fonts:** `tailwind.config.js` (colors) and `app/globals.css` (visual treatments).
- **Section layout/markup:** `components/*.js` — one file per section.

## Notes
- **Fonts:** Cinzel + Montserrat load via `<link>` in `app/layout.js` (Google Fonts).
- **Images:** currently luxury stock placeholders (URLs in `lib/content.js` and
  `components/Hero.js` / `CtaBand.js`). Swap these for your final images. For best
  performance, drop final images into `public/` and reference them as `/your-image.jpg`.
- **Hosting note for later:** when you add the member portal + logins, that phase
  needs a Node host (Netlify/Vercel/VPS) rather than static cPanel — the codebase
  is already structured for it; only where it *runs* changes. Domain stays at GoDaddy.

## Dependency security
Pinned to current supported majors: **Next.js 16 + React 19**. Run `npm audit` and
you'll see 2 *moderate* notices from a build-time `postcss` advisory bundled inside
Next/Tailwind — these affect CSS tooling at build time, not the deployed static site,
and clear once those packages bump their bundled copy. **Do not run `npm audit fix --force`**
(it tries to downgrade Next.js to an ancient version). To upgrade safely later:
`npm install next@latest react@latest react-dom@latest`.
