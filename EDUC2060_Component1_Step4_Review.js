/*
 * EDUC2060 Assessment 2B — Component 1, Step 4
 * Self-contained A-band rubric review modal.
 *
 * INSTALLATION
 * 1. Place this file under Steps/ in the website project.
 * 2. Load it once: <script defer src="./Steps/EDUC2060_Component1_Step4_Review.js"></script>
 * 3. Wire ONE existing/new Step 4 button to:
 *       window.EDUC2060Step4.open()
 *
 * No frameworks, packages, remote resources, additional CSS or other assets.
 * This file does not modify the existing Step 1–3 drafts, website navigation,
 * original NESA excerpts or any saved content.
 */
(function () {
  'use strict';

  if (window.EDUC2060Step4) return; // Avoid a second modal if loaded twice.
  // ========= EDITABLE PRESENTATION CONTENT (Step 4 only) =========
  const rubric = 'Three sophisticated changes have been identified in the unit plan, and their implementation would support critical and enlivened engagement with learning experiences.';

  const checks = [
    {
      keyword: 'Three changes',
      note: '1) Replacement revises the optional recruitment role-play; 2) Expansion deepens the local-business site study; 3) Insertion adds a focused AI-adoption investigation to the existing current-issues section.'
    },
    {
      keyword: 'Sophisticated',
      note: 'Each change moves beyond describing business practices. Students weigh trade-offs, test evidence, consider stakeholder consequences and defend decisions that have more than one plausible answer.'
    },
    {
      keyword: 'Identified',
      note: 'The amendments are located within named parts of the NESA unit plan. 1) Replacement identifies the activity to replace, 2) Expansion the inquiry to develop, and 3) Insertion the specific gap to fill.'
    },
    {
      keyword: 'Implementation',
      note: 'The plan specifies teaching moves and student outputs: a modelled hiring matrix and individual recommendation; a guided inquiry and revised report; and a data-informed business decision memo.'
    },
    {
      keyword: 'Would support',
      note: 'The proposed scaffolds, evidence requirements, discussion roles and feedback cycles explain how the activities could support learning. These are design claims, not measured classroom outcomes.'
    },
    {
      keyword: 'Critical',
      note: '1) Replacement compares applicants and questions bias; 2) Expansion distinguishes direct observations from business-owner claims; 3) Insertion compares adoption data and evaluates competing strategies, costs and risks.'
    },
    {
      keyword: 'And',
      note: 'Each activity combines critical reasoning with an active, purposeful learning experience. This addresses the A-band requirement for critical AND enlivened engagement, rather than either quality alone.'
    },
    {
      keyword: 'Enlivened',
      note: 'Students become hiring-panel members, investigators of a real local business, and advisers to a retailer. Each role gives them a decision to influence rather than simply information to reproduce.'
    },
    {
      keyword: 'Engagement',
      note: 'Individual preparation and defined responsibilities invite participation; changing constraints, student questions and competing options encourage students to revisit and defend their thinking.'
    },
    {
      keyword: 'Learning experiences',
      note: 'The work stays grounded in Stage 5 Commerce: recruitment and performance, authentic small-business investigation, and contemporary operational decisions. Existing tasks are replaced or deepened, not duplicated.'
    }
  ];

  // ========= END EDITABLE CONTENT =========

  const STYLE_ID = 'educ2060-step4-styles';
  const MODAL_ID = 'educ2060-step4-overlay';
  let overlay;
  let panel;
  let priorFocus = null;
  let previousOverflow = '';
  let isOpen = false;

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      #${MODAL_ID}[hidden] { display: none !important; }
      #${MODAL_ID} {
        position: fixed; inset: 0; z-index: 2147483000;
        display: flex; align-items: center; justify-content: center;
        padding: 18px;
        background: rgba(32, 42, 45, 0.28);
        -webkit-backdrop-filter: blur(8px) saturate(0.86);
        backdrop-filter: blur(8px) saturate(0.86);
        box-sizing: border-box;
      }
      #${MODAL_ID}, #${MODAL_ID} * { box-sizing: border-box; }
      #${MODAL_ID} .e2060s4-page {
        width: min(860px, 100%); max-height: min(880px, 90dvh);
        overflow-y: auto; overscroll-behavior: contain;
        background: #fffdf9; color: #293234;
        border: 1px solid #d8dfda; border-radius: 16px;
        box-shadow: 0 22px 85px rgba(19, 27, 28, 0.22);
        padding: clamp(20px, 4vw, 38px);
        font-family: inherit; line-height: 1.5;
      }
      #${MODAL_ID} .e2060s4-topline { display: flex; align-items: flex-start; justify-content: space-between; gap: 15px; }
      #${MODAL_ID} .e2060s4-actions { display: flex; align-items: center; gap: 8px; }
      #${MODAL_ID} .e2060s4-kicker {
        margin: 0 0 6px; font-size: 0.78rem; font-weight: 750;
        letter-spacing: 0.09em; text-transform: uppercase; color: #62706e;
      }
      #${MODAL_ID} h2 { margin: 0; font-size: clamp(1.38rem, 2.7vw, 1.9rem); line-height: 1.22; font-weight: 750; }
      #${MODAL_ID} .e2060s4-close {
        flex: 0 0 auto; border: 1px solid #cbd7d4; background: #ffffff;
        color: #33494a; border-radius: 9px; cursor: pointer;
        padding: 6px 12px; font-size: 1.05rem; line-height: 1.4;
      }
      #${MODAL_ID} .e2060s4-view-toggle {
        flex: 0 0 auto; border: 1px solid #cbd7d4; background: #ffffff;
        color: #33494a; border-radius: 9px; cursor: pointer;
        padding: 6px 10px; font-size: 0.83rem; line-height: 1.4;
      }
      #${MODAL_ID} .e2060s4-view-toggle:hover, #${MODAL_ID} .e2060s4-view-toggle:focus-visible { background: #edf3f1; outline-offset: 3px; }
      #${MODAL_ID} .e2060s4-close:hover, #${MODAL_ID} .e2060s4-close:focus-visible { background: #edf3f1; outline-offset: 3px; }
      #${MODAL_ID} .e2060s4-intro { font-size: 0.95rem; color: #566563; margin: 11px 0 20px; }
      #${MODAL_ID} .e2060s4-rubric {
        background: #edf4fc; border: 1px solid #d5e4f5;
        border-radius: 11px; padding: 19px 21px; margin-bottom: 25px;
      }
      #${MODAL_ID} .e2060s4-rubric-name { color: #385878; font-weight: 750; font-size: 0.85rem; margin: 0 0 9px; }
      #${MODAL_ID} .e2060s4-quote { font-size: 1.03rem; line-height: 1.57; margin: 0; font-weight: 500; }
      #${MODAL_ID} h3 { font-size: 1.03rem; margin: 0 0 11px; color: #344242; }
      #${MODAL_ID} .e2060s4-list { padding: 0; margin: 0; list-style: none; display: grid; gap: 0; }
      #${MODAL_ID} .e2060s4-item {
        display: grid; grid-template-columns: 26px minmax(0, 1fr);
        gap: 13px; padding: 13px 1px; border-top: 1px solid #e6eae6;
      }
      #${MODAL_ID} .e2060s4-tick {
        display: flex; align-items: center; justify-content: center;
        width: 24px; height: 24px; margin-top: 2px;
        border-radius: 50%; background: #e6f3ec; border: 1px solid #a2c9b4;
        color: #2b7351; font-weight: 800; font-size: 0.9rem; line-height: 1;
      }
      #${MODAL_ID} .e2060s4-term { display: block; margin: 0 0 3px; font-weight: 750; font-size: 1rem; }
      #${MODAL_ID} .e2060s4-explanation { margin: 0; font-size: 0.95rem; line-height: 1.5; color: #475554; }
      #${MODAL_ID} .e2060s4-conclusion {
        margin-top: 20px; padding: 15px 17px; background: #f1f4f0;
        border-left: 3px solid #87a799; border-radius: 3px 8px 8px 3px;
        font-size: 0.92rem; line-height: 1.55; color: #45534e;
      }
      #${MODAL_ID} .e2060s4-bottom {
        display: flex; justify-content: flex-end; margin-top: 20px;
      }
      #${MODAL_ID} .e2060s4-done {
        cursor: pointer; background: #344b49; color: #fff;
        border: 1px solid #344b49; border-radius: 8px;
        padding: 9px 17px; font: inherit; font-size: 0.91rem;
      }
      #${MODAL_ID} .e2060s4-done:hover, #${MODAL_ID} .e2060s4-done:focus-visible { background: #263c3a; outline-offset: 3px; }
      body.view-original-work #${MODAL_ID} .e2060s4-kicker,
      body.view-original-work #${MODAL_ID} .e2060s4-heading-muted,
      body.view-original-work #${MODAL_ID} .e2060s4-intro,
      body.view-original-work #${MODAL_ID} .e2060s4-rubric,
      body.view-original-work #${MODAL_ID} h3.e2060s4-check-heading { color: #b0b5b4; }
      body.view-original-work #${MODAL_ID} .e2060s4-rubric { background: #f0f1ef; border-color: #e4e6e3; }
      body.view-original-work #${MODAL_ID} .e2060s4-rubric-name,
      body.view-original-work #${MODAL_ID} .e2060s4-quote { color: #b0b5b4; }
      body.view-original-work #${MODAL_ID} .e2060s4-view-toggle { color: #33494a; background: #ffffff; border-color: #cbd7d4; }
      body.view-original-work #${MODAL_ID} .e2060s4-close,
      body.view-original-work #${MODAL_ID} .e2060s4-done { color: #898f8d; background: #eef0ee; border-color: #dfe2e0; }
      body.view-original-work #${MODAL_ID} .e2060s4-close:hover,
      body.view-original-work #${MODAL_ID} .e2060s4-done:hover { color: #5b6461; background: #e4e7e4; }
      @media (max-width: 600px) {
        #${MODAL_ID} { padding: 8px; align-items: center; }
        #${MODAL_ID} .e2060s4-page { border-radius: 11px; max-height: 94dvh; padding: 20px 17px; }
        #${MODAL_ID} .e2060s4-rubric { padding: 15px 16px; }
        #${MODAL_ID} .e2060s4-item { gap: 10px; }
      }
      @media (prefers-reduced-motion: reduce) {
        #${MODAL_ID} * { scroll-behavior: auto !important; animation: none !important; transition: none !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function el(tag, className, textContent) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (textContent !== undefined) node.textContent = textContent;
    return node;
  }

  function createModal() {
    if (overlay) return;
    addStyles();

    overlay = el('div');
    overlay.id = MODAL_ID;
    overlay.hidden = true;

    panel = el('section', 'e2060s4-page');
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-labelledby', 'educ2060-step4-heading');
    panel.setAttribute('aria-describedby', 'educ2060-step4-description');
    panel.setAttribute('tabindex', '-1');

    const top = el('div', 'e2060s4-topline');
    const titleArea = el('div');
    titleArea.appendChild(el('p', 'e2060s4-kicker', 'Component 1 · Step 4'));
    const title = el('h2', 'e2060s4-check-heading');
    title.appendChild(el('span', '', 'Final review'));
    title.appendChild(el('span', 'e2060s4-heading-muted', ' against the A-band criterion'));
    title.id = 'educ2060-step4-heading';
    titleArea.appendChild(title);
    top.appendChild(titleArea);
    const actions = el('div', 'e2060s4-actions');
    const viewToggle = el('button', 'e2060s4-view-toggle', document.body.classList.contains('view-original-work') ? 'Return to Full View' : 'View Original Work');
    viewToggle.type = 'button';
    viewToggle.setAttribute('aria-pressed', String(document.body.classList.contains('view-original-work')));
    viewToggle.addEventListener('click', () => document.dispatchEvent(new Event('educ2060-toggle-view-mode')));
    document.addEventListener('educ2060-view-mode-change', (event) => {
      viewToggle.setAttribute('aria-pressed', String(event.detail.enabled));
      viewToggle.textContent = event.detail.enabled ? 'Return to Full View' : 'View Original Work';
    });
    actions.appendChild(viewToggle);
    const x = el('button', 'e2060s4-close', 'Close ×');
    x.type = 'button';
    x.setAttribute('aria-label', 'Close Step 4 review');
    x.addEventListener('click', close);
    actions.appendChild(x);
    top.appendChild(actions);
    panel.appendChild(top);

    const intro = el('p', 'e2060s4-intro', 'A final, phrase-by-phrase self-assessment of the three proposed changes.');
    intro.id = 'educ2060-step4-description';
    panel.appendChild(intro);

    const rubricPanel = el('div', 'e2060s4-rubric');
    rubricPanel.appendChild(el('p', 'e2060s4-rubric-name', 'Extended Abstract — A'));
    rubricPanel.appendChild(el('p', 'e2060s4-quote', rubric));
    panel.appendChild(rubricPanel);

    panel.appendChild(el('h3', 'e2060s4-check-heading', 'Checking each key phrase'));
    const ul = el('ul', 'e2060s4-list');
    checks.forEach((item) => {
      const li = el('li', 'e2060s4-item');
      const check = el('span', 'e2060s4-tick', '✓');
      check.setAttribute('aria-hidden', 'true');
      li.appendChild(check);
      const content = el('div');
      content.appendChild(el('strong', 'e2060s4-term', item.keyword));
      content.appendChild(el('p', 'e2060s4-explanation', item.note));
      li.appendChild(content);
      ul.appendChild(li);
    });
    panel.appendChild(ul);

    const bottom = el('div', 'e2060s4-bottom');
    const done = el('button', 'e2060s4-done', 'Return to the presentation');
    done.type = 'button';
    done.addEventListener('click', close);
    bottom.appendChild(done);
    panel.appendChild(bottom);

    overlay.appendChild(panel);
    overlay.addEventListener('mousedown', (event) => {
      if (event.target === overlay) close();
    });
    document.body.appendChild(overlay);
  }

  function onKeyDown(event) {
    if (!isOpen) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...panel.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')]
      .filter(node => node.getClientRects().length > 0);
    if (!focusable.length) { event.preventDefault(); panel.focus(); return; }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  function open() {
    if (isOpen) return;
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', open, { once: true });
      return;
    }
    createModal();
    priorFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    overlay.hidden = false;
    isOpen = true;
    panel.scrollTop = 0;
    document.addEventListener('keydown', onKeyDown);
    const closeButton = panel.querySelector('.e2060s4-close');
    if (closeButton) closeButton.focus();
  }

  function close() {
    if (!isOpen) return;
    overlay.hidden = true;
    isOpen = false;
    document.removeEventListener('keydown', onKeyDown);
    document.body.style.overflow = previousOverflow;
    if (priorFocus && typeof priorFocus.focus === 'function' && priorFocus.isConnected) priorFocus.focus();
    priorFocus = null;
  }

  // Public API: only a small integration hook needs to be added to the existing site.
  window.EDUC2060Step4 = Object.freeze({ open, close });
})();
