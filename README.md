# Civics & Elections: Signal Pool

A static, read-only presentation of a Frame Creation web map, exported from The
Labs Sensemaking Engine. It is self-contained and ready to host on GitHub Pages.

## Layout
- `index.html` — the presentation shell (hydrates from the files below)
- `assets/` — `style.css` and `viewer.js` (renders the report + spatial map)
- `data/` — `project.jsonld` (semantic graph + coordinates), `extracts.csv`
  (validated extracted signals), and `site-data.js` (a fallback so the page also
  renders when opened directly via `file://`)
- `content/` — `situation.md` and `themes.md` (the human-readable narrative)

## Publish on GitHub Pages
1. Commit this folder to a repository (root or a `/docs` folder, or a `gh-pages` branch).
2. In the repo: **Settings → Pages**, pick the branch (and `/docs` if you used it).
3. Visit `https://<user>.github.io/<repo>/` — the report and web map render there.

Opening `index.html` by double-click works too (via `data/site-data.js`), but for
full fidelity serve it over HTTP — locally that's `python3 -m http.server`.
