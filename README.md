# NeedATyre Complete Upgrade Build

Vercel-ready Next.js build for NeedATyre.

## Run locally

```cmd
npm install
npm run build
npm run dev
```

## Deploy

```cmd
git add .
git commit -m "Install NeedATyre complete upgrade"
git push origin main
```

This build deliberately avoids importing `globals.css` in `layout.tsx` because the earlier project had a CSS module resolution issue. Styling is inline and build-safe.
