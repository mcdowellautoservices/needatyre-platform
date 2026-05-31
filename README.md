# NeedATyre Complete Upgrade

A build-safe Next.js 14 tyre booking platform starter for NeedATyre by Mcdowell Auto Services.

## Included

- Branded NeedATyre homepage
- Logo SVG in `/public/logo.svg`
- Build-safe `layout.tsx` with no global CSS import
- Inline styling to avoid the previous `globals.css` import error
- Navigation pages for tyres, mobile fitting, breakdown, fleet, garages, booking, results, checkout and customer
- Mock API routes for vehicle lookup, tyre results and bookings
- Vercel-ready config

## Install

```cmd
npm install
npm run build
npm run dev
```

## Deploy

```cmd
git init
git add .
git commit -m "Complete NeedATyre upgrade"
git branch -M main
git remote add origin https://github.com/mcdowellautoservices/needatyre-platform.git
git push -f origin main
```

Vercel should deploy from the `main` branch.
