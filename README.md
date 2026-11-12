# Peng Cai · Personal homepage

A standalone personal homepage for [cpbianma.github.io](https://cpbianma.github.io/), built with semantic HTML, vanilla CSS, and a small JavaScript file. No framework, package install, or build step is required.

## Preview locally

Open `index.html` directly, or run:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Files

- `index.html`: real profile, project, education, and contact content, with CN/EN copy in data attributes.
- `styles.css`: warm light theme, warm dark theme, responsive layouts, interaction states, and reduced-motion handling.
- `script.js`: language switching, theme switching, preference storage, and avatar fallback.
- `assets/favicon.svg`: PC monogram favicon.

## Edit content

Project descriptions contain `data-cn` and `data-en`. Keep both versions when editing copy. Technical names and project titles can remain shared.

The visual tokens are at the top of `styles.css`. The light theme uses a restrained warm page background rather than pure white; the dark theme uses a separate warm charcoal palette rather than color inversion.

## Deployment

This repository is named `CPbianma.github.io`, so GitHub Pages serves the root of `main` at `https://cpbianma.github.io/`.

The GitHub Profile at [github.com/CPbianma](https://github.com/CPbianma) remains a separate Markdown/SVG implementation.
