import { methodology } from "./data/methodology.js";
import { swotGroups } from "./data/swot.js";
import { changes } from "./data/changes.js";
import { adjacentDescriptors, step2Caption, step2Content } from "./data/step2.js";
import step3Data from "../Steps/EDUC2060_Component1_Step3_Final_Content_and_Diff.json" with { type: "json" };
import component2 from "../Steps/EDUC2060_Component2_Implementation_Content.json" with { type: "json" };
import { component3 } from "./data/component3.js";

const app = document.querySelector("#app");
const viewModeButton = document.querySelector(".view-mode-toggle");
let activeCommentId = null;
let activeChangeId = null;
let activeStep = 1;
const selectedSteps = { a1: 1, b1: 1, c1: 1 };
const componentSteps = { 2: 1, 3: 1 };
let activeNewComponent = null;

const annotationMotivations = {
  G: { className: "step2-edit--higher", title: "Relational: strengthens critical engagement" },
  Y: { className: "step2-edit--lower", title: "Unistructural: clarifies necessity or prevents missed critical engagement" },
  X: { className: "step2-edit--general", title: "General wording, implementation or coherence refinement" },
  A: { className: "step3-edit--highest", title: "Extended Abstract: promotes critical and enlivened engagement" },
  F: { className: "step3-edit--safeguard", title: "Prestructural safeguard: prevents superficial, unnecessary or unrelated revision" }
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function changeDisplayName(change) {
  const number = { a1: 1, b1: 2, c1: 3 }[change.id];
  return `${number}) ${change.type}`;
}

function scrollBehavior() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function appendAnnotatedText(element, markedText) {
  let cursor = 0;
  while (cursor < markedText.length) {
    const opening = markedText.indexOf("[[", cursor);
    if (opening === -1) {
      element.append(document.createTextNode(markedText.slice(cursor)));
      break;
    }
    if (opening > cursor) element.append(document.createTextNode(markedText.slice(cursor, opening)));
    const kind = markedText[opening + 2];
    const contentStart = opening + 4;
    const closing = markedText.indexOf("]]", contentStart);
    const motivation = annotationMotivations[kind];
    if (!motivation || markedText[opening + 3] !== ":" || closing === -1) {
      element.append(document.createTextNode(markedText.slice(opening, opening + 2)));
      cursor = opening + 2;
      continue;
    }
    const span = document.createElement("span");
    span.className = motivation.className;
    span.title = motivation.title;
    span.setAttribute("aria-label", `${motivation.title}: ${markedText.slice(contentStart, closing)}`);
    span.append(document.createTextNode(markedText.slice(contentStart, closing)));
    element.append(span);
    cursor = closing + 2;
  }
}

function appendSegments(element, segments, prefix = "") {
  if (!element) return;
  if (prefix) element.append(document.createTextNode(prefix));
  for (const segment of segments) {
    const text = document.createTextNode(segment.text);
    const motivation = segment.tag === "X"
      ? { className: "step3-edit--general", title: "General wording clarification" }
      : segment.tag && annotationMotivations[segment.tag];
    if (!motivation) {
      element.append(text);
      continue;
    }
    const span = document.createElement("span");
    span.className = motivation.className;
    span.title = motivation.title;
    span.setAttribute("aria-label", `${motivation.title}: ${segment.text}`);
    span.append(text);
    element.append(span);
  }
}

function mountAnnotatedText(element, markedText) {
  if (!element) return;
  element.replaceChildren();
  appendAnnotatedText(element, markedText);
}

function renderStepSelector(change) {
  return `<div class="step-selector" role="group" aria-label="Select revision step for ${escapeHTML(changeDisplayName(change))}">
    <span>View:</span>
    <button type="button" data-action="select-step" data-step="1" aria-pressed="${activeStep === 1}">Step 1</button>
    <span aria-hidden="true">|</span>
    <button type="button" data-action="select-step" data-step="2" aria-pressed="${activeStep === 2}">Step 2</button>
    <span aria-hidden="true">|</span>
    <button type="button" data-action="select-step" data-step="3" aria-pressed="${activeStep === 3}">Step 3</button>
    <span aria-hidden="true">|</span>
    <button type="button" data-action="open-step4">Step 4 · Final rubric review</button>
  </div>`;
}

function renderStep2Context() {
  if (activeStep !== 2) return "";
  return `<section class="step2-context" aria-label="Step 2 adjacent rubric reference">
    <p class="step2-caption">${escapeHTML(step2Caption)}</p>
    <div class="view-original-recede-reference">
      <div class="adjacent-descriptors">${adjacentDescriptors.map((descriptor, index) => `<article class="adjacent-descriptor ${index === 0 ? "descriptor-tint--green" : "descriptor-tint--yellow"}"><h2>${escapeHTML(descriptor.title)}</h2><p>${escapeHTML(descriptor.text)}</p></article>`).join("")}</div>
      <div class="step2-legend" aria-label="Revision annotation legend">
        <span><i class="step2-edit--higher">Green</i> Relational: strengthens critical engagement</span>
        <span><i class="step2-edit--lower">Yellow</i> Unistructural: clarifies necessity or critical engagement</span>
        <span><i class="step2-edit--general">Grey</i> General wording or coherence refinement</span>
      </div>
    </div>
  </section>`;
}

function renderStep3Context() {
  if (activeStep !== 3) return "";
  const { rubric } = step3Data;
  return `<section class="step2-context step3-context" aria-label="Step 3 extreme-band rubric reference">
    <p class="step2-caption">Step 3 — Revision against the extreme rubric bands. These descriptors are reference points, not awarded marks.</p>
    <div class="view-original-recede-reference">
      <div class="adjacent-descriptors">
        <article class="adjacent-descriptor descriptor-tint--blue"><h2>Extended Abstract — A</h2><p>${escapeHTML(rubric.extended_abstract)}</p></article>
        <article class="adjacent-descriptor descriptor-tint--red"><h2>Prestructural — F</h2><p>${escapeHTML(rubric.prestructural)}</p></article>
      </div>
      <div class="step2-legend" aria-label="Step 3 revision annotation legend">
        <span><i class="step3-edit--highest">Blue</i> Extended Abstract: critical and enlivened engagement</span>
        <span><i class="step3-edit--safeguard">Red</i> Prestructural safeguard: avoid superficial or unrelated change</span>
        <span><i class="step3-edit--general">Grey</i> General wording clarification</span>
      </div>
    </div>
  </section>`;
}

function externalLink(url, label, className = "") {
  if (!url) return escapeHTML(label);
  return `<a class="${className}" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} <span aria-hidden="true">↗</span></a>`;
}

function renderMethodology() {
  app.innerHTML = `
    <section class="intro-block">
      <p class="eyebrow view-original-recede-text">A considered redesign · Stage 5 Year 9 Commerce</p>
      <h1><span>How I </span><span class="view-original-recede-text">evaluated and</span><span> approached this assessment</span></h1>
      <p class="lede">${escapeHTML(methodology.introduction)}</p>
    </section>
    <section class="method-layout" aria-labelledby="method-heading">
      <div class="method-main soft-card">
        <p class="eyebrow view-original-recede-text">A repeatable review process</p>
        <h2 id="method-heading"><span>Review</span> <span class="view-original-recede-text">the full five-band criterion</span></h2>
        <ol class="method-steps">${methodology.rubricSteps.map((step) => `<li><strong>${escapeHTML(step.title)}</strong> ${escapeHTML(step.text)}</li>`).join("")}</ol>
        <p class="workshop-note">${escapeHTML(methodology.workshopNote)}</p>
        <section class="descriptor-details view-original-recede-reference" aria-labelledby="rubric-heading">
          <h3 class="rubric-heading view-original-recede-text" id="rubric-heading">Assessment rubric — three components</h3>
          <div class="rubric-components">${methodology.rubricComponents.map((component) => `
            <details class="rubric-component"${component.open ? " open" : ""}>
              <summary class="view-original-recede-text">${escapeHTML(component.title)}</summary>
              <div class="descriptor-list">${component.descriptors.map((item) => `
                <article class="descriptor-row">
                  <h3 class="descriptor-band view-original-recede-text">${escapeHTML(item.band)}</h3>
                  <p class="descriptor-copy view-original-recede-text">${escapeHTML(item.text)}</p>
                </article>`).join("")}
              </div>
            </details>`).join("")}
          </div>
        </section>
      </div>
      <aside class="method-aside">
        <div class="component-menu" aria-label="Assessment components">
          <button class="button button-primary" type="button" data-action="open-component-1">Three substantial changes to the Unit Plan</button>
          <button class="button button-primary" type="button" data-action="open-component-2">Proposed Assessment Task</button>
          <button class="button button-primary" type="button" data-action="open-component-3">Multimodal Presentation</button>
        </div>
      </aside>
    </section>`;
}

function renderSwotGrid(relevantCodes = []) {
  return `<section class="swot-grid" aria-label="Complete SWOT analysis">${swotGroups.map((group) => `
    <section class="swot-card swot-${escapeHTML(group.id)}" aria-labelledby="heading-${escapeHTML(group.id)}">
      <div class="quadrant-letter" aria-hidden="true">${escapeHTML(group.letter)}</div>
      <h2 id="heading-${escapeHTML(group.id)}"><span class="letter-chip">${escapeHTML(group.letter)}</span><span class="view-original-recede-text">${escapeHTML(group.title)}</span></h2>
      <div class="swot-items">${group.items.map((item) => {
        const relevant = relevantCodes.includes(item.id);
        return `<article class="swot-item${relevant ? " is-relevant" : ""}" id="swot-${escapeHTML(item.id)}">
          <h3><span class="swot-code">${escapeHTML(item.id)}</span><span class="view-original-recede-text">${escapeHTML(item.title)}</span></h3>
          <p>${escapeHTML(item.text)}</p>
        </article>`;
      }).join("")}</div>
    </section>`).join("")}</section>`;
}

function renderSwotPage() {
  app.innerHTML = `
    <a class="text-link back-link view-original-recede-text" href="#/methodology">← Back to methodology</a>
    <section class="intro-block compact-intro">
      <p class="eyebrow view-original-recede-text">Design observations</p>
      <h1>SWOT analysis <span class="view-original-recede-text">of the original unit</span></h1>
      <p class="lede view-original-recede-text">These are design observations about the written unit plan, not classroom results.</p>
    </section>
    ${renderSwotGrid()}
    <section class="changes-section" aria-labelledby="changes-heading">
      <div class="section-heading"><div><p class="eyebrow view-original-recede-text">From observation to action</p><h2 class="view-original-recede-text" id="changes-heading">Three proposed changes</h2></div></div>
      <div class="change-cards">${Object.values(changes).map((change) => `
        <article class="change-card">
          <p class="change-code">${escapeHTML(changeDisplayName(change))}</p>
          <h3 class="view-original-recede-text">${escapeHTML(change.title)}</h3>
          <p>${escapeHTML(change.overview)}</p>
          <a class="text-link view-original-recede-text" href="#/change/${escapeHTML(change.id)}">Explore this change <span aria-hidden="true">→</span></a>
        </article>`).join("")}</div>
    </section>`;
}

function renderExcerpt(change) {
  const segments = change.excerpt.segments.map((segment) => {
    const markers = (segment.markers || []).map((markerId) => `
      <button class="comment-pin" type="button" data-comment="${escapeHTML(markerId)}" aria-label="Open ${escapeHTML(markerId)} comment" aria-pressed="${activeCommentId === markerId}">${escapeHTML(markerId)}</button>`).join("");
    let body = escapeHTML(segment.text);
    if (segment.status === "deleted") body = `<s>${body}</s>`;
    if (segment.status === "insert-point") body = `<span class="insert-marker-label">Proposed insertion point</span><span>${body}</span>`;
    if (segment.status === "editorial") body = `<em>${body}</em>`;
    const tag = segment.status === "bullet" ? "li" : "p";
    const classNames = ["excerpt-segment", `segment-${segment.status}`, activeCommentId && (segment.markers || []).some((id) => id === activeCommentId) ? "is-anchor-active" : ""].filter(Boolean).join(" ");
    return `<${tag} class="${classNames}" id="${escapeHTML(segment.id)}"><span class="segment-copy view-original-excerpt">${body}</span>${markers}</${tag}>`;
  });
  const contents = [];
  let bullets = [];
  for (const segment of segments) {
    const match = segment.match(/^<li\b/);
    if (match) bullets.push(segment);
    else {
      if (bullets.length) {
        contents.push(`<ul class="excerpt-list">${bullets.join("")}</ul>`);
        bullets = [];
      }
      contents.push(segment);
    }
  }
  if (bullets.length) contents.push(`<ul class="excerpt-list">${bullets.join("")}</ul>`);
  return `<article class="paper original-paper">
    <div class="paper-label view-original-recede-text">Unit plan excerpt — original</div>
    <h3 class="view-original-recede-text">${escapeHTML(change.excerpt.heading)}</h3>
    <div class="excerpt-content">${contents.join("")}</div>
  </article>`;
}

function renderCommentPanel(change) {
  const comment = change.comments.find((item) => item.id === activeCommentId);
  if (!comment) return `<aside class="comment-panel" aria-live="polite"><p class="eyebrow">Document comments</p><h3>Select a pin</h3><p>Choose one of the labelled pins beside the excerpt to read its critique and see the anchored passage highlighted.</p></aside>`;
  if (activeStep === 3) return `<aside class="comment-panel is-open" aria-live="polite" aria-label="${escapeHTML(comment.id)} document comment">
    <p class="eyebrow">Step 3 · SWOT critique · ${escapeHTML(comment.swotId)}</p>
    <h3>${escapeHTML(comment.id)} comment</h3>
    <p data-step3-comment></p>
  </aside>`;
  if (activeStep === 2) return `<aside class="comment-panel is-open" aria-live="polite" aria-label="${escapeHTML(comment.id)} document comment">
    <p class="eyebrow">Step 2 · SWOT critique · ${escapeHTML(comment.swotId)}</p>
    <h3>${escapeHTML(comment.id)} comment</h3>
    <p data-step2-comment></p>
  </aside>`;
  return `<aside class="comment-panel is-open" aria-live="polite" aria-label="${escapeHTML(comment.id)} document comment">
    <p class="eyebrow">SWOT critique · ${escapeHTML(comment.swotId)}</p>
    <h3>${escapeHTML(comment.id)} comment</h3>
    <p>${escapeHTML(comment.text)}</p>
  </aside>`;
}

function renderResearchNote(change) {
  const source = change.research.url
    ? externalLink(change.research.url, change.research.source)
    : escapeHTML(change.research.source);
  return `<aside class="research-note"><p class="eyebrow view-original-recede-text">${escapeHTML(changeDisplayName(change))} · Research informing this change</p><h3>${source}</h3><p>${escapeHTML(change.research.text)}</p>${change.research.details ? `<p class="source-details">${escapeHTML(change.research.details)}</p>` : ""}</aside>`;
}

function renderRevised(change) {
  const step3Change = step3Data.changes[change.code];
  const revised = activeStep === 3
    ? { title: step3Change.sequence.title, paragraphs: null }
    : activeStep === 2 ? step2Content[change.id].revised : change.revised;
  const source = change.justification.sourceUrl
    ? `<p class="justification-source">Cited source: ${externalLink(change.justification.sourceUrl, change.justification.source)}</p>`
    : `<p class="justification-source">Source: ${escapeHTML(change.justification.source)}</p>`;
  return `<section class="revised-wrap reveal-panel" aria-labelledby="revised-title">
    <article class="paper revised-paper">
      <div class="paper-topline"><div><div class="paper-label view-original-recede-text">My revised unit-plan text · ${activeStep === 1 ? "Draft 1" : `Step ${activeStep}`}</div><h3 class="view-original-recede-text" id="revised-title">${escapeHTML(revised.title)}</h3></div>
        <button class="comment-pin justification-pin" type="button" data-action="toggle-justification" aria-label="J1 · Why I changed this" aria-expanded="false" aria-controls="justification-panel">J1</button>
      </div>
      <div class="revised-copy${activeStep === 3 ? " step3-copy" : ""}" id="${escapeHTML(change.justification.anchorId)}">${activeStep === 3 ? `<p data-step3-sequence></p>` : revised.paragraphs.map((paragraph, index) => activeStep === 2 ? `<p data-step2-paragraph="${index}"></p>` : `<p>${escapeHTML(paragraph)}</p>`).join("")}</div>
      <section class="justification-panel" id="justification-panel" hidden aria-live="polite">
        <p class="eyebrow">J1 · Why I changed this</p>
        ${activeStep === 3 ? `<p data-step3-justification></p>` : activeStep === 2 ? `<p data-step2-justification></p>` : `<p>${escapeHTML(change.justification.text)}</p>`}
        ${source}
      </section>
    </article>
  </section>`;
}

function renderChangeNavigation(change) {
  const sequence = ["a1", "b1", "c1"];
  const index = sequence.indexOf(change.id);
  const previous = index > 0 ? changes[sequence[index - 1]] : null;
  const next = index < sequence.length - 1 ? changes[sequence[index + 1]] : null;
  return `<nav class="change-nav" aria-label="Previous and next change">
    ${previous ? `<a class="button button-secondary view-original-recede-control" href="#/change/${escapeHTML(previous.id)}">← Previous change · ${escapeHTML(changeDisplayName(previous))}</a>` : ""}
    ${next ? `<a class="button button-secondary view-original-recede-control" href="#/change/${escapeHTML(next.id)}">${escapeHTML(changeDisplayName(next))} · Next change →</a>` : ""}
  </nav>`;
}

function mountStep2Content(change, root = app) {
  if (activeStep !== 2) return;
  const content = step2Content[change.id];
  const comment = content.comments[activeCommentId];
  if (comment) mountAnnotatedText(root.querySelector("[data-step2-comment]"), comment);
  root.querySelectorAll("[data-step2-paragraph]").forEach((paragraph) => {
    const text = content.revised.paragraphs[Number(paragraph.dataset.step2Paragraph)];
    if (text !== undefined) mountAnnotatedText(paragraph, text);
  });
  mountAnnotatedText(root.querySelector("[data-step2-justification]"), content.justification);
}

function mountStep3Content(change, root = app) {
  if (activeStep !== 3) return;
  const content = step3Data.changes[change.code];
  const comment = content.swot[activeCommentId];
  if (comment) appendSegments(root.querySelector("[data-step3-comment]"), comment.segments, `${activeCommentId} — `);
  appendSegments(root.querySelector("[data-step3-sequence]"), content.sequence.segments);
  appendSegments(root.querySelector("[data-step3-justification]"), content.justification.segments);
}

function renderChangePage(change) {
  activeChangeId = change.id;
  activeStep = selectedSteps[change.id];
  const crumbs = `<nav class="breadcrumbs view-original-recede-text" aria-label="Breadcrumb"><a href="#/methodology">Methodology</a><span aria-hidden="true">/</span><a href="#/swot">SWOT analysis</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHTML(changeDisplayName(change))}</span></nav>`;
  app.innerHTML = `
    ${crumbs}<a class="text-link back-link detail-back view-original-recede-text" href="#/swot">← Back to SWOT</a>
    <section class="change-intro">
      <div><p class="eyebrow">${escapeHTML(changeDisplayName(change))}</p><h1>${escapeHTML(change.title)}</h1><p class="lede">${escapeHTML(change.overview)}</p></div>
      ${renderStepSelector(change)}
    </section>
    ${renderStep2Context()}
    ${renderStep3Context()}
    <div class="relevance-legend view-original-recede-text"><span class="legend-swatch" aria-hidden="true"></span>SWOT points informing this change</div>
    ${renderSwotGrid(change.relevantCodes)}
    ${renderResearchNote(change)}
    <section class="document-section" aria-labelledby="excerpt-heading">
      <div class="section-heading"><div><p class="eyebrow view-original-recede-text">${escapeHTML(changeDisplayName(change))} · Original source material</p><h2 class="view-original-recede-text" id="excerpt-heading">Read the original in context</h2></div></div>
      <div class="document-layout">
        ${renderExcerpt(change)}
        ${renderCommentPanel(change)}
      </div>
      <div class="reveal-controls"><button class="button button-primary view-original-recede-control" type="button" data-action="reveal">Reveal my proposed change</button></div>
      <div id="revised-container"></div>
    </section>`;
  app.insertAdjacentHTML("beforeend", renderChangeNavigation(change));
  mountStep2Content(change);
  mountStep3Content(change);
}

const componentRubricText = {
  A: "Extended Abstract — A",
  B: "Relational — B",
  C: "Multistructural — C",
  D: "Unistructural — D",
  F: "Prestructural — F"
};

function markdownPlainText(markdown) {
  return markdown
    .replace(/^[ \t]*[-*] /gm, "")
    .replace(/^[ \t]*\d+\. /gm, "")
    .replace(/\*\*(.*?)\*\*/gs, "$1")
    .replace(/\*(.*?)\*/gs, "$1");
}

function tokenizeText(value) {
  const tokens = [];
  const pattern = /\s+|[^\s]+/g;
  let match;
  while ((match = pattern.exec(value))) tokens.push({ text: match[0], start: match.index, end: pattern.lastIndex });
  return tokens;
}

function markChangedTokens(baseText, targetText) {
  const baseTokens = tokenizeText(baseText);
  const targetTokens = tokenizeText(targetText);
  const columns = targetTokens.length + 1;
  const table = new Uint32Array((baseTokens.length + 1) * columns);
  for (let i = baseTokens.length - 1; i >= 0; i--) {
    for (let j = targetTokens.length - 1; j >= 0; j--) {
      const cell = i * columns + j;
      table[cell] = baseTokens[i].text === targetTokens[j].text
        ? table[(i + 1) * columns + j + 1] + 1
        : Math.max(table[(i + 1) * columns + j], table[i * columns + j + 1]);
    }
  }
  const changed = new Array(targetTokens.length).fill(false);
  let i = 0;
  let j = 0;
  while (i < baseTokens.length && j < targetTokens.length) {
    if (baseTokens[i].text === targetTokens[j].text) { i++; j++; }
    else if (table[(i + 1) * columns + j] >= table[i * columns + j + 1]) i++;
    else { changed[j] = true; j++; }
  }
  while (j < targetTokens.length) changed[j++] = true;
  return targetTokens.map((token, index) => ({ ...token, changed: changed[index] }));
}

function blockSimilarity(left, right) {
  const words = (value) => markdownPlainText(value).toLowerCase().match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu) || [];
  const leftWords = words(left);
  const rightWords = words(right);
  if (!leftWords.length || !rightWords.length) return 0;
  const leftCounts = new Map();
  const rightCounts = new Map();
  for (const word of leftWords) leftCounts.set(word, (leftCounts.get(word) || 0) + 1);
  for (const word of rightWords) rightCounts.set(word, (rightCounts.get(word) || 0) + 1);
  let overlap = 0;
  for (const [word, count] of leftCounts) overlap += Math.min(count, rightCounts.get(word) || 0);
  return (2 * overlap) / (leftWords.length + rightWords.length);
}

function alignTextBlocks(baseBlocks, targetBlocks) {
  const mapping = new Array(targetBlocks.length).fill(null);
  let baseCursor = 0;
  for (let targetIndex = 0; targetIndex < targetBlocks.length && baseCursor < baseBlocks.length; targetIndex++) {
    const searchEnd = Math.min(baseBlocks.length, baseCursor + 4);
    let bestIndex = baseCursor;
    let bestSimilarity = 0;
    for (let baseIndex = baseCursor; baseIndex < searchEnd; baseIndex++) {
      const similarity = blockSimilarity(baseBlocks[baseIndex], targetBlocks[targetIndex]);
      if (similarity > bestSimilarity) { bestSimilarity = similarity; bestIndex = baseIndex; }
    }
    if (bestSimilarity >= 0.12) {
      mapping[targetIndex] = baseBlocks[bestIndex];
      baseCursor = bestIndex + 1;
    } else if (targetIndex < baseBlocks.length && targetIndex >= baseCursor) {
      mapping[targetIndex] = baseBlocks[targetIndex];
      baseCursor = targetIndex + 1;
    }
  }
  return mapping;
}

function revisionClass(componentNumber, stage, changedPhrase, sentence) {
  const context = `${changedPhrase} ${sentence}`.toLowerCase();
  if (/^(stage\/year:|stage and year:|assessment mode:|syllabus topic:)$/.test(changedPhrase.trim().toLowerCase())) {
    return stage === 2 ? "step2-edit--general" : "step3-edit--general";
  }
  if (componentNumber === 2 && stage === 2 && /^\(?\d{3}–\d{3}$/.test(changedPhrase.trim())) {
    return "step2-edit--general";
  }
  if (stage === 2) {
    if (/common case pack|all essential evidence|participation in the visit|cannot attend|cannot visit|no compulsory|without adding|without requiring|already (?:one of|provided|does)|rather than labelling|not claims|not evidence|fair assessment|consistent and fair|access/.test(context)) return "step2-edit--lower";
    if (/compare alternatives|evaluation goal|evidence|decision|assess|outcome|align|dunn|abs|uptake|recommend|justif|business performance|criteria|inquiry|feedback|selected commerce|learning goals|educational purpose/.test(context)) return "step2-edit--higher";
    return "step2-edit--general";
  }
  if (stage === 3) {
    if (/not evidence|not claims|without|rather than|no compulsory|not simply|not a technology|not prove|not confirmation|preserve|retained|rather than adding|rather than creating|does not mean|does not establish/.test(context)) return "step3-edit--safeguard";
    if (/dilemma|decision|defend|trade-off|persuasive|purposeful|purpose|critical|evaluate|evidence|dunn|education endowment|abs|adoption|customer|budget|recommend|reflection|reflect|professional|assessment|alignment|reasoning|compare|alternative|judgement|judgment|inquiry|student|learning|outcome/.test(context)) return "step3-edit--highest";
    return "step3-edit--general";
  }
  return "";
}

function appendInlineMarkdown(container, markdown, diffTokens, positionRef, stage, componentNumber) {
  let i = 0;
  let plain = "";
  let bold = false;
  let italic = false;
  const flush = () => {
    if (!plain) return;
    const tokenPattern = /\s+|[^\s]+/g;
    let match;
    while ((match = tokenPattern.exec(plain))) {
      const tokenText = match[0];
      const start = positionRef.value;
      const end = start + tokenText.length;
      let output = document.createTextNode(tokenText);
      let tokenInfo = null;
      if (diffTokens) {
        let low = 0;
        let high = diffTokens.length;
        while (low < high) {
          const middle = (low + high) >>> 1;
          if (diffTokens[middle].end <= start) low = middle + 1;
          else high = middle;
        }
        tokenInfo = diffTokens[low];
      }
      if (tokenInfo?.changed && !/^\s+$/.test(tokenText)) {
        const sentenceStart = Math.max(positionRef.fullTarget.lastIndexOf(".", start - 1), positionRef.fullTarget.lastIndexOf("?", start - 1), positionRef.fullTarget.lastIndexOf("!", start - 1)) + 1;
        const fullText = positionRef.fullTarget;
        const stops = [fullText.indexOf(".", end), fullText.indexOf("?", end), fullText.indexOf("!", end)].filter((value) => value >= 0);
        const sentenceEnd = stops.length ? Math.min(...stops) + 1 : fullText.length;
        const sentence = fullText.slice(sentenceStart, sentenceEnd);
        const colorClass = revisionClass(componentNumber, stage, tokenText, sentence);
        const mark = document.createElement("span");
        mark.className = colorClass;
        mark.append(output);
        output = mark;
      }
      if (bold) {
        const strong = document.createElement("strong");
        strong.append(output);
        output = strong;
      }
      if (italic) {
        const em = document.createElement("em");
        em.append(output);
        output = em;
      }
      container.append(output);
      positionRef.value = end;
    }
    plain = "";
  };
  while (i < markdown.length) {
    if (markdown.startsWith("**", i)) { flush(); bold = !bold; i += 2; continue; }
    if (markdown[i] === "*") { flush(); italic = !italic; i += 1; continue; }
    plain += markdown[i++];
  }
  flush();
}

function renderComponentBody(body, baselineBody, stage, componentNumber) {
  const blocks = body.split(/\n\n/);
  const baselineBlocks = baselineBody ? baselineBody.split(/\n\n/) : [];
  const matchedBaseline = baselineBody && stage > 1 ? alignTextBlocks(baselineBlocks, blocks) : [];
  const article = document.createElement("div");
  article.className = "component-script-content";
  for (let blockIndex = 0; blockIndex < blocks.length; blockIndex++) {
    const block = blocks[blockIndex];
    const lines = block.split("\n");
    const isBullets = lines.every((line) => /^- /.test(line));
    const isNumbers = lines.every((line) => /^\d+\. /.test(line));
    const plainBlock = markdownPlainText(block);
    const baseBlock = matchedBaseline[blockIndex];
    const basePlain = baseBlock ? markdownPlainText(baseBlock) : "";
    const diffTokens = baseBlock && stage > 1 ? markChangedTokens(basePlain, plainBlock) : null;
    const refAt = (offset) => ({ value: offset, fullTarget: plainBlock });
    if (isBullets || isNumbers) {
      const list = document.createElement(isBullets ? "ul" : "ol");
      let listOffset = 0;
      for (const line of lines) {
        const content = line.replace(isBullets ? /^- / : /^\d+\. /, "");
        const item = document.createElement("li");
        appendInlineMarkdown(item, content, diffTokens, refAt(listOffset), stage, componentNumber);
        list.append(item);
        listOffset += markdownPlainText(content).length + 1;
      }
      article.append(list);
      continue;
    }
    const node = document.createElement("p");
    appendInlineMarkdown(node, block, diffTokens, refAt(0), stage, componentNumber);
    article.append(node);
  }
  return article.innerHTML;
}

function componentData(componentNumber) {
  return componentNumber === 2 ? component2 : component3;
}

function componentRubricBands(componentNumber, stage) {
  if (componentNumber === 2) {
    const bands = component2.rubricDescriptors.bands;
    const keys = stage === 1 ? ["C"] : stage === 2 ? ["B", "D"] : stage === 3 ? ["A", "F"] : ["A"];
    return bands.filter((band) => keys.includes(band.key)).map((band) => ({ label: band.label, text: band.text, summary: false }));
  }
  const bands = component3.rubricReferences.bands;
  const keys = stage === 1 ? ["C"] : stage === 2 ? ["B", "D"] : stage === 3 ? ["A", "F"] : ["A"];
  return bands.filter((band) => keys.includes(band.key)).map((band) => ({ label: band.label, text: band.descriptor || band.summary, summary: !band.verbatim }));
}

function renderComponentRubric(componentNumber, stage) {
  const bands = componentRubricBands(componentNumber, stage);
  const classFor = { 1: "descriptor-tint--green", 2: "descriptor-tint--green", 3: "descriptor-tint--blue", 4: "descriptor-tint--blue" }[stage];
  const classes = stage === 2 ? ["descriptor-tint--green", "descriptor-tint--yellow"] : stage === 3 ? ["descriptor-tint--blue", "descriptor-tint--red"] : [classFor];
  return `<section class="component-rubric" aria-label="${stage === 1 ? "Rubric focus" : `Step ${stage} rubric references`}">
    ${bands.map((band, index) => `<article class="adjacent-descriptor ${classes[index] || classes[0]}"><h3>${escapeHTML(band.label)}${band.summary ? " · Rubric focus (summary)" : ""}</h3><p>${escapeHTML(band.text)}</p></article>`).join("")}
  </section>`;
}

function componentBody(componentNumber, stage) {
  if (componentNumber === 2) return component2.stages[`step${stage}`].body;
  return component3.stages[`step${stage}`].paragraphs.join("\n\n");
}

function renderComponent2Markdown(body, baselineBody, stage) {
  const baselineGroups = baselineBody ? baselineBody.split(/\n\n/) : [];
  const targetGroups = body.split(/\n\n/);
  const matched = baselineBody ? alignTextBlocks(baselineGroups, targetGroups) : [];
  const article = document.createElement("div");
  article.className = "component-script-content";
  const baselineFields = new Map();
  for (const baselineGroup of baselineGroups) {
    for (const line of baselineGroup.split("\n")) {
      const field = line.trim().match(/^\*\*([^*]+):\*\*\s*(.*?)\s*$/);
      if (field) baselineFields.set(field[1].toLowerCase().replace(/\s+/g, " "), field[2]);
    }
  }
  targetGroups.forEach((group, index) => {
    const targetPlain = markdownPlainText(group);
    const baseline = matched[index] ? markdownPlainText(matched[index]) : "";
    const diff = baseline ? markChangedTokens(baseline, targetPlain) : null;
    const sourceMetadata = /^\*\*(?:Syllabus topic|Stage and year|Stage\/year|Assessed syllabus outcomes)/.test(group);
    if (sourceMetadata) {
      if (group.startsWith("**Assessed syllabus outcomes")) {
        const heading = document.createElement("h3");
        heading.className = "component-script-subheading";
        heading.textContent = markdownPlainText(group);
        article.append(heading);
        return;
      }
      for (const line of group.split("\n")) {
        const field = line.trim().match(/^\*\*([^*]+):\*\*\s*(.*?)\s*$/);
        if (!field) continue;
        const rawLabel = field[1].toLowerCase().replace(/\s+/g, " ");
        const label = rawLabel === "stage and year" ? "Stage/year" : field[1];
        const value = field[2];
        const p = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = `${label}:`;
        p.append(strong, document.createTextNode(" "));
        const isAssessmentMode = rawLabel === "assessment mode";
        const previousValue = baselineFields.get(rawLabel);
        if (isAssessmentMode && previousValue && stage > 1 && previousValue !== value) {
          const valueDiff = markChangedTokens(previousValue, value);
          appendInlineMarkdown(p, value, valueDiff, { value: 0, fullTarget: value }, stage, 2);
        } else if (rawLabel === "audience" && stage === 3 && !previousValue) {
          const audience = document.createElement("span");
          audience.className = "step3-edit--general";
          audience.textContent = value;
          p.append(audience);
        } else if (isAssessmentMode && stage === 3 && !previousValue) {
          const audience = document.createElement("span");
          audience.className = "step3-edit--highest";
          audience.textContent = value;
          p.append(audience);
        } else {
          p.append(document.createTextNode(value));
        }
        article.append(p);
      }
      return;
    }
    if (/^(?:- |\d+\. )/m.test(group)) {
      const listLines = group.split("\n");
      const ordered = /^\d+\. /.test(listLines[0]);
      const list = document.createElement(ordered ? "ol" : "ul");
      let groupOffset = 0;
      listLines.forEach((line) => {
        const content = line.replace(ordered ? /^\d+\. / : /^- /, "");
        const item = document.createElement("li");
        const unchangedOutcome = /^\*\*CO5-(?:ECB|DEC|PRO|COM)-01:\*\*/.test(content);
        appendInlineMarkdown(item, content, unchangedOutcome ? null : diff, { value: groupOffset, fullTarget: targetPlain }, stage, 2);
        list.append(item);
        groupOffset += markdownPlainText(content).length + 1;
      });
      article.append(list);
      return;
    }
    const paragraph = document.createElement("p");
    const fullBoldHeading = group.match(/^\*\*(.+)\*\*$/s);
    if (fullBoldHeading) {
      const heading = document.createElement("h3");
      heading.className = "component-script-subheading";
      heading.textContent = fullBoldHeading[1];
      article.append(heading);
      return;
    }
    const field = group.match(/^\*\*([^*]+):\*\*([\s\S]*)$/);
    if (field) {
      const label = document.createElement("strong");
      label.textContent = `${field[1]}:`;
      paragraph.append(label, document.createTextNode(field[2]));
    } else {
      appendInlineMarkdown(paragraph, group, sourceMetadata ? null : diff, { value: 0, fullTarget: targetPlain }, stage, 2);
    }
    article.append(paragraph);
  });
  return article.innerHTML;
}

function renderComponentStageContent(componentNumber, stage) {
  const data = componentData(componentNumber);
  const stageData = componentNumber === 2 ? data.stages[`step${stage}`] : data.stages[`step${stage}`];
  const body = componentBody(componentNumber, stage);
  const baseline = stage === 2 ? componentBody(componentNumber, 1) : stage === 3 ? componentBody(componentNumber, 2) : null;
  const badge = componentNumber === 2
    ? stage === 1 ? "Step 1 — Multistructural C" : stage === 2 ? "Step 2 — Relational B / Unistructural D" : "Step 3 — Extended Abstract A / Prestructural F"
    : stageData.title;
  const legend = stage === 2
    ? `<div class="step2-legend"><span><i class="step2-edit--higher">Green</i> Relational B improvement</span><span><i class="step2-edit--lower">Yellow</i> Unistructural D safeguard</span><span><i class="step2-edit--general">Grey</i> General refinement</span></div>`
    : stage === 3
      ? `<div class="step2-legend"><span><i class="step3-edit--highest">Blue</i> Extended Abstract A refinement</span><span><i class="step3-edit--safeguard">Red</i> Prestructural F safeguard</span><span><i class="step3-edit--general">Grey</i> General refinement</span></div>`
      : "";
  const rendered = componentNumber === 2
    ? renderComponent2Markdown(body, baseline, stage)
    : renderComponentBody(body, baseline, stage, componentNumber);
  return `<section class="component-stage-content">
    <p class="eyebrow">${escapeHTML(badge)}</p>
    ${renderComponentRubric(componentNumber, stage)}
    ${legend}
    <article class="paper component-script" data-component-body="${componentNumber}" data-stage="${stage}">${rendered}</article>
    ${componentNumber === 2 ? renderComponent2Supporting(stageData) : renderComponent3Supporting(stageData)}
  </section>`;
}

function renderComponent2Supporting(stageData) {
  return "";
}

function renderComponent3Supporting(stageData) {
  return "";
}

function componentReviewData(componentNumber) {
  return componentNumber === 2 ? component2.step4 : component3.step4;
}

function openComponentReview(componentNumber, trigger) {
  const data = componentReviewData(componentNumber);
  const modalId = `component-${componentNumber}-step4-modal`;
  if (document.getElementById(modalId)) return;
  const previousOverflow = document.body.style.overflow;
  const previousScroll = window.scrollY;
  const overlay = document.createElement("div");
  overlay.id = modalId;
  overlay.className = "component-review-overlay";
  const panel = document.createElement("section");
  panel.className = "component-review-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "true");
  panel.setAttribute("aria-labelledby", `${modalId}-title`);
  panel.tabIndex = -1;
  const header = document.createElement("div");
  header.className = "component-review-header";
  const heading = document.createElement("h2");
  heading.id = `${modalId}-title`;
  const reviewLabel = document.createElement("span");
  reviewLabel.className = "component-review-primary";
  reviewLabel.textContent = "Final review";
  const reviewContext = document.createElement("span");
  reviewContext.className = "component-review-chrome";
  reviewContext.textContent = ` — ${data.heading.replace("Final review", "").trim()}`;
  heading.append(reviewLabel, reviewContext);
  const close = document.createElement("button");
  close.className = "button button-secondary";
  close.type = "button";
  close.textContent = "Close ×";
  header.append(heading, close);
  panel.append(header);
  if (data.introduction) {
    const intro = document.createElement("p");
    intro.className = "component-review-intro";
    intro.textContent = data.introduction;
    panel.append(intro);
  }
  const rubric = document.createElement("article");
  rubric.className = "component-review-rubric";
  const rubricLabel = document.createElement("p");
  rubricLabel.textContent = data.rubricBand || "Extended Abstract — A";
  const quote = document.createElement("p");
  quote.textContent = data.rubricDescriptor;
  rubric.append(rubricLabel, quote);
  panel.append(rubric);
  const list = document.createElement("ol");
  list.className = "component-review-list";
  data.items.forEach((item) => {
    const row = document.createElement("li");
    const tick = document.createElement("span");
    tick.className = "component-review-tick";
    tick.setAttribute("aria-hidden", "true");
    tick.textContent = "✓";
    const text = document.createElement("div");
    const term = document.createElement("strong");
    term.textContent = item.keyword;
    const explanation = document.createElement("p");
    explanation.textContent = item.explanation;
    text.append(term, explanation);
    row.append(tick, text);
    list.append(row);
  });
  panel.append(list);
  if (data.reviewQualifier) {
    const qualifier = document.createElement("p");
    qualifier.className = "component-review-qualifier";
    qualifier.textContent = data.reviewQualifier;
    panel.append(qualifier);
  }
  const footer = document.createElement("div");
  footer.className = "component-review-footer";
  const returnButton = document.createElement("button");
  returnButton.className = "button button-primary";
  returnButton.type = "button";
  returnButton.textContent = "Return to the presentation";
  footer.append(returnButton);
  panel.append(footer);
  overlay.append(panel);
  document.body.append(overlay);
  document.body.style.overflow = "hidden";
  let open = true;
  const closeModal = () => {
    if (!open) return;
    open = false;
    document.removeEventListener("keydown", onKeydown);
    document.body.style.overflow = previousOverflow;
    overlay.remove();
    if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    window.scrollTo({ top: previousScroll, behavior: "auto" });
  };
  const onKeydown = (event) => {
    if (event.key === "Escape") { event.preventDefault(); closeModal(); }
    if (event.key === "Tab") {
      const focusable = [...panel.querySelectorAll("button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])")];
      if (event.shiftKey && document.activeElement === focusable[0]) { event.preventDefault(); focusable.at(-1)?.focus(); }
      else if (!event.shiftKey && document.activeElement === focusable.at(-1)) { event.preventDefault(); focusable[0]?.focus(); }
    }
  };
  close.addEventListener("click", closeModal);
  returnButton.addEventListener("click", closeModal);
  overlay.addEventListener("mousedown", (event) => { if (event.target === overlay) closeModal(); });
  document.addEventListener("keydown", onKeydown);
  close.focus();
}

function renderNewComponent(componentNumber) {
  activeNewComponent = componentNumber;
  activeChangeId = null;
  activeStep = componentSteps[componentNumber];
  const isComponent2 = componentNumber === 2;
  const title = isComponent2 ? "Component 2 — Assessment Proposal" : "Component 3 — Multimodal Presentation";
  const rubricBands = isComponent2 ? component2.rubricDescriptors.bands : component3.rubricReferences.bands;
  const activeStage = isComponent2 ? component2.stages[`step${activeStep}`] : component3.stages[`step${activeStep}`];
  const step4 = isComponent2 ? component2.step4 : component3.step4;
  const body = isComponent2 ? activeStage.body : activeStage.paragraphs.join("\n\n");
  const baseline = activeStep === 2
    ? (isComponent2 ? component2.stages.step1.body : component3.stages.step1.paragraphs.join("\n\n"))
    : activeStep === 3
      ? (isComponent2 ? component2.stages.step2.body : component3.stages.step2.paragraphs.join("\n\n"))
      : null;
  const bandKeys = activeStep === 1 ? ["C"] : activeStep === 2 ? ["B", "D"] : ["A", "F"];
  const references = rubricBands.filter((band) => bandKeys.includes(band.key));
  const bandHtml = references.map((band, index) => {
    const colorClass = activeStep === 2 ? (index === 0 ? "descriptor-tint--green" : "descriptor-tint--yellow") : activeStep === 3 ? (index === 0 ? "descriptor-tint--blue" : "descriptor-tint--red") : "";
    const text = band.text || band.descriptor || band.summary || "";
    const summaryLabel = isComponent2 || band.verbatim ? "" : " · Rubric focus (summary)";
    return `<article class="adjacent-descriptor ${colorClass}"><h3>${escapeHTML(band.label + summaryLabel)}</h3><p>${escapeHTML(text)}</p></article>`;
  }).join("");
  const legend = activeStep === 2
    ? `<div class="step2-legend"><span><i class="step2-edit--higher">Green</i> Relational B improvement</span><span><i class="step2-edit--lower">Yellow</i> Unistructural D safeguard</span><span><i class="step2-edit--general">Grey</i> General refinement</span></div>`
    : activeStep === 3
      ? `<div class="step2-legend"><span><i class="step3-edit--highest">Blue</i> Extended Abstract A refinement</span><span><i class="step3-edit--safeguard">Red</i> Prestructural F safeguard</span><span><i class="step3-edit--general">Grey</i> General refinement</span></div>`
      : "";
  const bodyHtml = isComponent2
    ? renderComponent2Markdown(body, baseline, activeStep)
    : renderComponentBody(body, baseline, activeStep, componentNumber);
  const stageButton = (step) => `<button type="button" data-action="select-component-step" data-component="${componentNumber}" data-step="${step}" aria-pressed="${activeStep === step}">Step ${step}</button>`;
  const intro = isComponent2 ? "Individual assessment proposal · The business environment" : "Provisional recording script · 4–5-minute multimodal presentation";
  const supporting = isComponent2 ? renderComponent2Supporting(activeStage) : renderComponent3Supporting(activeStage);
  app.innerHTML = `
    <a class="text-link back-link" href="#/methodology">← Back to home</a>
    <section class="intro-block component-intro"><p class="eyebrow component-page-kicker">${isComponent2 ? "2) Proposed Assessment Task" : "3) Multimodal Presentation"}</p><h1><span class="component-title-prefix">Component ${componentNumber} — </span><span class="component-title-primary">${isComponent2 ? "Assessment Proposal" : "Multimodal Presentation"}</span></h1><p class="lede component-page-subtitle">${escapeHTML(intro)}</p></section>
    <div class="step-selector component-step-selector" role="group" aria-label="${escapeHTML(title)} stages">${stageButton(1)}${stageButton(2)}${stageButton(3)}<button type="button" class="button button-secondary" data-action="open-component-review" data-component="${componentNumber}">Step 4 · Final rubric review</button></div>
    <section class="component-stage-content"><p class="eyebrow">${escapeHTML(activeStage.title)}${activeStage.rubricBand ? ` · ${escapeHTML(activeStage.rubricBand)}` : ""}</p><section class="component-rubric" aria-label="Rubric reference">${bandHtml}</section>${legend}<article class="paper component-script">${bodyHtml}</article>${supporting}</section>
    <nav class="change-nav component-bottom-nav" aria-label="Component navigation"><a class="button button-secondary" href="#/methodology">← Return to home</a></nav>`;
}

function renderRoute() {
  activeCommentId = null;
  const route = location.hash || "#/methodology";
  if (route === "#/methodology") return renderMethodology();
  if (route === "#/swot") return renderSwotPage();
  if (route === "#/component2") return renderNewComponent(2);
  if (route === "#/component3") return renderNewComponent(3);
  const changeMatch = route.match(/^#\/change\/(a1|b1|c1)$/);
  if (changeMatch) return renderChangePage(changes[changeMatch[1]]);
  location.hash = "#/methodology";
}

app.addEventListener("click", (event) => {
  const pin = event.target.closest("[data-comment]");
  if (pin && activeChangeId) {
    activeCommentId = pin.dataset.comment;
    const change = changes[activeChangeId];
    const comment = change.comments.find((item) => item.id === activeCommentId);
    app.querySelector(".comment-panel").outerHTML = renderCommentPanel(change);
    mountStep2Content(change);
    mountStep3Content(change);
    app.querySelectorAll("[data-comment]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.comment === activeCommentId));
    });
    app.querySelectorAll(".excerpt-segment").forEach((segment) => segment.classList.remove("is-anchor-active"));
    const clickedSegmentId = pin.closest(".excerpt-segment")?.id || comment.anchorId;
    document.getElementById(clickedSegmentId)?.classList.add("is-anchor-active");
    return;
  }

  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "open-component-1") {
    location.hash = "#/swot";
  } else if (action === "open-component-2") {
    location.hash = "#/component2";
  } else if (action === "open-component-3") {
    location.hash = "#/component3";
  } else if (action === "select-component-step") {
    const componentNumber = Number(event.target.closest("[data-action]").dataset.component);
    componentSteps[componentNumber] = Number(event.target.closest("[data-action]").dataset.step);
    renderNewComponent(componentNumber);
    app.querySelector(`[data-action="select-component-step"][data-component="${componentNumber}"][data-step="${componentSteps[componentNumber]}"]`)?.focus();
  } else if (action === "open-component-review") {
    const componentNumber = Number(event.target.closest("[data-action]").dataset.component);
    openComponentReview(componentNumber, event.target.closest("[data-action]"));
  } else if (action === "open-step4" && activeChangeId) {
    window.EDUC2060Step4?.open();
  } else if (action === "select-step" && activeChangeId) {
    activeStep = Number(event.target.closest("[data-action]").dataset.step);
    selectedSteps[activeChangeId] = activeStep;
    renderRoute();
    app.querySelector(`[data-action="select-step"][data-step="${activeStep}"]`)?.focus();
  } else if (action === "reveal" && activeChangeId) {
    const container = app.querySelector("#revised-container");
    if (!container.firstElementChild) {
      container.innerHTML = renderRevised(changes[activeChangeId]);
      mountStep2Content(changes[activeChangeId], container);
      mountStep3Content(changes[activeChangeId], container);
    }
    app.querySelector("[data-action='reveal']").hidden = true;
    const hide = document.createElement("button");
    hide.type = "button";
    hide.className = "button button-secondary hide-change-button view-original-recede-control";
    hide.dataset.action = "hide";
    hide.textContent = "Hide my proposed change";
    app.querySelector(".reveal-controls").append(hide);
  } else if (action === "hide" && activeChangeId) {
    app.querySelector("#revised-container").innerHTML = "";
    app.querySelector("[data-action='reveal']").hidden = false;
    app.querySelector("[data-action='hide']").remove();
    app.querySelector("[data-action='reveal']").focus();
  } else if (action === "toggle-justification") {
    const button = event.target.closest("[data-action]");
    const panel = app.querySelector("#justification-panel");
    const opening = panel.hidden;
    panel.hidden = !opening;
    button.setAttribute("aria-expanded", String(opening));
    if (opening) panel.scrollIntoView({ block: "nearest", behavior: scrollBehavior() });
  }
});

function toggleViewOriginalWork() {
  const enabled = document.body.classList.toggle("view-original-work");
  viewModeButton.setAttribute("aria-pressed", String(enabled));
  viewModeButton.textContent = enabled ? "Return to Full View" : "View Original Work";
  document.dispatchEvent(new CustomEvent("educ2060-view-mode-change", { detail: { enabled } }));
}

viewModeButton.addEventListener("click", toggleViewOriginalWork);
document.addEventListener("educ2060-toggle-view-mode", toggleViewOriginalWork);

window.addEventListener("hashchange", () => {
  activeChangeId = null;
  renderRoute();
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
});

if (!location.hash) location.hash = "#/methodology";
renderRoute();
