# EDUC2060 website — Component 1, Step 2 incremental update

> **FOR THE VS CODE CODING AGENT.** Apply only the changes in this file to the existing EDUC2060 presentation website. This is a precise content and visual revision, not permission to recreate the website. Read this file in full before editing.

## Scope and preservation rules

1. **Only Component 1, Step 2:** introduce the adjacent-band revision for the three unit-plan changes A1, B1 and C1. All Step 1 material, original NESA excerpts, 20 SWOT bank, primary navigation, citations and existing interactions must remain intact. Do not implement Step 3 (extreme bands), Step 4 (holistic review) or other assessment components.
2. **Inspect the existing project first.** Modify the smallest number of existing files. Reuse existing page components, style variables, event handlers and data structure. If a separate Step 2 content module is needed, create one small file under the existing data directory; do not reorganise unrelated files, add dependencies or introduce a framework.
3. **Keep an independently accessible Step 1 view.** On each of the existing A1, B1 and C1 views add a small `Step 1 | Step 2` selector, defaulting to the currently appropriate presentation view. Selecting Step 1 must display *exactly the current content without Step 2 colours*. Step 2 replaces the four 25-word comments, the ~200-word teacher-facing sequence and the ~100-word justification *in that view only*. Never overwrite the Step 1 source text.
4. **Preserve original NESA excerpts.** The Original Unit Plan panel must still show only authentic wording from the NESA document, clickable SWOT-label bubbles and plain `...` where text was omitted. Do not display an insertion point, instructional bracket, stage note or proposed revision inside that original excerpt. A1 strikethrough remains as it currently appears; B1 and C1 remain additions without deleting their original unit material.
5. **Use the supplied copy precisely.** Do not summarise, expand, paraphrase, change citations, silently correct course information, or make up additional claims. The revised text is provided below, already checked against Step 1 and the 20% cap.

## Rubric reference: show both adjacent bands in Step 2

At the top of **each A1/B1/C1 Step 2 view**, immediately before the three revised content groups, show one compact, clearly legible reference strip or pair of existing-style cards:

- **Relational — B band, 7 points:** “Three effective changes have been identified in the unit plan, and their implementation would support critical or enlivened engagement with learning experiences.”
- **Unistructural — D band, 4 points:** “Identifies one or more changes but they may not have been necessary, or an opportunity to engage more critically with the unit plan has been missed.”

The 7- and 4-point descriptors are given verbatim from the assessment rubric (except for typographic whitespace). They must be visibly readable while presenting the Step 2 changes; do not hide them behind a click-only accordion. Reuse the same small panel above the three local sub-sections (SWOT comments, unit-plan revision, justification). A compact sticky placement is fine if it does not obscure text. Do **not** display the 10-point or 2-point extreme-band feedback here; those belong to the future step.

Step 2 caption: “Step 2 — Revision against the adjacent rubric bands (7 and 4 points). This is a visible revision of our Step 1 draft, not a claim of a final grade.” On the methodology page, update only the progress indication so Component 1 is identified as being at Step 2. Preserve the already-corrected four-step methodology wording and the Week 10 workshop note.

## Colour convention (important)

Inline tags in this prompt are content markup, **not words that should display**:

- `[[G:...]]` → colour **green**, representing an edit made to approach the **higher Relational (7/10)** band through stronger critical or engaging learning.
- `[[Y:...]]` → colour **yellow/ochre**, representing an edit informed by the **lower Unistructural (4/10)** band, especially clarifying why a change is necessary or preventing missed critical engagement.
- `[[X:...]]` → colour **grey/slate**, representing a general wording, implementation or coherence refinement not specifically attributed to either band.
- Unmarked words are **unchanged from Step 1** and should retain normal body-text colour.

**Apply colour ONLY to the marked text (the new/replaced phrasing), not to whole paragraphs.** Use CSS classes such as `.step2-edit--higher`, `.step2-edit--lower`, `.step2-edit--general`. The labels should be available in an unobtrusive three-item legend, and accessible text/title can identify the motivation (e.g. `Relational: strengthens critical engagement`). Choose sufficiently dark text on the pale site background: dark forest green, readable ochre/amber, and dark slate grey, with subtle translucent highlight backgrounds if necessary; yellow must not become unreadably light. Avoid animated highlighting or extra flashy UI.

The deliberate balance of **marked changed words** is **36.2% green, 25.6% yellow, 38.2% grey**, within the requested green 30–40%, yellow 20–30%, rest grey. The original unchanged words are excluded from that distribution. By change: A1 ≈ 39%/27%/34%; B1 ≈ 34%/22%/44%; C1 ≈ 35%/29%/37%. These are proportions of changed words, not the overall displayed text. Do not reassign colours arbitrarily to achieve an appearance different from the supplied tags.

## Step 2 layout and interaction

Each existing change view (A1, B1, C1) should, when Step 2 is selected:

1. Keep its four relevant SWOT codes highlighted in the existing SWOT quadrants. Preserve original comments/anchors and code relationships in the unit-plan excerpt; show the **Step 2 versions of the four critique comments** in their current comment popovers or linked comment cards. The four label codes remain the same across versions.
2. Show the **revised ~200-word teaching sequence** using the exact text and coloured spans below. Do not replace or insert this into the Original Unit Plan panel, which must stay documentary evidence.
3. Show the **revised ~100-word justification** in its existing research/comment area, with the same source citation and coloured spans.
4. Optionally add a small `Step 1 text / Step 2 revision` toggle at the level of the whole change only; avoid making three additional nested state controls if the existing UI works without them.

No other content should move, and no comments should be lost. Use an edit-safe renderer that converts the three allowed markup tags to inline spans via text nodes. Do not use a naive regular-expression substitution into unsanitised `innerHTML` or accept new arbitrary markup. Preserve accessibility and keyboard navigation.

## Exact Step 2 text to install

The strings below are authoritative. All `[[...]]` syntax is for rendering coloured inline spans, not for display. Paragraph breaks must stay as given. A1 changes are a *replacement*; B1 is an *expansion*; C1 is a *new current-issues option*.

### A1 — Replace a weaker recruitment activity

**Applicable codes:** SWOT W1, W2, O4, T3. **Research:** Module: EDUC2060 Week 11 lecture materials (2026).

**A. Four revised short SWOT comments (keep their original document anchors)**

**W1:**

W1: Participation may be individual or collaborative, but no [[G:shared selection decision]] or [[Y:individual accountability]] is specified. This makes [[X:purposeful cooperation]] difficult to [[X:observe]] and [[G:assess]].

**W2:**

W2: The role-play can demonstrate recruitment mistakes without requiring [[G:students to compare candidate evidence or defend a choice]]. [[Y:Critical evaluation is therefore optional]], rather than [[X:explicitly demonstrated]].

**O4:**

O4: The scaffold organises a performance rather than an investigation. It could [[G:guide evidence-based comparison of candidates]] after teacher modelling, [[X:without assuming]] [[Y:inquiry happens through acting]], [[X:within existing time]].

**T3:**

T3: Without explicit individual outputs, confident performers may dominate discussion while less vocal students remain peripheral. [[Y:Unassessed contributions risk being overlooked]]; [[G:independent judgements]] make [[X:learning visible]].

**B. Revised unit-plan sequence — Recruitment and selection decision-making simulation**

Students become a hiring panel for a café recruiting a supervisor. The teacher supplies a business profile, job description, selection criteria and three anonymised applicants with strengths and limitations. [[G:Each presents a plausible trade-off rather than an obvious choice]].

The teacher models how to [[G:weigh two competing criteria]] using an evidence matrix and explains why decisions should be fair and job-related. Students then rank the applicants individually, [[X:noting supporting evidence and one uncertainty]].

In groups of four, students take roles as chair, evidence analyst, fairness reviewer and recorder. [[Y:Each member contributes before a decision is made]]. The panel [[X:compares rankings, agrees on a candidate]] and explains the expected effects on staffing, service and business performance.

The teacher introduces a change in circumstances, such as increased weekend demand or reduced staffing funds. Panels revisit their decision and [[G:explain which criteria now deserve greater weight, with reasons]].

Students finish with an individual written or recorded recommendation that compares two applicants, [[G:defends a trade-off]], explains an impact on performance and identifies any change in thinking. The teacher checks these responses and provides targeted feedback. Provide a partly completed matrix, vocabulary prompts or a worked example where needed; [[Y:assess each student's reasoning, not presentation confidence]]. [[X:Extend students by examining selection bias]].

**C. Revised justification comment (retain citation)**

This changes the purpose of the follow-up task from illustrating a recruitment problem to making a [[X:justified choice between credible alternatives]]. The Week 11 EDUC2060 module [[X:advocates combining]] explicit teaching with inquiry, rather than treating them as alternatives. A modelled decision matrix gives students an entry point, while the hiring panel creates a reason to debate [[G:the relative weight of]] competing evidence. Defined roles and an individual recommendation [[Y:make participation and learning assessable]], addressing W1 and T3; the revised business constraint deepens W2 by making students [[G:reconsider their criteria]]. The activity [[X:retains the business-performance focus]] and [[X:replaces rather than adds to]] the original tasks.

### B1 — Expand the strong local-business site study

**Applicable codes:** SWOT S2, S4, W3, T2. **Research:** Reading: Dunn (2025, pp. 32–35), Geography Bulletin 57(1); https://www.gtanswact.org.au/wp-content/uploads/2025/06/GTA6098_Bulletin_1_2025_v5.pdf.

**A. Four revised short SWOT comments (keep their original document anchors)**

**S2:**

S2: The site study is already an authentic strength. A [[G:focused, student-generated inquiry question]] would make observations and interviews [[X:more purposeful]], [[Y:without replacing]] the existing real-world experience.

**S4:**

S4: The unit already encourages assessment and refinement. [[G:Requiring students to act on one evidence-focused comment]] would make improvement visible, [[Y:rather than assuming feedback produces revision]], [[X:within the existing report]].

**W3:**

W3: This acknowledges different access needs but leaves [[Y:equivalent assessment expectations]] unclear. A [[G:shared question and evidence framework]] could support alternative participation routes [[X:without lowering analytical demand]].

**T2:**

T2: An invited speaker is a useful contingency, but may offer [[Y:less observable evidence]] than a visit. A [[G:matched case pack]] would support [[X:comparable inquiry, not identical experiences]].

**B. Revised unit-plan sequence — Additional inquiry sequence for the local business site study**

Before the visit, students choose a [[X:focused, answerable]] business-performance question, such as customer demand, staffing or competition. The teacher models an investigable question using observations, interviews and public information. Students create an evidence planner [[X:identifying questions, sources and possible limitations]].

During the visit, students record observations separately from statements made by the owner or manager. They ask agreed questions, note any missing evidence and respect confidential business information. The teacher uses a shared checklist to [[G:prompt comparison between sources]], [[Y:not just completion of notes]].

Afterwards, students use this evidence within the existing report to recommend one realistic improvement. They explain the likely benefits, costs and potential effect on at least one stakeholder, and [[G:justify their recommendation against one alternative]], identifying a limitation in their evidence.

Before final submission, students exchange draft recommendations and receive one targeted teacher or peer question about evidence or reasoning. They then [[G:use that question to strengthen one claim]] and add two sentences explaining [[X:what evidence or judgement changed]].

Students unable to attend use a comparable teacher-prepared case pack, business photographs, interview transcript and public-source extract. All students investigate comparable inquiry questions and [[Y:are assessed against the same learning criteria]]. Sentence starters, visual planners and extension prompts can be provided as needed. [[X:This refines the existing report rather than creating a second product]].

**C. Revised justification comment (retain citation)**

This addition builds on an activity NESA does well, rather than claiming the original lacks fieldwork, feedback or accessible alternatives. Dunn (2025, pp. 32–35) describes inquiry through [[X:focused questioning, interpreting different forms of evidence, and communicating reasoned conclusions]], with teacher guidance adjusted to students' needs. Applying that sequence to Commerce gives the visit a clearer investigative purpose. [[G:Testing an owner's account against observation]] encourages source evaluation, while [[X:a feasible recommendation]] requires students to use rather than merely report findings. A comparable case pack [[Y:preserves equivalent expectations]] across participation routes, and [[G:required evidence-based revision]] makes the unit's existing feedback [[X:more observable]] [[X:without duplicating assessment work]].

### C1 — Add a developed AI business decision investigation

**Applicable codes:** SWOT W5, O1, O2, T4. **Research:** External: ABS (2026), Characteristics of Australian Business, 2024–25; https://www.abs.gov.au/statistics/industry/technology-and-innovation/characteristics-australian-business/2024-25.

**A. Four revised short SWOT comments (keep their original document anchors)**

**W5:**

W5: The list acknowledges digital change, including cybersecurity and influencers, but does not [[G:develop a decision about adopting AI]]. A [[X:focused option]] adds depth [[Y:without claiming technology is absent]].

**O1:**

O1: This invites credible research, but does not require students to [[G:interpret a dated business statistic and its limits]]. An ABS extract would strengthen [[X:evidence-led judgement]] [[Y:without implying causation]].

**O2:**

O2: The general inquiry question could become a [[G:choice between realistic AI strategies]]. Comparing options would expose [[X:cost and service trade-offs]], [[Y:including risks for workers and customers]].

**T4:**

T4: Rapid changes in AI use and regulation make generic examples vulnerable to becoming outdated. [[Y:Unqualified claims could mislead students]]; [[G:dated evidence]] and [[X:regular teacher review]] are needed.

**B. Revised unit-plan sequence — Current issue option: Should a small business adopt AI?**

Students investigate a small business considering AI for customer enquiries or stock. The teacher explains the tool, its limits and [[Y:why adoption is not automatically beneficial]].

Students examine an ABS extract showing that 12% of Australian businesses reported using AI in 2024–25 (ABS, 2026). The teacher identifies the source, date and population, and models [[X:how to distinguish uptake from proven effectiveness]]. Students compare this statistical evidence with the business profile and [[X:a simple estimate of costs and staff time]].

Working in pairs, students assess three options: adopt immediately, run a limited trial with human oversight, or defer adoption. They [[G:rank the options against stated business priorities]] and weigh potential improvements in speed and service against implementation costs, privacy, errors, staff training and possible effects on jobs. They identify which stakeholders could benefit or lose out.

Students individually recommend an option in a short decision memo, supporting it with the business facts and at least one sourced statistic. They [[G:explain why a rejected option is less suitable]] and identify missing evidence and a condition that would alter their recommendation.

The teacher provides curated, dated sources and a printable evidence pack. [[X:Students evaluate supplied evidence]] [[Y:without using an AI tool or disclosing personal data]]. This option [[X:uses the existing current-issues time allocation]]; data and case details are reviewed before future delivery.

**C. Revised justification comment (retain citation)**

This proposal fills a specific gap rather than suggesting the unit ignores technology. Cybersecurity and influencer entrepreneurship are already listed, but the current-issues section does not develop the choice to adopt AI. The ABS (2026) reports AI use by 12% of businesses in 2024–25, [[Y:which indicates uptake, not success]]. Students would [[G:rank alternatives against business priorities, challenge an option and defend a recommendation]], not simply describe a fashionable technology. They account for staffing, customers, cost and privacy. [[X:Distinguishing adoption from effectiveness]] strengthens critical reasoning, while dating the figures addresses T4. The decision memo [[X:reinforces established ethical and business-performance judgements]] [[X:within existing teaching time]].

## Source and anchor protection

Keep the original Step 1 comment anchors and source attribution as they currently exist. Specifically:

- A1: The source remains the **EDUC2060 Week 11 lecture module (2026)** and the original recruitment role-play/script/explanation lines remain the anchor sites.
- B1: The source remains **Dunn (2025, pp. 32–35)**, a *Geography* reading applied carefully to Commerce; the original site study, adjustment note, alternative entrepreneur visit, and feedback sentences remain authentic and unedited.
- C1: The source remains **ABS (2026), 2024–25 data**; the 12% statistic is a dated historical figure and must not be presented as the current rate in November 2026. The original current-issues section already lists cybersecurity and influencer entrepreneurship; preserve that distinction.

## Length and fidelity verification

The wording below has been measured using a word tokenizer for both versions. Treat these counts as working approximations: punctuation/hyphenation can vary in Word. For **each** content piece, the Step 2 version is no more than 20% longer than Step 1:

| Change | Four SWOT comments: Step 1 → Step 2 | Unit-plan sequence: Step 1 → Step 2 | Justification: Step 1 → Step 2 |
|---|---|---|---|
| A1 | 25/25/25/25 → 26/27/29/26 | 195 → 207 | 100 → 104 |
| B1 | 25/25/25/25 → 27/30/27/28 | 191 → 217 | 101 → 105 |
| C1 | 25/25/25/25 → 29/29/27/28 | 192 → 220 | 101 → 104 |

Total changed core: **1,180 → 1,290 words**, about **+9.3%**. The original 1,200-word drafting allocation was approximate; the relative length limits have been preserved.

## Final checks and stop condition

- Step 1 still opens and displays the previous text **unchanged** (including the original 25-word SWOT comments, 200-word activities, 100-word justifications).
- Step 2 opens and displays every revised group for A1, B1 and C1; all `[[G:...]]`, `[[Y:...]]`, `[[X:...]]` tags have been parsed, colour-coded and stripped from visible text.
- The Relational 7-point and Unistructural 4-point descriptors are plainly visible alongside Step 2 content. Colour legend uses green/yellow/grey correctly.
- A1/B1/C1 original NESA excerpt panels are unchanged; no placeholders or commentary appear as original text. All SWOT bubbles and research links still work.
- No package installs, refactoring, renamed files or new future-stage controls. Preserve all existing styles not directly affected by these changes.
- Run an appropriate small-project smoke test or open the HTML locally; check all nine text sections and switching states for errors. If relevant existing content does not match this specification, STOP and report the mismatch rather than silently overwriting it.

Finally, report **only** files modified, what was added, local preview steps, and whether each acceptance check passed. Then stop. Do not begin Step 3.
