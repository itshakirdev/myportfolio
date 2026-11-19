# Portfolio Website (Web Engineering Lab)

Static portfolio built with HTML5, CSS3 (Flexbox, Grid, media queries) and vanilla JavaScript.
Clean warm-white and black design with a blue accent, inspired by the Maliux portfolio layout: "Hi, I’m …" hero with rounded photo, filterable My Works grid, About + stats, Experience, Contact.

## Structure
```
index.html          page structure (semantic HTML)
css/style.css       all styling, light/dark theme, responsive
js/app.js           rendering + edit form + photo upload + export/import
data/profile.json   default content shown to every visitor
vercel.json         Vercel config
```

## Run locally
Open `index.html` in a browser, or run `npx serve .`

## Editing content
1. Click **Edit Portfolio**, change details / upload a photo, press **Save Changes**.
   (Saved in your own browser's localStorage.)
2. To make changes visible to ALL visitors: click **Export** to download `profile.json`,
   replace `data/profile.json` with it, commit and redeploy.

## Deploy on Vercel
**Option A (GitHub):** push this folder to a GitHub repo -> vercel.com -> Add New Project -> import repo
-> Framework Preset: *Other* -> Deploy. No build command or output directory needed.

**Option B (CLI):** `npm i -g vercel`, then run `vercel` inside this folder (`vercel --prod` to publish).
