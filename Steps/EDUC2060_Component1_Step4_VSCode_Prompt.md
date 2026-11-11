# VS Code agent task — Add Component 1 Step 4 final rubric review

## Scope: one small, carefully isolated update

You are editing my **existing** EDUC2060 Assessment 2B presentation website. **Do not create a new website, redesign anything, rewrite earlier academic content, or run a project-wide refactor.**

I have placed the following **single self-contained feature file** in the active website project folder:

`EDUC2060_Component1_Step4_Review.js`

It already contains the **complete reviewed Step 4 text, the exact A-band descriptor, all ten checked justifications, its modal HTML generated in JavaScript, and its own isolated CSS**. Its public interface is:

```js
window.EDUC2060Step4.open();
window.EDUC2060Step4.close();
```

**Use the file as supplied. Do not ask AI to regenerate, paraphrase or expand its text.** You only need to connect it to the existing website.

## What the visitor should experience

1. After completing the existing **Component 1 Step 3** view, I can press one new, appropriately placed button labelled **“Step 4 · Final rubric review”**. Prefer adding it alongside the existing Step 1/Step 2/Step 3 controls in the Component 1 change views, reusing their styling, instead of introducing a new site-wide page or navigation item.
2. The background website becomes **visibly blurred/fuzzy and subtly dimmed**, while a **single centred, white, scrollable review panel** appears in front. The original page stays in place and can be returned to instantly.
3. The panel shows the **verbatim Extended Abstract rubric (A band, 10 points)** first:

   > Three sophisticated changes have been identified in the unit plan, and their implementation would support critical and enlivened engagement with learning experiences.

4. Beneath it, ten checked key phrases — **Three changes; Sophisticated; Identified; Implementation; Would support; Critical; And; Enlivened; Engagement; Learning experiences** — each explain **specifically** how our A1 recruitment simulation, B1 local-business site study expansion and C1 AI-adoption decision investigation support the criterion. These explanations are already authored inside the JS file.
5. The final judgement is **our argued self-assessment, not a claim that a teacher has awarded a mark**. Retain that qualification.
6. Closing the panel returns to exactly the previously selected change and stage. Close must work with the **Close ×** button, **Escape**, clicking outside the panel, and the bottom return button. Background scrolling should be blocked while open and restored when closed. Keyboard focus should return to the triggering button.

## Integration: minimum code changes

- **First inspect** the existing folder and identify the current Component 1 stage-selector implementation. Do not assume a framework or a file path; use what is already there.
- Load the new file **exactly once**, preferably with a single deferred script tag in the existing HTML entry point, adjusted to its actual path. For example, if placed in the project root:

  ```html
  <script defer src="./EDUC2060_Component1_Step4_Review.js"></script>
  ```

- Add **one Step 4 trigger** to the existing Component 1 presentation controls; where the controls are repeated for A1/B1/C1, reuse the same trigger pattern rather than duplicating the modal or its data. Wire the click to:

  ```js
  window.EDUC2060Step4.open();
  ```

- **Do not** implement a fourth version of the SWOT comments, 200-word teaching sequence or 100-word justification. Step 4 is a **single final review of Component 1 as a whole** after Steps 1–3, not another rewrite of those three learning sequences.
- **Do not** construct a new route, open a second browser tab, create placeholder screens, or build a separate Step 4 page. The requested visual effect is a modal overlay above the current screen.
- The feature file supplies its own styles and does not require a new stylesheet or external package. If the site already has a safe modal integration mechanism, prefer the simplest non-breaking hook. Avoid changing unrelated CSS.
- Keep Step 2 green/yellow rubric backgrounds and green/yellow/grey word edits, and Step 3 blue/red rubric backgrounds and blue/red/grey word edits, exactly as they are. The new modal does not recolour those existing views.
- Preserve the original NESA excerpts, clickable SWOT bubbles, all 20 SWOT points, source links, research justifications, navigation, active stage state, original unit-plan excerpts and existing reveal behaviour.
- Do not implement any new assessment components or further additions beyond this one Step 4 review.

## Verification before declaring completion

Check all of these (using the project's existing local preview/test method; no new dependencies):

1. The site still loads with no errors and Steps 1–3 work exactly as before.
2. A visible **Step 4 · Final rubric review** trigger opens the modal from the Component 1 presentation.
3. The underlying page blurs, the dialog stays sharp and centred, and the long checklist scrolls inside the panel on both desktop and narrow screens.
4. The **rubric wording is exact**, and all ten checks and their explanations appear once only.
5. The modal closes by Escape, both internal buttons and outside click; the user's previous stage and scroll position are retained.
6. There is **only one modal**, regardless of which A1/B1/C1 view opened it, and no duplicate content or duplicate event handlers.
7. No Step 1/2/3 wording, original NESA unit-plan excerpt, comment anchors, colour coding or source link has been altered.

When done, report **only** which existing files were changed, where the Step 4 button appears, and how you tested it. If the current website structure conflicts with a suggested integration detail, make the smallest adaptation and explain it; do not rewrite the site.
