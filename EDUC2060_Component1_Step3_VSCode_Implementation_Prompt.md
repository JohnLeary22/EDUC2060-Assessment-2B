# EDUC2060 — Implement Component 1, Step 3 (A/F band refinement)

> **VS CODE AGENT — SMALL, TARGETED UPDATE ONLY.** Read the full instructions and the `EDUC2060_Component1_Step3_Final_Content_and_Diff.json` in the same project directory before making any edits. The complete clean final copy and exact comparison markup also appear below, so this prompt is self-contained.

## Strict scope / protect the existing website

- Inspect the current project and existing Step 1 / Step 2 implementation first. Modify the **fewest existing files** possible. No framework, packages, dependencies, redesign, build-system changes, file renaming, folder reorganisation or unrelated clean-up.
- **Preserve Step 1 AND Step 2 content verbatim**, including Step 2 green/yellow/grey annotations and its 7-point/4-point rubric strip; only the requested faint green/yellow tint of its descriptor boxes may change. Step 3 must be a **third independently accessible state** in the existing selector for A1, B1 and C1; extend the selector to `Step 1 | Step 2 | Step 3`. Reuse existing transition and styles; do not create a new standalone page.
- Preserve **all original NESA excerpts**. Their panels must contain only authentic source wording, the existing clickable SWOT bubbles and plain `...` for omitted passages. Retain A1 strikethrough. Do not put developer notes, proposed insertion labels, explanatory bracketed text or revised learning sequences inside the original excerpt.
- Keep the main 20-point SWOT analysis, navigation, current sources, research links, site colours, typography, spacing, cards and interactions. Step 3 may change only the text of the **four SWOT comments, the ~200-word teaching sequence and ~100-word justification for each A1/B1/C1 view**.
- The on-screen Step 3 content must use the **exact final wording supplied**, without additions, omitted sentences, invented references, forced abbreviation or unrequested academic changes. Do not implement Step 4, change the other assessment components or add future placeholder UI.

## Rubric strip for Step 3 only

Place a compact, readable two-band reference above the Step 3 critiques, teaching sequence and justification in each existing A1/B1/C1 change view. It should stay readily visible while presenting, ideally use the website’s existing sticky/reference behaviour where supported:

**Extended Abstract · A · 10/10 (BLUE):**
> Three sophisticated changes have been identified in the unit plan, and their implementation would support critical and enlivened engagement with learning experiences.

**Prestructural · E/F · 2/10 (RED):**
> Changes are absent, superficial, or unrelated to the unit context. Limited understanding demonstrated. Or not included in submission.

Present these as two reference panels, not as a claim that the work has already received a particular mark. The highest band calls for **critical AND enlivened**, unlike the adjacent band’s “or”. Do not change the pre-existing 7/4-point reference text or content in Step 2; only apply the requested subtle green/yellow box tint.

## Reference descriptor panels — subtle pastel tint (requested visual refinement)

Make this **small styling adjustment as part of this update**. It applies only to the *rubric descriptor reference boxes*, not to the academic text, original unit excerpts, annotations or the rest of the website:

1. **Step 2 / adjacent bands:** the **Relational (B, 7/10)** descriptor box should have a **very light green-tinted background**; the **Unistructural (D, 4/10)** descriptor box should have a **very light yellow-tinted background**. Keep their headings and descriptor wording in the website's normal dark/neutral text colour, rather than making the descriptor text green or yellow. Keep existing layout, size, typography and reference behaviour exactly as they are.
2. **Step 3 / extreme bands:** the **Extended Abstract (A, 10/10)** descriptor box should have a **very light blue-tinted background**; the **Prestructural (E/F, 2/10)** descriptor box should have a **very light red/pink-tinted background**. Again use normal readable dark/neutral text; don't turn the entire box into a strong saturated colour.
3. Aim for subtle, almost off-white fills; illustrative light-theme colours are `#EFF7F0` (green), `#FFF8E7` (yellow), `#EDF4FC` (blue) and `#FFF1F1` (red). Use soft matching borders *only if the current boxes already have borders*. Reuse existing CSS selectors/classes where possible and prefer a tiny CSS override to restructuring markup. Verify legibility and contrast.
4. **Keep the separately colour-coded *edited words* exactly as specified:** Step 2 changed text remains green/yellow/grey; Step 3 changed text remains blue/red/grey. The new pastel backgrounds apply exclusively to the **rubric descriptor reference boxes**. Do not introduce highlights into unchanged text.
5. This is the **only permitted visual change to Step 2**. Its wording, saved data, interaction behaviour and changed-text annotations remain identical. Make no other visual adjustments to the site.

## Edit colour semantics — Step 3 only

- `[[A:...]]` → BLUE: a revision introduced to promote sophisticated, critical **and** enlivened engagement (top band).
- `[[F:...]]` → muted RED: a revision that prevents superficial, unnecessary, inequitable or contextually unrelated changes (lowest band).
- `[[X:...]]` → GREY: other wording clarification. Only changed words receive a colour.
- Unmarked text → normal colour, **unchanged relative to Step 2**. Never show raw `[[...]]` tags in the UI.

The machine-readable JSON contains an ordered `segments` array for each piece with `tag: "A"`, `"F"`, `"X"` or `null`. **Prefer consuming these exact spans** if the existing data model supports it. The segments concatenate to the full final text with no missing or added characters. The colour highlights are editorial explanations of why the corresponding changed wording matters, not proof that a score has been awarded. More blue than red is expected.

Render `tag:null` segments unchanged. Preserve line breaks/paragraphs, apostrophes, en dashes, punctuation, accents and citation text. Avoid regex text replacements that touch existing Step 1/2 strings. If any current Step 2 wording differs materially from the reference `step2` fields in JSON, **stop and report the discrepancy** rather than overwriting or silently reconciling it.

## Full Step 3 content (clean copy + colour markers)

The full clean copy is stored in each JSON `step3` field. The marked copy below uses exactly the same words; each `[[...]]` tag indicates a true change relative to Step 2.

### A1 — Recruitment and selection

**Location:** The role of recruitment and selection in business success  
**Action:** Improve a weakness · replace an optional role-play  
**Research:** EDUC2060 Week 11 lecture materials (2026)

**A. Four SWOT comments (retain original clickable anchors)**

**W1**

`W1:` [[A:The]] [[F:optional role-play assigns]] [[A:performance]] [[F:roles,]] but [[F:not]] [[A:responsibilities for reaching a recruitment decision. Defined contributions would make collaborative reasoning more]] purposeful and [[A:assessable.]]

**W2**

`W2:` The [[F:original scenarios already invite]] [[A:evaluation, yet a script]] can [[A:illustrate an error]] without [[A:comparing defensible hiring options. Evidence-based selection would make judgement more explicit.]]

**O4**

`O4:` The [[F:existing]] [[A:script]] scaffold [[A:supports performance preparation. Redirecting it towards]] [[X:evaluating applicants could]] [[A:combine explicit modelling with guided inquiry and]] a [[A:consequential business decision.]]

**T3**

`T3:` [[A:Performance]] [[F:roles do not]] [[A:guarantee]] [[F:balanced participation]] [[A:in reasoning. Individual rankings and recommendations would protect quieter students' contributions]] while [[A:retaining the value of panel discussion.]]

**B. Final unit-plan teaching sequence**

**Recruitment and selection decision-making simulation**

Students [[A:act as]] a hiring panel for a café recruiting a supervisor. The teacher supplies a business profile, [[A:job-related]] selection criteria and three anonymised [[A:applicants.]] [[X:Each offers credible]] strengths and [[F:limitations, so no candidate is]] an obvious choice.

The teacher models [[A:an evidence matrix, showing]] how competing criteria [[A:may]] be [[A:weighted according to the café's needs.]] Students [[A:independently]] rank [[A:applicants, identifying]] evidence and one uncertainty.

In groups of four, students take [[A:the]] roles [[A:of]] chair, evidence analyst, fairness reviewer and recorder. Each contributes [[A:an evidence-based point]] before [[A:the panel selects]] a [[A:candidate.]] The [[A:fairness reviewer checks that judgements are based]] on [[A:relevant criteria]] [[F:rather]] [[A:than]] [[F:assumptions.]]

The teacher introduces a [[X:change,]] such as increased weekend demand or [[A:a]] reduced staffing [[A:budget.]] Panels [[A:reconsider]] their [[A:choice, explaining whether]] [[X:the new information]] [[A:changes the importance of particular criteria.

Each student submits a short]] written or recorded recommendation [[A:comparing]] two [[A:candidates, defending]] a [[A:trade-off and explaining likely effects]] on [[A:staff capability, service]] and [[A:performance. They state whether their judgement changed and why.]] The teacher checks [[A:individual reasoning]] and [[A:gives]] targeted feedback.

Provide a [[X:worked example,]] vocabulary prompts [[X:and]] a [[X:partially]] [[A:completed matrix as needed.]] Extend students by examining selection bias. [[F:This simulation replaces the existing optional role-play, rather than adding another]] [[A:assessment task.]]

**C. Final research justification comment**

[[F:The original]] [[A:cases]] [[F:already]] [[A:invite evaluation; this revision strengthens]] the [[F:optional]] follow-up [[F:rather than replacing useful content.]] The [[F:EDUC2060]] Week 11 module [[X:supports]] combining explicit teaching with [[A:guided inquiry. Modelling the matrix prepares students to evaluate competing criteria, while the panel and changed circumstances make decisions authentic and intellectually demanding. Reconsidering a defensible choice develops critical reasoning; taking responsibility for a business decision makes the activity engaging. Individual recommendations provide assessable evidence]] rather than [[A:rewarding performance confidence. Job-related criteria guard against arbitrary selection,]] [[F:and replacing]] the [[F:existing role-play]] [[A:maintains]] the [[A:unit's recruitment]] and business-performance focus [[F:without]] [[A:adding]] [[F:unnecessary workload.]]

**What the revision demonstrates:**  
A-band: More consequential choice; fairness reviewer tests relevant evidence; students defend trade-offs and reconsider criteria.  
Lowest-band protection: Acknowledges pre-existing case-study evaluation and clarifies this replaces the optional role-play, not a whole new assessment.


### B1 — Local-business site study

**Location:** Site study: a visit to and investigation of a local small business  
**Action:** Expand a strength · insert a focused inquiry sequence  
**Research:** Jaye Dunn (2025), “Unlocking Curiosity: The power of inquiry-based learning in Geography”, pp. 32–35

**A. Four SWOT comments (retain original clickable anchors)**

**S2**

`S2:` The [[A:visit]] already [[A:connects students with real business practices.]] A student-generated [[A:performance]] question would [[A:give]] observations and interviews [[F:a clearer investigative purpose]] without [[F:displacing this strength.]]

**S4**

`S4:` [[A:Self-assessment, peer]] assessment and [[A:feedback are]] [[F:already]] [[A:provided.]] Requiring [[A:one evidenced revision would demonstrate how]] students [[A:use feedback,]] rather than assuming [[F:that its]] [[A:availability improves learning.]]

**W3**

`W3:` [[F:The adjustment note recognises differing needs,]] [[A:but does]] [[F:not]] [[A:specify a comparable inquiry process. Shared questions and criteria could maintain challenge across]] different participation [[X:arrangements.]]

**T2**

`T2:` An invited speaker is a [[A:valuable alternative,]] but may [[A:provide]] less observable evidence than a visit. A matched case pack [[A:could]] support comparable [[A:analysis,]] not identical experiences.

**B. Final unit-plan teaching sequence**

**Additional inquiry sequence for the local-business site study**

[[A:Build on the]] [[F:existing]] [[A:local-business site study by giving students responsibility for one focused question about business performance, such as how staffing]] [[X:affects customer service.]] Before the visit, [[X:the]] teacher models [[X:how to turn a]] [[A:broad topic into]] an investigable [[A:question. Students identify evidence they could obtain through observation,]] interviews and public [[A:sources.]]

During the visit, students [[A:use a two-column]] record [[X:to distinguish what they observe]] from [[X:what]] the owner or [[A:manager reports.]] They ask agreed questions, note [[A:gaps or contradictions]] and respect [[A:commercial]] [[F:confidentiality.]] [[A:Teacher prompts guide]] comparison [[A:of at least two]] sources, [[F:rather]] [[A:than]] [[F:note-taking]] [[A:alone.

Students]] use [[A:the]] evidence [[A:in]] the existing report to recommend one [[A:feasible business]] improvement. They explain [[A:likely benefits and costs, consider a stakeholder affected by]] the [[A:decision]] and justify their [[A:proposal]] against one [[A:alternative. They acknowledge one]] limitation [[A:of the]] evidence.

Before submission, students exchange draft recommendations and [[A:respond to]] one targeted question about [[A:the strength of their evidence. Each]] then [[A:revises]] one claim and [[A:briefly explains the change.]]

Students unable to attend [[A:may]] use [[X:an interview, photographs and]] a teacher-prepared case [[A:pack containing comparable sources.]] All [[A:follow]] the same [[A:inquiry question structure]] and [[A:assessment expectations. Provide sentence starters]] [[X:or]] extension prompts [[F:where appropriate.]] This [[F:deepens]] the [[F:original report; it does not create]] a second [[F:task.]]

**C. Final research justification comment**

This [[F:expands a genuine strength]] rather than [[F:implying]] the original [[A:unit]] lacks fieldwork, feedback or alternatives. Dunn (2025, pp. 32–35) describes inquiry [[A:as building on explicit teaching]] through questioning, [[A:collecting and evaluating]] evidence, [[A:communicating conclusions]] and [[A:reflection. The student-generated question]] gives the visit [[A:purpose and ownership; comparing observations with owner statements promotes critical source evaluation. Recommending]] an [[A:improvement]] against [[A:an alternative converts findings into business judgement. One]] required revision makes existing feedback observable without [[F:introducing another]] [[A:product. Comparable evidence packs preserve the intended analytical demand]] [[F:for]] [[A:students]] [[F:who cannot visit, avoiding a superficial or inequitable addition.]]

**What the revision demonstrates:**  
A-band: Student-owned performance question, explicit distinction between observation and reported claims, alternative defended with evidence.  
Lowest-band protection: Builds within existing report, protects commercial confidentiality, and specifies equivalent evidence for non-attenders.


### C1 — AI adoption and responsible business decisions

**Location:** Current issues  
**Action:** Fill a genuine gap · add an AI decision option within current issues  
**Research:** Australian Bureau of Statistics (2026), Characteristics of Australian Business, 2024–25

**A. Four SWOT comments (retain original clickable anchors)**

**W5**

`W5:` [[F:Current issues already include]] cybersecurity and [[F:influencer]] [[A:entrepreneurship,]] but [[A:no developed inquiry into]] adopting AI. A [[A:bounded business decision would add]] depth without [[F:misrepresenting existing content.]]

**O1**

`O1:` [[A:Students can research contemporary issues,]] but [[A:evidence appraisal is]] not [[A:explicit. Comparing]] dated [[A:ABS national]] and [[A:industry figures]] would [[A:develop statistical]] judgement without [[A:treating uptake as]] [[F:success.]]

**O2**

`O2:` The [[A:current-issues questions]] [[F:invite digital]] [[A:exploration, yet]] [[F:do not require]] [[A:comparison]] [[F:of]] AI strategies. [[A:A]] [[X:structured]] [[A:choice]] would expose [[A:costs, operational benefits]] and [[A:stakeholder risks.]]

**T4**

`T4:` AI [[X:practices change quickly, so undated or]] [[A:unqualified claims may become misleading. Teacher-reviewed sources]] and dated [[A:statistics would]] [[X:keep the investigation current]] and [[X:appropriately cautious.]]

**B. Final unit-plan teaching sequence**

**Current issue: Should a small business adopt AI?**

[[A:Within the]] [[F:existing]] [[A:current-issues section, students advise]] a small [[A:retail]] business considering AI [[A:to respond to]] customer enquiries or [[A:support stock decisions.]] The teacher [[A:provides a realistic business profile with staffing constraints, costs, customer expectations]] and [[A:privacy considerations, explaining that AI]] adoption is not automatically beneficial.

Students examine ABS [[A:figures]] showing that 12% of Australian [[A:businesses, but 9% of retail businesses,]] reported using AI in 2024–25 (ABS, 2026). The teacher models how to [[A:interpret the source, compare populations and]] distinguish [[A:adoption]] from evidence of [[A:improved performance.]]

Working in [[A:pairs as business advisers,]] students assess three options: adopt [[A:now,]] [[F:conduct]] a limited trial with human oversight, or [[A:defer.]] They weigh [[A:likely]] effects on [[A:service,]] [[X:staffing, cost, errors and]] [[A:customer trust, then]] identify [[A:one]] benefit [[A:and one risk for affected stakeholders.

Each student prepares a brief decision memo recommending]] an [[A:option, rejecting an alternative using]] evidence and [[A:specifying what further information would help. If recommending]] a [[A:trial, they identify]] [[X:a measurable success indicator; if]] [[A:deferring, they explain what]] would [[A:justify reconsideration.]]

The teacher provides dated [[A:sources,]] a printable evidence [[A:pack and guidance on evaluating claims.]] Students [[A:need]] [[F:not]] [[A:use]] an AI [[F:system]] or [[F:share]] personal [[F:information.]] This [[F:investigation replaces an optional current-issues example rather than extending]] the [[F:unit.]]

**C. Final research justification comment**

[[F:The original unit identifies digital issues,]] [[A:but]] [[F:not]] [[A:an inquiry into whether]] a [[A:business should]] adopt AI. ABS (2026) reports AI use [[X:in]] [[A:2024–25]] by 12% of [[A:Australian]] businesses [[A:and 9%]] in [[A:retail trade; neither figure establishes effectiveness. Comparing the two makes source interpretation relevant to the chosen business. Acting as advisers, students weigh realistic alternatives, stakeholder consequences and a measurable success condition, combining critical evaluation with]] an [[A:engaging commercial problem. A short]] decision memo [[A:demonstrates judgement]] [[F:rather]] [[A:than]] [[F:enthusiasm for technology. Using]] [[A:the]] [[F:existing]] [[A:current-issues]] [[F:allocation, dated]] [[A:sources]] and [[F:no compulsory AI tool avoids a superficial or unnecessary addition.]]

**What the revision demonstrates:**  
A-band: Retail vs national ABS comparison; test realistic options; specify evidence that would change a recommendation.  
Lowest-band protection: Acknowledges existing digital topics; AI adoption is a bounded new investigation, not compulsory tool use or extra unit time.

## Anchor and source safeguards

**A1** — The role of recruitment and selection in business success. Keep exactly the current original-text bubbles and passages; only update the **Step 3 popover/comment content**, not the original NESA material.
- W1: “Working individually or in groups” and “peer discussion exercise” — Undefined decision-making roles, not the absence of performance roles.
- W2: “develop a role-play that illustrates one or more of the scenarios” and “develop a script” — A scenario can be illustrated without a defended selection among alternatives.
- O4: “planning template that includes roles, setting, dialogue, problem and consequences” — An existing scaffold could support guided inquiry instead of performance planning.
- T3: “They could be given the opportunity to perform a role-play” and “peer discussion exercise” — No explicit individual evidence of reasoning in these optional follow-ups.
Research: EDUC2060 Week 11 lecture materials (2026). Course module; use the Week 11 lecture to support the combination of explicit instruction and guided inquiry. The module supports this teaching approach, not a claim that the original role-play has failed.

**B1** — Site study: a visit to and investigation of a local small business. Keep exactly the current original-text bubbles and passages; only update the **Step 3 popover/comment content**, not the original NESA material.
- S2: “Students engage in a site study of a local small business to explore real-world applications of business concepts and skills” — Existing authenticity to extend; do not describe the visit as absent.
- S4: Original self-assessment, peer assessment and feedback provision — Feedback already present; improvement lies in specified student response.
- W3: “Note: some students may require adjustments to engage in the site study” — Specific equivalent inquiry design can strengthen broad adjustment advice.
- T2: “If a site visit is not possible, the teacher may invite an entrepreneur to speak in person or online” — Alternative access is present; a case pack improves comparability of evidence.
Research: Jaye Dunn (2025), “Unlocking Curiosity: The power of inquiry-based learning in Geography”, pp. 32–35. Assigned Geography reading applied to Commerce: use cautiously to justify scaffolded questioning, evidence evaluation, communication and reflection, not to claim the reading evaluates this particular Commerce unit.

**C1** — Current issues. Keep exactly the current original-text bubbles and passages; only update the **Step 3 popover/comment content**, not the original NESA material.
- W5: Current issues: optional examples including “cybersecurity” and influencer entrepreneurship — Do not claim that technology topics are entirely absent.
- O1: Current-issues research instructions / guiding questions — The opportunity is to develop explicit appraisal of dated statistical evidence.
- O2: Current-issues discussion or investigation prompts — The new investigation compares business options, not merely technology descriptions.
- T4: Current-issues examples referencing recent developments — Attach to a dated topical example; a general currency risk is not proof that the old content is inaccurate.
Research: Australian Bureau of Statistics (2026), Characteristics of Australian Business, 2024–25. Official ABS release (25 June 2026), reference period 2024–25; 12% of businesses reported use of AI and retail trade was 9%. Uptake is not evidence of success. https://www.abs.gov.au/statistics/industry/technology-and-innovation/characteristics-australian-business/2024-25

## Acceptance checks before reporting completion

- [ ] Inspect the current project and identify smallest safe file edit set. Do not touch the older `educ2060-portal` or any other site.
- [ ] All A1/B1/C1 views retain Step 1 and Step 2 exactly as before; switching back never leaves Step 3 colours or text visible.
- [ ] Each Step 3 view displays all FOUR SWOT bubbles/comments, one complete teacher-facing sequence, one complete research-based justification.
- [ ] For every text piece, joining rendered text nodes (excluding chrome and headings) yields the JSON `step3` string exactly. Verify programmatically where feasible.
- [ ] Blue A-band changed spans, red F-band safeguarding spans and grey general edited spans appear in Step 3 ONLY, with unchanged Step 2 words uncoloured. There are more blue-marked than red-marked words.
- [ ] The A/10 and Prestructural/2 band descriptors are visible with Step 3 content in subtle blue/red-tinted boxes; the 7/4 adjacent rubric still appears in Step 2 with subtle green/yellow-tinted boxes. Descriptor text remains neutral/readable.
- [ ] Original NESA excerpt panels contain no editorial placeholders or fictitious original wording; the SWOT bank, citation links and source notes still work.
- [ ] Verify the responsive layout at desktop and small widths and click through every Step 1/2/3 selector, reveal button and original-excerpt SWOT comment.
- [ ] No new step-four UI or future-stage annotations; no packages installed, data overwritten or site redesigned.

Report only which files changed, that each acceptance check passed or failed, how to preview the website, and any discrepancies; then stop. Do not proceed to Step 4.