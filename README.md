# EDUC2060 Assessment 2B presentation aid

A small static website built with plain HTML, CSS and browser JavaScript ES modules. No installation or build step is required.

## Preview locally

From this project folder, run `python3 -m http.server 5500`, then open [http://localhost:5500/#/methodology](http://localhost:5500/#/methodology) in a browser. In VS Code, the folder can also be opened with Live Server by opening `index.html` and choosing **Open with Live Server**.

## Updating content

Edit the relevant single source file in `js/data/`: `methodology.js` for the rubric review, `swot.js` for SWOT items, or `changes.js` for summaries, excerpts, comments, research notes, proposed text and justifications. UI rendering and layout are in `js/app.js` and `css/styles.css`.

## Future extension

Stage 2 may add rubric-band-informed revision layers and additional justifications for each change. Those features are intentionally not included in this Stage 1 presentation.
