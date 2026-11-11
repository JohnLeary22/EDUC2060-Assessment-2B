# EDUC2060 presentation — “View Original Work” visual mode

## Scope of this file

This is a **visual-behaviour specification only**. Implement a reversible, presentation-only **View Original Work** mode in the website that already exists. It does not change academic content or the wording of the SWOT statements. Any text edits, removal of A1/B1/C1 labels, final-review deletion, or additional navigation are described in the separate VS Code instruction supplied by the user. Do not infer content edits from this file.

## Core behaviour

- Add a clearly named **View Original Work** button to the main menu, using the site's existing button design. Activating it enables a `view-original-work` visual state across the existing website. The button can become **Return to Full View** (or a similarly clear exit label) while active. Pressing it again exits the mode.
- **Default appearance MUST be unchanged**. Apply all dimming ONLY while this mode is enabled; never permanently change normal text colours. Preserve the selected mode when navigating between the methodology, SWOT, Replacement, Expansion, Insertion, and final-review modal within the open page.
- The mode is intentionally a *selective de-emphasis*, not a disabled or locked state. All links, menus, pins, modal controls, buttons and checkboxes must remain fully functional and keyboard accessible. Do not apply `pointer-events: none`, `disabled`, `aria-disabled` or any handler removal solely because an item is visually dimmed.
- Use a very pale, neutral grey treatment for nominated text and controls. The visual effect should make the nominated parts recede so the substantive student-work text remains prominent. Prefer CSS classes and one page-level state selector, not inline styles scattered throughout the content or brittle `nth-child()` selectors. Do not apply `opacity` to large ancestor containers if descendants must stay fully legible; split titles into spans if needed. Keep user-visible text exactly as written unless separately instructed.
- Suggested neutral colour for dimmed text: `#B0B5B4` (adjust slightly to suit the existing off-white background). On strongly filled buttons, a low-contrast pale neutral style is acceptable, but buttons must remain identifiable. Active pins and highlighted comment content should remain usable. No fade transition longer than 200 ms.
- Preserve all existing original/revised views, Step 1–4 functionality, word-level Step 2 green/yellow/grey and Step 3 blue/red/grey comparison colouring. Do not override comparison highlighting or hide research citations. If the user toggles the mode while the Step 4 modal is open, update its presentation in place.

## Specific selective dimming map

### A. Main methodology / home page

DIM in View Original Work mode:
1. Small website masthead and context text (`EDUC2060 · Assessment 2B`, `Unit plan review`).
2. Decorative overline (`A considered redesign · Stage 5 Year 9 Commerce`) and other non-essential hero labels seen in the supplied screenshots.
3. In the main heading **How I evaluated and redesigned the unit plan**, dim **only the words “evaluated and”**. Keep **“How I”** and **“redesigned the unit plan”** prominent.
4. The eyebrow **A repeatable review process** and the heading **Review the full five-band criterion**.
5. The methodology checklist/card, including its explanatory labels and the expandable **First criterion · verified rubric descriptors** section and its five band-description rows.
6. The **Start with the evidence** panel: eyebrow, descriptive sentence and **SWOT analysis** button label/background (button continues to work).
7. Small footer/meta text such as `EDUC2060 · Presentation aid` and `Stage 1 draft`.

DO NOT DIM the unselected words of the main heading, and do not make rubric/section toggles unusable.

### B. SWOT analysis page

DIM:
1. Navigation/back-link text (`Back to methodology`) without removing the link action.
2. The **Design observations** eyebrow and the sentence explaining these are observations about the written plan.
3. In the heading **SWOT analysis of the original unit**, dim **only “of the original unit”**; keep **“SWOT analysis”** fully prominent.
4. Each quadrant category heading (Strengths, Weaknesses, Opportunities, Threats) and each individual point's descriptive **title**.
5. The **From observation to action** eyebrow and **Three proposed changes** heading.

KEEP PROMINENT:
- The category/point **codes** `S1–S5`, `W1–W5`, `O1–O5`, `T1–T5` and their numbered/letter badges wherever used. They are not titles to dim.
- The one-sentence analytical SWOT **body statements**, unless an existing site behaviour already selectively de-emphasises certain independent text; preserve the already-requested selective treatment rather than applying broad opacity to the entire quadrant.

### C. The three change-selection cards

Apply identically to Replacement, Expansion and Insertion. DIM the large **bold explanatory card title** (e.g. `Improve a weak activity — Recruitment and selection simulation`) and the **Explore this change** link. KEEP prominent the **small category label** `Replacement`, `Expansion`, or `Insertion` and the **middle explanatory paragraph** in each card. Do not dim a whole card with opacity because that would also dim the required bright paragraphs. Keep the card links clickable.

### D. Each individual change page (ALL THREE)

DIM:
1. Shared masthead/context text, redundant breadcrumb/back-navigation labels.
2. **SWOT points informing this change** label (checkbox/control remains usable).
3. The *placeholder* `DOCUMENT COMMENTS / Select a pin / Choose one of the labelled pins ...` panel. An actual opened SWOT comment and its code should remain readable so the commentary can be presented.
4. The `Reveal my proposed change` and `Hide my proposed change` buttons (still operative).
5. The heading **Research informing this change**; leave the actual cited research text and source links readable.
6. The section eyebrow **Replacement · Original source material**, **Expansion · Original source material** or **Insertion · Original source material**.
7. **Read the original in context** and **Unit plan excerpt — original** headings.
8. The **ENTIRE authentic original NESA unit-plan excerpt text**, including original paragraphs, bullet points and subheadings. The excerpt must remain present, with real omission ellipses as previously agreed. The interactive SWOT pin labels/badges should remain discernible and operable. An active anchor can still show the existing focused highlight.
9. The revised-text eyebrow `My revised unit-plan text · Draft 1` (or corresponding draft/step label), and the **bold title of the student's proposed activity**, for each of the three changes. **Do not dim the revised teaching sequence body**.
10. The labels/borders of `Previous change` and `Next change` bottom navigation controls (after those controls have been added separately). The controls remain operable; only the appearance is muted.

KEEP PROMINENT:
- The key student-authored content: the actual 25-word SWOT critique comments when selected, the rewritten 200-word teaching-sequence body, the 100-word justification body, research body and cited evidence, and coloured word-level Step 2/Step 3 edits.
- The identifying category labels `Replacement`, `Expansion`, `Insertion` where these serve as the small top labels.

### E. Step 4 final-review modal

DIM:
1. Small eyebrow `Component 1 · Step 4`.
2. In the main heading **Final review against the A-band criterion**, dim **only “against the A-band criterion”** and keep **“Final review”** fully prominent.
3. Subtitle `A final, phrase-by-phrase self-assessment ...`.
4. The panel displaying the **Extended Abstract · A band · 10 points** descriptor, including its background/border and descriptor text.
5. The subheading `Checking each key phrase`.
6. The `Close ×` and `Return to the presentation` controls (still clickable and keyboard operable).

KEEP PROMINENT:
- **All ten checked justification items and all their supporting explanatory text**: Three changes; Sophisticated; Identified; Implementation; Would support; Critical; And; Enlivened; Engagement; Learning experiences. These constitute the main work being presented.
- Check icons and item labels. The review must remain scrollable, closeable and readable while open over the normal blurred website backdrop. Apply dimming to the panel's chosen elements, not to the entire modal ancestor (which would dim the ten checks).

## Visual/technical safeguards

- This visual mode must not re-write SWOT statements, NESA excerpts, academic drafts, citations, rubric descriptors, annotations or stored application data.
- Preserve existing differences between Stage 1, Stage 2 and Stage 3; this mode is not a substitute for the coloured comparison view.
- Keep reasonable keyboard focus outlines, pointer cursor, active button state and modal escape/close controls even when dimmed.
- Do not introduce routing frameworks, dependencies, build tools or new pages just for this feature. Prefer one CSS mode class and a small existing-JS event handler, with narrowly scoped semantic classes for precise partial-title dimming.
- Validate the default view first: it should look exactly like the original design before the mode was introduced. Then enable the mode and inspect home, SWOT, each of the three change pages, and the Step 4 modal. Toggle back and ensure every colour and interaction fully restores.

## Acceptance checklist

- [ ] Only the enabled View Original Work mode greys nominated elements; default mode is unchanged.
- [ ] Homepage main heading only dims `evaluated and`.
- [ ] SWOT title keeps `SWOT analysis` prominent; descriptive suffix fades.
- [ ] Every SWOT identifier remains prominent while its descriptive heading fades.
- [ ] Change cards keep their category labels and central paragraphs prominent but dim bold headlines and links.
- [ ] All three change pages apply the same selective rules.
- [ ] Original NESA excerpt text fades, but pins and selected annotations still work.
- [ ] Revised activity body, SWOT-comment body, justification body and citations remain legible.
- [ ] Final review keeps the ten checked items normal, but dims the nominated surrounding presentation chrome.
- [ ] No button, link, keyboard action or navigation stops working because of fading.
- [ ] Returning to Full View completely restores the original colours, including Steps 2 and 3 change highlighting.
