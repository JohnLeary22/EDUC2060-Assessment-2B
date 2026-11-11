# VS Code Implementation Prompt — EDUC2060 Component 2: Assessment Proposal

## Read before editing

Implement Component 2 as a small incremental update to the existing EDUC2060 Assessment 2B website in the currently open project. Read this prompt and the companion file `EDUC2060_Component2_Implementation_Content.json` in full. **The JSON is the sole authoritative source for all Component 2 copy**: exact Step 1/2/3 proposal bodies, all five official rubric descriptors, Step 2/Step 3 revision rationales, and all 11 Step 4 checked explanations. Preserve its strings exactly. Do not invent, paraphrase, silently correct or omit academic wording.

## Project context verified in the existing workspace

The site is plain HTML/CSS/JavaScript modules. The current Component 2 homepage button is in `js/app.js` inside `renderMethodology()` and is a disabled button named “Proposed Assessment Task”. Component 1 uses the existing `#/swot` and `#/change/a1|b1|c1` routes, Step 1/2/3 selectors, a Component 1 Step 4 modal loaded from `Steps/EDUC2060_Component1_Step4_Review.js`, and a global `View Original Work` toggle. Existing relevant paths include `index.html`, `js/app.js`, `js/data/methodology.js`, `js/data/step2.js`, `css/styles.css`, and the `Steps/` folder.

Inspect these files and the current routing/event handling before changing anything. Use the existing patterns and minimal edits. Do not claim Component 1 work needs changing. **Do not edit Component 1 data, passages, comments, sources, modal copy, its greyscale rules, or the Component 1 route behavior.**

## Scope and non-goals

Add a Component 2 — Assessment Proposal presentation with:

1. Step 1: the exact original C-band draft in JSON.
2. Step 2: exact revised B/D-band draft; highlight only actual changes from Step 1 using green/yellow/grey.
3. Step 3: exact A/F-band further revision; highlight only actual changes from Step 2 using blue/red/grey.
4. Step 4: a phrase-by-phrase A-band modal with the exact descriptor and 11 checked explanations from JSON; no Overall Judgement section.

Activate **Proposed Assessment Task** on the homepage. It should navigate to the new Component 2 view. Leave **Multimodal Presentation** disabled/inactive and without a route, blank screen, popover or message. The existing Component 1 homepage button must continue to navigate exactly as before. Add a clear return-to-home link/control for Component 2.

Do not create a student marking rubric. Letter grades are display labels for the achievement levels; do not imply the university awarded a grade. Preserve the A-band descriptor's phrase “critical and enlivened” exactly.

## Data fidelity and versioning

- Use the companion JSON directly as the Component 2 canonical content source, preferably imported as a JSON module from its current `Steps/` path using the same browser-module convention already used for Component 1. Do not paste duplicate copies of proposal paragraphs into UI-renderer code.
- Keep paragraphs and headings in their supplied order. Render the `body` values as plain text with explicit line-break/paragraph handling, or structure paragraph blocks from the supplied exact strings without changing any characters in the text.
- Preserve Step 1 as an independent view. Selecting Step 1 must restore the exact C-band baseline and show no Step 2/3 annotation colours.
- Step 2 compares only `step1` → `step2`; Step 3 compares only `step2` → `step3`. Never color Step 3 by diffing against Step 1.
- JSON `revisionRationale` explains the supplied colors but does not claim machine-verified character offsets. Derive and manually verify phrase-level changed spans against the stated baseline; color only defensible changed phrases, not entire paragraphs. If an exact diff segment is uncertain, use a short changed phrase and verify concatenated displayed text still equals the target version. Do not color unchanged wording.
- Color semantics: Step 2 `G` = green/Relational B, `Y` = muted yellow/Unistructural D, `X` = grey/general. Step 3 `A` = blue/Extended Abstract A, `F` = muted red/Prestructural F, `X` = grey/general. Provide compact legends. Keep the unmarked wording normal.
- Present only the matching rubric references above each version: Step 1 C; Step 2 B and D; Step 3 A and F. Use the exact descriptor sentences in JSON; pale green/yellow cards for Step 2 and pale blue/red cards for Step 3. Display names only (Extended Abstract — A, Relational — B, Multistructural — C, Unistructural — D, Prestructural — F), never numeric score labels.

## Step 4 modal

Reuse the existing Component 1 centred, white, scrollable, blurred-backdrop modal interaction pattern, but implement Component 2 Step 4 as an **isolated modal instance/content** so opening it cannot replace, duplicate, or modify the Component 1 modal. Use the Step 4 strings from JSON exactly:

- Panel title and introduction.
- Exact A descriptor panel, pale blue.
- All 11 items, each with a check icon and exact keyword/explanation.
- Finish after item 11 with return/close controls; do not append another conclusion.
- Close button, Escape, backdrop click, focus return and body-scroll lock should follow the established modal behavior.

Do not add an Overall Judgement section or claim measured classroom outcomes or an awarded mark. Do not change the existing global View Original Work toggle or its appearance/behavior; the Component 2 controls and modal must not modify its selectors, state, or exceptions.

## Interface and accessibility

- Follow the existing calm visual style, typography, spacing and button system. No redesign, dependencies, framework, new page template or unrelated cleanup.
- Add a Component 2 route or state in the existing router, not a second application. Preserve the active Step 1/2/3 state while opening and closing Step 4.
- Use real semantic buttons/links, keyboard-visible focus, accessible names, independent rubric disclosures if used, and mobile layouts without horizontal overflow.
- Step 4 must be scrollable on narrow screens. All text must remain readable.
- Keep the Component 3 homepage control inactive.

## Files and minimality

Prefer reusing the existing application renderer and CSS. A small isolated Component 2 modal script under `Steps/` is acceptable if needed to keep the Component 1 modal untouched. Avoid new files unless they materially isolate Component 2 data or modal behavior. Do not modify the companion JSON or this prompt as runtime files; it is the handover content source.

## Required verification

Run syntax/editor checks and use the local browser preview if available. Report honestly if browser testing is unavailable.

1. Confirm the homepage Component 2 button opens Component 2 and the Component 3 button remains inactive.
2. Confirm Step 1, Step 2 and Step 3 selectors show the exact JSON text; switch back and forth to ensure versions are preserved.
3. Confirm Step 2 colors represent only Step 1→Step 2 changes; Step 3 colors represent only Step 2→Step 3 changes. No raw markup tags show.
4. Confirm each version shows all required descriptor references with exact wording and no numeric scores.
5. Confirm all 11 Step 4 items and exact text appear once, with ticks, and no Overall Judgement.
6. Confirm Step 4 closes by its close button, Escape and backdrop; focus/scroll return works.
7. Confirm Component 1 content, comments, links, routes, reveal behavior, modal, colors and View Original Work mode remain unchanged.
8. Check desktop and approximately 320–390px widths: no clipped descriptor text or horizontal overflow.
9. Check console and editor errors; do not install packages.

## Expected handover

Report only the files changed, a concise account of what was implemented, which checks passed/failed or were not tested, and any discrepancies. Do not continue to Component 3.