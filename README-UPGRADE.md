# NeedATyre Supplier API Upgrade

Copy these files into your existing Next.js project.

This upgrade adds:
- Secure supplier API routes
- Mock fallback live tyre stock/pricing
- Vehicle lookup route
- Booking route
- Upgraded results page using API data
- Admin supplier health check page
- Environment variable examples
- Robots and sitemap

## Install

```cmd
npm install
npm run build
git add .
git commit -m "Add supplier API integration upgrade"
git push origin main
```

## Vercel environment variables
Add these in Vercel > Project Settings > Environment Variables:

```env
SUPPLIER_1_NAME=
SUPPLIER_1_BASE_URL=
SUPPLIER_1_API_KEY=
SUPPLIER_2_NAME=
SUPPLIER_2_BASE_URL=
SUPPLIER_2_API_KEY=
VEHICLE_LOOKUP_BASE_URL=
VEHICLE_LOOKUP_API_KEY=
```

If no live API details are set, the routes return mock data so the site still builds and works.
