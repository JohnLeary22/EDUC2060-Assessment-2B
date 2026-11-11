# VS CODE AGENT — BUILD THIS EDUC2060 PRESENTATION WEBSITE (STAGE 1 ONLY)

Read this entire file and implement precisely. This is a **presentation aid** for an EDUC2060 university assignment, not an interactive teaching app, a marketing website or a substitute for the required recorded 4–5 minute presentation. Keep it quiet, readable, simple and maintainable.

## Task and working rules

1. Build a **small, static website** in the CURRENTLY OPEN EDUC2060 project folder. Do not alter or delete any unrelated folders or projects, or move my existing files. If the folder already contains website code, inspect it before changing anything and work incrementally; do not rebuild from scratch without a reason.
2. Use **plain HTML, CSS and browser JavaScript ES modules**. No React, no Next.js, no TypeScript, no Tailwind, no UI component libraries, no backend, no database, no CDN, no external fonts, no analytics and no unnecessary dependencies. Use relative paths and hash routes (`#/methodology`, `#/swot`, `#/change/a1`, `#/change/b1`, `#/change/c1`) so it works with VS Code Live Server or `python3 -m http.server 5500` without routing configuration.
3. Use this restrained file structure, or integrate equivalently into the current structure if appropriate:

   index.html
   css/styles.css
   js/app.js
   js/data/methodology.js
   js/data/swot.js
   js/data/changes.js
   README.md

   No `node_modules`, compiled builds, duplicated content, generated screenshots, long configuration files, or giant all-in-one script. Content goes into the three `js/data` files; UI code only renders the content. One canonical copy of each paragraph.
4. **Do not invent academic content or rewrite the supplied wording.** The full 20 SWOT items in this prompt must appear **word for word**. The twelve SWOT comments, three 200-word insertions, three research notes, and three 100-word justifications are working-draft source text: preserve them verbatim, including citations and qualifications. Avoid unverified extra facts or fictitious original unit text. For original-unit excerpts, display only the exact text below and clearly mark deliberately omitted material as an editorial abbreviation; do not pretend that separate passages were originally adjacent.
5. Keep paragraphs as plain text data with stable IDs. Store original excerpt segments as separate `{id, text, status}` objects, and comments as `{id, swotId, anchorId, text}`. Anchor comments to specific excerpt segments or exact phrases via explicit IDs, NOT brittle regex/string matching or a Word-file parser. No fake Word file editing or DOCX rendering in the browser.
6. Do not silently shorten the 200-word sequences or 100-word justifications. These are draft words, not a requirement to make them exactly 200/100 after rendering.

## Visual design

My reference image is a simple SWOT diagram: four rounded, soft pastel quadrants in a 2×2 arrangement, with S, W, O, T motifs toward the centre. Recreate the *layout idea* with CSS, not by pasting a screenshot. Quadrants: Strengths top-left (muted powder blue), Weaknesses top-right (soft peach), Opportunities bottom-left (pale sage), Threats bottom-right (dusty blush). Give each its heading and five ID-labelled full paragraphs. Use enough size/spacing for all five paragraphs to be readable; these will be significantly taller than the empty reference graphic. On narrow screens stack vertically. You may use subtle, low-opacity circular overlaps behind the S/W/O/T letters but never cover content.

Overall style: light-hearted but professional, an educator's personal presentation, not a flashy startup. Off-white background, clean system font, generous margins, black/dark-grey text, soft cards, restrained rounded corners, no gradients unless extremely subtle, no giant hero, no stock images, no emojis, no confetti, no parallax, no animations beyond a short 150–250ms reveal, no automatic carousels, no fake engagement metrics, no complicated dashboard. Colours must keep text legible. On a presentation screen, provide a comfortable centred max width ~1200–1350px, responsive without horizontal overflow. Navigation and buttons should be clear, compact and keyboard accessible.

## Page flow and required functionality

### Route 1: `#/methodology` — landing page, opening state
- Heading: `How I evaluated and redesigned the unit plan`
- One-sentence explanation: `This presentation follows a five-band rubric review to identify, design and refine three substantial changes to a Stage 5 Year 9 Commerce unit plan.`
- Show our **exact rubric method**, not a generic 'aim for top marks' checklist:
  **1.** Read the middle **Multistructural (5/10)** descriptor for the current assessment criterion.
  **2.** Read **both** adjacent descriptors: **Relational (7/10)** and **Unistructural (4/10)**. Note what stronger and weaker performance looks like.
  **3.** Read **both** extremes: **Extended Abstract (10/10)** and **Prestructural (2/10)**. Identify what sophisticated practice adds and what to avoid.
  **4.** Draft or revise that component against the **whole criterion**, not only the top band.
  **5.** Repeat steps 1–4 for **each** assessment component: **three unit-plan changes**, **assessment-task proposal**, and **multimodal presentation**, checking alignment between components; finally reassess the full assignment against the complete rubric.
- Make clear that **the Week 10 rubric-design workshop informed the method, but we are NOT creating or submitting a student marking rubric** for this assessment.
- For the first criterion, show a compact optional text panel with these verified descriptors:
  * 10/10 Extended Abstract: `Three sophisticated changes have been identified in the unit plan, and their implementation would support critical and enlivened engagement with learning experiences.`
  * 7/10 Relational: `Three effective changes have been identified in the unit plan, and their implementation would support critical or enlivened engagement with learning experiences.`
  * 5/10 Multistructural: `Three changes are identified in the unit plan, and are appropriately selected to support meaningful student learning.`
  * 4/10 Unistructural: `Identifies one or more changes but they may not have been necessary, or an opportunity to engage more critically with the unit plan has been missed.`
  * 2/10 Prestructural: `Changes are absent, superficial, or unrelated to the unit context. Limited understanding demonstrated. Or not included in submission.`
- Prominent but modest action button exactly labelled **`SWOT analysis`**, navigating to `#/swot`.

### Route 2: `#/swot` — SWOT page
- Above: small `Back to methodology` link, heading `SWOT analysis of the original unit`, short explanation that these are design observations and *not* classroom results.
- Show the **complete SWOT analysis below word for word**, organised into four quadrant cards, five paragraphs per quadrant (S1–S5, W1–W5, O1–O5, T1–T5).
- Below the quadrants: section heading `Three proposed changes`, and three simple buttons/cards with a label, the provided approximately 50-word overview, and action `Explore this change`.
  - `A1 · Improve a weak activity — Recruitment and selection simulation`
  - `B1 · Expand an existing strength — Local-business site study`
  - `C1 · Fill a missing sequence — AI adoption and business decisions`
- Clicking takes the user to `#/change/a1`, `#/change/b1` or `#/change/c1` respectively. No modal wall of text.

### Route 3: `#/change/:id` — three change views
- Breadcrumb: `Methodology / SWOT analysis / A1|B1|C1` and a compact `Back to SWOT` link.
- At the top, show the **same complete 20-point SWOT grid**, not a new rewritten list. The four directly relevant codes for the selected change are highlighted with a dark outline/tint and small legend `SWOT points informing this change`. Remaining 16 points are still present and readable, but visually quieter. Codes:
  A1 = W1, W2, O4, T3.
  B1 = S2, S4, W3, T2.
  C1 = W5, O1, O2, T4.
  These are the four **document critique comments**, not a claim that these are the only wider benefits.
- Under the grid, display the selected change overview (~50 words) and a small **Research informing this change** note with the supplied 30–50 word paragraph, its source label and link when available. A1 is an uploaded course module and does not have a public URL; show plain source text, not an invented hyperlink.
- Next, a `Unit plan excerpt — original` document-style panel. Use the exact original excerpt specified below, preserving its headings and bullet styling. In A1, the *optional follow-up being replaced* is struck through. In B1 and C1, no original text is struck through: show a clearly marked `Proposed insertion point` after the specified original bullets/list.
- Render four in-margin **Word-like comment pins** for the critique (e.g. `W1`, `W2`, `O4`, `T3`). Their markers sit by the exact excerpt sentences/phrases identified in the data. Clicking a pin reveals the complete 25-word comment in a right-side comment panel (or an inline side panel on mobile), visibly linked to its highlighted source passage. The comments must not be displayed as though NESA originally wrote them. Clicking any marker must actually work; no decorative/inert buttons. The left excerpt should remain visible when reading a comment. One active comment at a time is fine.
- Below the original, show a single button **`Reveal my proposed change`**. On click, reveal a second paper-like panel emerging softly *from behind* the original (subtle layer/slide/fade, max 250ms). The new panel must be fully readable and not physically overlap or hide the original text. Label it `My revised unit-plan text · Draft 1`. A1 shows the replacement 200-word simulation; B1 shows the added 200-word inquiry scaffold as an insertion with existing text retained; C1 shows the AI investigation as an insertion with current-issues text retained. Use white-space paragraphs and bullets correctly.
- On the revised panel, include a `J1 · Why I changed this` Word-style comment pin anchored to the revised heading or opening paragraph. It opens the complete 100-word justification below. The cited source in the justification must be clickable when it has a supplied URL. The nearby research note should remain accessible. Also offer `Hide my proposed change` to toggle back to the before state.
- Avoid automatic opening of all comments, unrelated flyouts, multiple overlapping cards, excessive motion or complicated state. State need not persist after navigating away. Accessibility: all controls are buttons/links, focus-visible styles, aria labels where needed, reduced-motion support and good text contrast.
- A1 is a **replacement**, B1 an **expansion**, C1 an **insertion**. Do not implement all three as a generic before/after text replacement.

## Content governance and future-proofing — DO NOT BUILD STAGE 2 YET

This is *Stage 1*. In a future update, I plan to show how each change was revised after rereading the bands above and below the middle rubric descriptor, and then the highest and lowest bands. There may later be colour-coded text revisions (green = informed by 7/10, yellow = informed by 4/10, blue = informed by 10/10, red = informed by 2/10), toggle buttons for revision layers, and an additional 200–300-word justification section for each change. **Do not create any of those features, empty placeholders, toggles, colours, sections, extra pages or sample content now.** Simply keep data structured with stable section IDs and change IDs so those future revisions can be added without changing the entire site. Document the intended future extension in a short `README.md` paragraph, not in the public UI.

For future edits, modifying a paragraph should require changing only one item in a `js/data/*.js` file. Avoid copying SWOT text into individual change objects; store only codes. Avoid fragile positional selectors, indexes as identities, hard-coded comment positions, or source excerpts mashed into one HTML string. No library to interpret Word comments is required.

## Deliverable checks

- Verify all five hash routes render and work with Back/Forward navigation.
- Verify all 20 full SWOT items are present **exactly once in the data**, readable in four cards and reused when a change opens.
- Verify three 50-word summaries, twelve SWOT critique comments (four per change), three research notes, three approximately 200-word changes and three approximately 100-word justifications appear correctly.
- Verify each source comment pin opens the right text and highlights the right passage.
- Verify A1 strikethrough shows only deleted follow-up; B1 and C1 preserve original excerpts with an insertion point.
- Verify the revised panel reveal/hide toggle and justification comment work.
- Verify mobile layout, keyboard use, no horizontal overflow, no console errors, and no unnecessary dependencies.
- Write a short README containing how to preview (`python3 -m http.server 5500` then open `http://localhost:5500/#/methodology`), where to edit content, and the stage-2 intention. At completion give a short file list and say exactly how to preview. **Do not commit, publish, deploy, delete existing files, or generate extra assets without asking.**

---

# EXACT SOURCE CONTENT — USE THESE WORDS

Everything below is data to display, not more feature requests. Preserve text exactly, including spelling and citation wording. Source excerpts are abbreviated only where explicitly marked.


## A. FULL SWOT TEXT — VERBATIM


### Strengths

**S1 — Comprehensive syllabus coverage**

The unit covers business structures, operations, performance and entrepreneurship, providing students with a broad understanding of the business environment. Its existing content offers a strong foundation for more sophisticated applications of business concepts.

**S2 — Authentic real-world learning**

The unit makes effective use of real businesses, case studies, media reports and a local-business site study. These activities help students recognise how classroom concepts operate in real business environments rather than remaining purely theoretical.

**S3 — Variety of teaching strategies**

The unit incorporates explicit teaching, think-pair-share, discussions, research, infographics and role-play. This variety accommodates different learning experiences and creates opportunities for students to engage with business concepts through multiple approaches.

**S4 — Existing differentiation and feedback**

The program acknowledges differing student needs through scaffolds, alternative tasks and opportunities for feedback. These provisions offer a useful foundation, although specifying how they operate within individual activities would strengthen their consistency.

**S5 — Opportunities for ethical reasoning and judgement**

The unit encourages students to consider corporate social responsibility, stakeholder interests and ethical decision-making. Its existing evaluation activities also require students to justify judgements about business performance rather than simply recall information.


### Weaknesses

**W1 — Insufficient structure for collaborative learning**

Some group activities, particularly the optional recruitment role-play, do not clearly establish individual responsibilities or accountability. Consequently, meaningful collaboration may depend on how the teacher implements the activity rather than being embedded within its design.

**W2 — Inconsistent depth of analytical thinking**

Although the program includes evaluation activities, some tasks emphasise illustrating, describing or presenting business concepts. These activities could more explicitly require students to compare evidence, consider alternatives and justify decisions in realistic business situations.

**W3 — Differentiation is not always operationalised**

The unit recognises students' differing learning needs, but some activities do not specify the resources, adjustments or alternative pathways required. This leaves uncertainty about how students with different needs will achieve comparable learning outcomes.

**W4 — Feedback is not consistently connected to revision**

Teacher and peer feedback are already included, particularly in the site study. However, the program does not always specify when feedback should occur, how students should respond or how revision will demonstrate improved understanding.

**W5 — Limited investigation of emerging digital business practices**

The current-issues section identifies cybersecurity and influencer entrepreneurship, but does not develop a dedicated investigation of AI adoption. This leaves an opportunity to examine contemporary technological decisions and their commercial and ethical implications.


### Opportunities

**O1 — Greater use of contemporary Australian business data**

Australian Bureau of Statistics data could provide students with authentic evidence about business activity and technological change. Incorporating statistical interpretation would encourage students to support their judgements with reliable information rather than hypothetical examples alone.

**O2 — Engagement with digital transformation**

Developments in AI, cybersecurity and digital marketing provide opportunities to investigate how technology influences business operations. Students could compare the advantages, costs and risks of different strategies and consider their effects on stakeholders.

**O3 — More complex ethical decision-making**

The existing ethics content could be extended through scenarios in which competing stakeholder interests make the appropriate decision less obvious. This would encourage students to examine ethical tensions rather than simply identify clearly unethical behaviour.

**O4 — Combining explicit teaching with guided inquiry**

The unit's existing modelling and case-study activities could be developed into more structured inquiry sequences. Students could progressively move from teacher-supported understanding to independently gathering evidence, evaluating alternatives and defending their conclusions.

**O5 — Making assessment part of the learning process**

Structured opportunities for self-assessment, feedback, revision and reflection could help students recognise how their reasoning develops. This would make feedback more purposeful and provide clearer evidence of learning progression.


### Threats

**T1 — Digital distraction**

Increasing reliance on digital resources could create opportunities for off-task behaviour, particularly when research activities are insufficiently structured. Curated sources, defined research questions and printable alternatives could help maintain students' focus.

**T2 — Unequal access to learning opportunities**

Students may experience different levels of access to excursions, technology, transport or additional learning support. Without equivalent alternatives, these differences could affect participation and the evidence students can collect.

**T3 — Unequal participation in collaborative activities**

Open-ended group activities may allow more confident students to dominate discussion or decision-making. Without clearly defined roles and individual accountability, some students may contribute less or have their understanding inadequately assessed.

**T4 — Rapidly changing business information**

Examples involving emerging technologies and contemporary business practices may become outdated quickly. Without dated sources and regular review, teaching materials could become less accurate or relevant to students' understanding of current business conditions.

**T5 — Curriculum overload and limited teaching time**

The eight-week unit already incorporates substantial content and varied activities. Adding further learning experiences without replacing or refining existing tasks could reduce time available for explicit teaching, consolidation and assessment.


## B. THREE ~50-WORD BUTTON-CARD SUMMARIES

### A1

I have identified an opportunity to strengthen the unit’s optional recruitment role-play. Although students already analyse recruitment mistakes, the follow-up can centre on scripting rather than making a decision. A structured hiring-panel simulation would require evidence-based comparison, individual accountability and reconsideration of choices as circumstances change.

### B1

The local-business site study is one of the unit’s strongest learning experiences. Rather than replacing it, I want to develop its inquiry process: students formulate questions, collect and question evidence, propose improvements and use feedback to revise. The original visit, report and accessibility provisions are retained.

### C1

The unit already acknowledges contemporary issues, including cybersecurity and influencers, but it does not develop AI adoption as a business decision. I propose a focused current-issues option where students interpret Australian business data, compare implementation strategies and weigh risks for employers, workers and customers. Existing issue coverage remains intact.


## C. THREE CHANGE RECORDS: ORIGINAL EXCERPTS, COMMENTS, REVISED DRAFTS, JUSTIFICATIONS


### A1 — REPLACE / A WEAKER ACTIVITY: Structured recruitment and selection simulation


**Exact placement and editing rule:** Under ‘The role of recruitment and selection in business success’: keep the introductory teaching, flowchart and recruitment case study. Strike through from ‘Working individually or in groups ...’ to ‘Students participate in a peer discussion exercise ...’; insert the replacement before ‘Dealing with the presence of similar businesses’. The deleted optional tasks remain visible as strikethrough in your submission.


#### A1 Original NESA excerpt (wording verified; omitted material labelled)

Heading: The role of recruitment and selection in business success

[Retain the existing teacher explanation of recruitment versus selection, the six-stage flowchart, and the case study. Do not reproduce those full paragraphs in the display.]

"Students examine the consequences of each scenario in terms of business performance and evaluate strategies to improve outcomes."

[STRIKETHROUGH START — this optional follow-up is being replaced]
"Working individually or in groups, they explore the implications of these scenarios for business performance. This may involve the following."
"Students develop a role-play that illustrates one or more of the scenarios. The teacher provides students with a planning template that includes roles, setting, dialogue, problem and consequences."
"Students develop a script that clearly outlines the sequence of events and highlights the recruitment and/or selection issue. They could be given the opportunity to perform a role-play of the script for the rest of the class."
"Note to teacher: Consider providing a sample script and/or model role-play to illustrate the expected structure, level of detail and content."
"Students compose an explanation, using visual and/or written elements, that applies a selected scenario to a specific business context."
"Students participate in a peer discussion exercise that is presented to the class."
[STRIKETHROUGH END]

Next heading: Dealing with the presence of similar businesses


#### A1 Four SWOT comment anchors and complete comment text


- **W1 anchor:** ‘Working individually or in groups’ / ‘peer discussion exercise’
  **Comment:** W1: Participation may be individual or collaborative, but no group responsibilities are clearly specified. This leaves meaningful cooperation and each student's contribution difficult to establish.


- **W2 anchor:** ‘Students develop a role-play ...’ / ‘Students develop a script ...’
  **Comment:** W2: The role-play can demonstrate recruitment mistakes without requiring comparison of competing applicants. Students might reproduce a scenario rather than defend an evidence-based selection decision.


- **O4 anchor:** ‘planning template that includes roles, setting, dialogue, problem and consequences’
  **Comment:** O4: The scaffold organises a performance rather than an investigation. It could instead structure independent evidence gathering, candidate comparisons and justified conclusions following teacher modelling.


- **T3 anchor:** ‘opportunity to perform a role-play’ / ‘peer discussion exercise’
  **Comment:** T3: Without explicit individual outputs, confident performers may dominate discussion while less vocal students remain peripheral. A shared performance does not reveal each student's understanding.


#### A1 Research note (COURSE MODULE; display near opening of change view)

**Source:** EDUC2060 Week 11 lecture materials (2026)

The Week 11 module rejects a simple choice between explicit teaching and inquiry. It emphasises combining teacher guidance with student-centred learning and lists worked examples, collaboration, questioning and differentiation among high-impact strategies. This supports a modelled recruitment simulation followed by independent and group decisions.

**Link/details:** User-supplied Week 11 “Lecture” Materials PDF; course document, no external URL.


#### A1 Revised teacher-facing unit-plan insertion / replacement (~200 words; verbatim)

Recruitment and selection decision-making simulation

Students become a hiring panel for a café recruiting a supervisor. The teacher supplies a business profile, job description, selection criteria and three anonymised applicants with strengths and limitations. None is clearly the best choice.

The teacher models how to compare two criteria using an evidence matrix and explains why decisions should be fair and job-related. Students then rank the applicants individually, recording evidence for their initial judgement.

In groups of four, students take roles as chair, evidence analyst, fairness reviewer and recorder. Each member presents their reasoning before the panel agrees on a candidate and explains the expected effects on staffing, service and business performance.

The teacher introduces a change in circumstances, such as increased weekend demand or reduced staffing funds. Panels revisit their decision and explain whether the new information changes the weighting of their criteria.

Students finish with an individual written or recorded recommendation that compares two applicants, explains an impact on performance and identifies any change in thinking. The teacher checks these responses and provides targeted feedback. Provide a partly completed matrix, vocabulary prompts or a worked example where needed; extend confident students by asking them to identify possible selection bias.


#### A1 Justification comment (~100 words; verbatim)

This changes the purpose of the follow-up task from illustrating a recruitment problem to making a defensible business decision. The Week 11 EDUC2060 module argues for combining explicit teaching with inquiry, rather than treating them as alternatives. A modelled decision matrix gives students an entry point, while the hiring panel creates a reason to debate competing evidence. Defined roles and an individual recommendation address W1 and T3; the revised business constraint deepens W2 by making students reconsider their first answer. The activity deliberately keeps the original unit's business-performance focus and replaces its optional performance tasks rather than extending the timetable.

**Justification pin anchor:** Anchor this single comment to the new heading and the first paragraph of the simulation. Source: EDUC2060 Week 11 lecture module (2026).


### B1 — EXPAND / AN EXISTING STRENGTH: Local business site study: question, evidence, recommendation


**Exact placement and editing rule:** In ‘Site study: a visit to and investigation of a local small business’, keep the existing visit/interview/report, teacher notes, feedback and alternative-visit arrangements. INSERT an extra teacher-facing sequence immediately after ‘Students engage in a site study ... They will:’ and its three bullets, before ‘Note: some students may require adjustments ...’. Do not strike through the original site-study content.


#### B1 Original NESA excerpt (wording verified; omitted material labelled)

Heading: Site study: a visit to and investigation of a local small business

"Students engage in a site study of a local small business to explore real-world applications of business concepts and skills. They will:"
- "observe day-to-day business processes"
- "interview the business owner or manager"
- "collect evidence to inform a written report."

[INSERT THE NEW 200-WORD INQUIRY SEQUENCE HERE. NOTHING IS DELETED.]

"Note: some students may require adjustments to engage in the site study."

[The original continues with investigation prompts, alternative-visit teacher guidance, reporting instructions and feedback. Retain all of this; show relevant abbreviated extracts as separate annotated paragraphs, not one false continuous passage.]

"If a site visit is not possible, the teacher may invite an entrepreneur to speak in person or online."

"The teacher incorporates student self-assessment, peer assessment, and peer and/or teacher feedback so that students have opportunities to monitor their learning and make refinements based on reflection and feedback."


#### B1 Four SWOT comment anchors and complete comment text


- **S2 anchor:** ‘Students engage in a site study ... real-world applications of business concepts and skills’
  **Comment:** S2: The site study is already an authentic strength. A student-generated inquiry question would give observations and interviews clearer purpose, extending this real-world connection further.


- **S4 anchor:** ‘The teacher incorporates student self-assessment, peer assessment, and peer and/or teacher feedback ...’
  **Comment:** S4: The unit already encourages assessment and refinement. Specifying a feedback checkpoint and revised recommendation could make this good practice more consistent and visibly productive.


- **W3 anchor:** ‘Note: some students may require adjustments to engage in the site study’
  **Comment:** W3: This acknowledges different access needs but leaves resources and equivalent outcomes unspecified. A common evidence framework could support different participation routes without reducing challenge.


- **T2 anchor:** ‘If a site visit is not possible, the teacher may invite an entrepreneur ...’
  **Comment:** T2: An invited speaker is a useful contingency, but may offer different evidence from a visit. An equivalent case pack would reduce this access risk.


#### B1 Research note (COURSE READING; display near opening of change view)

**Source:** Dunn (2025), Geography Bulletin, 57(1), pp. 32–41

Dunn (2025, pp. 32–35) describes inquiry as building on explicit teaching and moving through questions, evidence collection, interpretation and communication. Her structured and guided inquiry examples inform the site-study sequence. The article concerns Geography, so applying it to Commerce is a reasoned adaptation.

**Link/details:** https://www.gtanswact.org.au/wp-content/uploads/2025/06/GTA6098_Bulletin_1_2025_v5.pdf


#### B1 Revised teacher-facing unit-plan insertion / replacement (~200 words; verbatim)

Additional inquiry sequence for the local business site study

Before the visit, students choose a business-performance question, such as customer demand, staffing or competition. The teacher models an investigable question using observations, interviews and public information. Students create an evidence planner listing what they need to find out and which sources may help.

During the visit, students record observations separately from statements made by the owner or manager. They ask agreed questions, note any missing evidence and respect confidential business information. The teacher uses a shared checklist to keep the inquiry focused.

Afterwards, students use this evidence within the existing report to recommend one realistic improvement. They explain the likely benefits, costs and potential effect on at least one stakeholder, and identify a limitation in their evidence.

Before final submission, students exchange draft recommendations and receive one targeted teacher or peer question about evidence or reasoning. They then revise their recommendation and add two sentences explaining what changed.

Students unable to attend use a comparable teacher-prepared case pack, business photographs, interview transcript and public-source extract. All students investigate comparable inquiry questions and meet the same rigorous analytical expectations. Sentence starters, visual planners and extension prompts can be provided as needed.


#### B1 Justification comment (~100 words; verbatim)

This addition builds on an activity NESA does well, rather than claiming the original lacks fieldwork, feedback or accessible alternatives. Dunn (2025, pp. 32–35) explains that inquiry develops through questioning, collecting and interpreting evidence, and communicating conclusions, with teacher guidance adjusted to students' needs and abilities at this stage. Applying that sequence to Commerce would give the visit a clearer investigative purpose. Separating observation from owner claims encourages source evaluation, while a recommendation requires students to use rather than merely report findings. A comparable case pack addresses T2, and mandatory feedback-to-revision makes the unit's existing support more deliberate and observable.

**Justification pin anchor:** Anchor to the new ‘Additional inquiry sequence’ heading and opening paragraph. Source: Dunn (2025, pp. 32–35); this is a Commerce adaptation of a Geography reading.


### C1 — ADD / A SPECIFIC MISSING SEQUENCE: AI adoption: a contemporary business decision


**Exact placement and editing rule:** Find ‘Current issues’. The unit already includes digital examples (cybersecurity and influencer entrepreneurship), but no developed activity specifically on adopting AI. INSERT the new sequence after ‘Examples of current issues that could be investigated include:’ and its list, before ‘Students could use the following questions ...’. Keep the existing inquiry questions and source guidance; position AI as a developed option within the current-issues allocation, not an extra unit week.


#### C1 Original NESA excerpt (wording verified; omitted material labelled)

Heading: Current issues

"Students investigate a current issue in relation to the business environment in order to link the concepts they have covered in this unit to the real and dynamic nature of the business world. The investigation should enable students to apply the Commerce concepts and skills from this unit to real-world business contexts."

"Examples of current issues that could be investigated include:"
- "businesses facing decline and closure for failing to adapt to the changing business environment"
- "businesses facing negative publicity for unethical practices"
- "social media influencers emerging as prominent entrepreneurs in a changing business environment"
- "the impact of government policies on business operations"
- "cybersecurity"
- "transnational corporations and their ethical responsibilities to society."

[INSERT THE NEW 200-WORD AI INVESTIGATION OPTION HERE. NOTHING IS DELETED.]

"Students could use the following questions to guide their investigation."
"How does this issue impact the operations and decision-making processes of businesses?"
[The unit continues with further inquiry questions, to retain unmodified.]
"The teacher provides an overview of reliable resources to guide research, including government organisations and media reports."


#### C1 Four SWOT comment anchors and complete comment text


- **W5 anchor:** ‘Examples of current issues ...’ including ‘cybersecurity’ and influencers
  **Comment:** W5: The list acknowledges digital change, including cybersecurity and influencers, but does not investigate AI adoption. A named sequence would add depth without dismissing coverage.


- **O1 anchor:** ‘The teacher provides an overview of reliable resources ... government organisations and media reports’
  **Comment:** O1: This invites credible research, but does not require students to interpret business statistics. A dated ABS extract could support precise, evidence-led judgements about change.


- **O2 anchor:** ‘How does this issue impact the operations and decision-making processes of businesses?’
  **Comment:** O2: The general inquiry question could be developed into a concrete technology decision. Comparing AI options would expose trade-offs among costs, customers, workers and reliability.


- **T4 anchor:** ‘current issue ... real and dynamic nature of the business world’
  **Comment:** T4: Rapid changes in AI use and regulation make generic examples vulnerable to becoming outdated. Dated sources and a planned regular review point are needed.


#### C1 Research note (EXTERNAL SOURCE; display near opening of change view)

**Source:** Australian Bureau of Statistics (2026), Characteristics of Australian Business, 2024–25

The ABS (2026) reports that 12% of businesses used AI in 2024–25, showing its emerging relevance to Australian business decision-making. The statistic gives students a dated, authentic starting point; it does not show that adopting AI necessarily improves profitability, fairness or customer service.

**Link/details:** https://www.abs.gov.au/statistics/industry/technology-and-innovation/characteristics-australian-business/2024-25


#### C1 Revised teacher-facing unit-plan insertion / replacement (~200 words; verbatim)

Current issue option: Should a small business adopt AI?

Students investigate a small business considering AI for customer enquiries or stock. The teacher explains the tool, its limits and why adoption need not improve outcomes.

Students examine an ABS extract showing that 12% of Australian businesses reported using AI in 2024–25 (ABS, 2026). The teacher identifies the source, date and population, and models why adoption figures do not establish effectiveness. Students compare this statistical evidence with the business profile and a brief account of the tool's likely costs.

Working in pairs, students assess three options: adopt immediately, run a limited trial with human oversight, or defer adoption. They weigh potential improvements in speed and service against implementation costs, privacy, errors, staff training and possible effects on jobs. They identify which stakeholders could benefit or lose out.

Students individually recommend an option in a short decision memo, supporting it with the business facts and at least one sourced statistic. They also identify missing evidence and a condition that would alter their recommendation.

The teacher provides curated, dated sources and a printable evidence pack. This option replaces part of the general current-issues investigation; data and case details are reviewed before future delivery.


#### C1 Justification comment (~100 words; verbatim)

This proposal fills a specific gap rather than suggesting the unit ignores technology. Cybersecurity and influencer entrepreneurship are already listed, but the current-issues section does not develop the choice to adopt AI. The ABS (2026) reports AI use by 12% of businesses in 2024–25, making it an authentic and measurable business issue. Students would not simply describe a fashionable technology: they would assess evidence, compare three feasible responses and account for staffing, customers, cost and privacy. Dating the figures addresses T4, while the decision memo links digital change to the unit's established focus on reasoned and ethically informed business judgements.

**Justification pin anchor:** Anchor this comment to the new ‘Current issue option’ heading and ABS paragraph. External source: ABS (2026), Characteristics of Australian Business, 2024–25.


---

## End of build prompt

Treat this as a first-draft presentation. Do not add unrequested Stage 2 functionality. Build, run, smoke-test, and report concise results.
