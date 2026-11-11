# EDUC2060 WEBSITE — SMALL HOMEPAGE + THREE-COMPONENT RUBRIC UPDATE

This is a narrowly scoped correction to an EXISTING working website. Do NOT rebuild, re-theme, reorganise, refactor the application, add packages, or change any completed Component 1 material. Inspect the existing relevant markup/data/CSS before editing. Make the smallest stable code changes and reuse current navigation, data and component patterns.

## 1. Correct the homepage title (exact text)

Replace the large title with:

**How I evaluated and approached this assessment**

Keep ONLY the words **“evaluated and”** greyed out when the existing **View Original Work** mode is ON. In normal mode the whole title is the existing dark text. Do not fade the header or its parent container. Keep its existing typography and responsive wrapping; allow a natural line break at small widths.

Do not alter the rest of the left-hand methodology card or the four established rubric-review steps.

## 2. Replace the RIGHT-HAND homepage panel with EXACTLY THREE buttons

Remove all of that panel's current copy, including “START WITH THE EVIDENCE”, the explanatory paragraph and the standalone “SWOT analysis” button. Keep the panel container, size, spacing, rounded border and existing quiet theme. Replace its contents with a vertical stack of three buttons, and NOTHING ELSE visible in the panel:

1. **Three substantial changes to the Unit Plan** — active; use the existing navigation action for the SWOT-analysis/Component 1 page. Do not change the page it opens.
2. **Proposed Assessment Task** — visible but not yet functional; no navigation, empty page, route, popover or placeholder message.
3. **Multimodal Presentation** — visible but not yet functional; no navigation, empty page, route, popover or placeholder message.

Use real `<button type="button">` controls. For buttons 2 and 3 use semantic disabled/unavailable behaviour, without greying them out or reducing their opacity; give them the same calm visual treatment and readable contrast as button 1 (they must NOT fade in View Original Work mode). Distinguish unavailable status accessibly through an appropriate accessible name or description, not through additional visible text in the panel. Button 1 remains keyboard-operable. Buttons 2 and 3 must not initiate any action even when clicked or keyboard-activated. Do not link them to `#`, blank routes or the existing component.

**Important:** Component 2 is being DRAFTED separately in chat. Do NOT add its task proposal to the site yet. Similarly do NOT build Component 3 content or pages now.

## 3. Fix and complete the rubric reference under the methodology

Currently the “First criterion · verified rubric descriptors” section shows only Component 1, and its words collapse into an unusably narrow column in the screenshot. Replace that section's presentation with a clear, accessible reference headed **Assessment rubric — three components**. It must contain three criterion groups, each with ALL FIVE official descriptor sentences, in the exact A/B/C/D/F sequence below.

Suggested minimal UI: three independent disclosure/accordion groups titled:

1. **Unit plan changes**
2. **Assessment proposal**
3. **Multimodal presentation**

Use the existing disclosure style where possible; keep the first criterion expanded initially and let the other two open independently. Display each achievement band as a clean horizontal row with a grade/name column and a readable descriptor column. **Avoid a collapsed grid or narrow first column in which each word falls onto its own line.** The description column must flex to occupy remaining width. If space is constrained (e.g. under 650px), stack the name above the descriptor inside each row. The rubric area must use all available width within its card; never use a forced fixed-width layout that squeezes the descriptor text. No horizontal scrolling on phone-width screens. No unrelated font/layout changes outside this rubric section.

Display names, NOT numeric points, in band labels:
- Extended Abstract — A
- Relational — B
- Multistructural — C
- Unistructural — D
- Prestructural — F

These letters are presentation labels; the assessment rubric's official criterion wording is unchanged. Do not suggest the university itself supplies those letter grades. Keep the actual descriptor sentences exactly as supplied here (they were verified against the course assessment brief). Do not shorten, paraphrase, combine, or alter the descriptors.

### Criterion 1 — Unit plan changes

**Extended Abstract — A:** Three sophisticated changes have been identified in the unit plan, and their implementation would support critical and enlivened engagement with learning experiences.

**Relational — B:** Three effective changes have been identified in the unit plan, and their implementation would support critical or enlivened engagement with learning experiences.

**Multistructural — C:** Three changes are identified in the unit plan, and are appropriately selected to support meaningful student learning.

**Unistructural — D:** Identifies one or more changes but they may not have been necessary, or an opportunity to engage more critically with the unit plan has been missed.

**Prestructural — F:** Changes are absent, superficial, or unrelated to the unit context. Limited understanding demonstrated. Or not included in submission.

### Criterion 2 — Assessment proposal

**Extended Abstract — A:** Creates an authentic, engaging, and appropriately challenging assessment proposal demonstrating sophisticated understanding of assessment. The content is clearly linked to the unit plan, and supported by selected outcomes.

**Relational — B:** Justifies assessment design and demonstrates alignment between effectively selected outcomes, the content of the unit plan, and assessment principles.

**Multistructural — C:** Develops a suitable assessment task that would support student engagement with appropriately selected outcomes as linked to the unit content.

**Unistructural — D:** Proposes an assessment task with limited justification or connection to learning goals.

**Prestructural — F:** Assessment is unclear, inappropriate, or lacks alignment with outcomes. Or not included in submission.

### Criterion 3 — Multimodal presentation

**Extended Abstract — A:** Delivers an engaging, polished, and persuasive presentation that critically justifies design decisions and demonstrates reflective professional practice.

**Relational — B:** Effectively synthesises and communicates decisions, demonstrating clear organisation and purposeful use of multimodal elements.

**Multistructural — C:** Presents key elements clearly using appropriate multimodal features.

**Unistructural — D:** Presentation communicates basic information with limited use of multimodal elements.

**Prestructural — F:** Presentation lacks organisation and does not clearly communicate key ideas. Or not included in submission.

Preserve the criteria text in source data (prefer the existing `js/data/methodology.js` if appropriate), not hardcoded in many places. Keep the existing `View Original Work` treatment: in that mode the rubric disclosure's supporting header and all descriptor reference text should fade; the actual four-step methodology and Week 10 workshop note must remain full-contrast and legible. Do not apply opacity to a parent containing exempt elements.

## 4. Preserve all prior work and visual-state logic

Unchanged: SWOT page, all twenty one-sentence SWOT statements, the three category labels `1) Replacement`, `2) Expansion`, `3) Insertion`, the original NESA excerpts, the comment pins, Steps 1–3 wording and coloured differences, Step 4 modal and ten checked justifications, research sources, navigation between the three changes, and all working modes and animations. Do not regress the existing page layouts or final-review panel. Do not add Component 2/3 routes or assets.

## 5. Focused verification and handover

Run existing checks, if present. Verify in browser if browser access is available, and say plainly when it is not:

- Homepage title is exact; only “evaluated and” fades in View Original Work mode.
- Right panel has exactly three full-width buttons, NO other visible content. Component 1 works; Components 2/3 neither navigate nor do anything.
- All three rubric criteria appear as accessible group headings and each reveals all five full descriptor sentences.
- Rubric descriptors are READABLE at desktop width and ~320–390px width, with no one-word-per-line wrapping, clipping or sideways overflow.
- The rubric reference fades in View Original Work mode but the four-step methodology and workshop note stay prominent.
- Component 1 content remains exactly as before and its controls still work.

Return a short report containing the exact files edited, what was checked, and any unverified tests. Do not create screenshots or a large review report unless a problem makes them necessary. Do not perform unrelated polishing or ask for an additional framework.
