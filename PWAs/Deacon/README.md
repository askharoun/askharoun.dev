# Deacon PWA Shell

A minimal, static PWA-ready shell for the liturgy docs. All legacy branding and styles have been removed so you can drop in your own assets and fonts.

## What’s included
- `index.html` with inline styling and service worker registration
- `manifest.json` prefilled for the name “Deacon”
- `service-worker.js` with basic offline caching for static assets
- `docs/` content unchanged

## Customize
- Replace `images/deacon-icon-192.png` and `images/deacon-icon-512.png` with your logo (placeholder maroon squares are provided).
- Add your fonts in `fonts/` (create the folder if needed) and adjust the inline CSS in `index.html`.
- Update `manifest.json` if you move assets or change theme colors.

## Run locally
No build is required. Serve the root directory with any static file server (e.g. `python3 -m http.server 8000`) and open `http://localhost:8000`.
