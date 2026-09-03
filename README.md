# Serbia.RDM static reconstruction

This is a GitHub Pages-ready reconstruction made from the supplied `scraped.zip`.

## Reconstructed
- 44 unique HTML routes
- 4 PDFs copied from the scrape
- original captured article content
- navigation reconstructed from the captured Joomla menu
- internal Joomla links rewritten to static routes
- responsive static CSS
- browser-only local search
- `.nojekyll` and `404.html`

## Limitation
The supplied scrape contains HTML and PDFs, but no original image/CSS/JavaScript assets.
The site therefore uses reconstructed CSS and shows placeholders where uncaptured local images appeared.

## Publish on GitHub Pages
1. Extract this ZIP.
2. Upload the **contents** of the extracted folder to the repository root.
3. Make sure `index.html` is in the root.
4. Commit the files.
5. Go to Settings → Pages.
6. Choose `Deploy from a branch`.
7. Select `main` and `/ (root)`.
8. Save.

Do not upload private Joomla database dumps to a public repository.
