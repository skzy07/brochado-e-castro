/* ====================================================
   BROCHADO & CASTRO — i18n Engine
   i18n.js — Language Dropdown + Translation System

   HOW TO ADD A NEW LANGUAGE:
   1. Add an entry to LANGUAGES below (code, flag, label).
   2. Add a data-xx="tradução" attribute to every [data-pt]
      element in each HTML file (or use a build script).
   3. Add a button to the .lang-dropdown-menu in each HTML:
        <button class="lang-option" data-lang="xx" role="option">
          <span class="lang-flag">🏳️</span> Língua
          <span class="lang-option-check">✓</span>
        </button>
   4. In script.js, add an `xx:{ ... }` block to each product
      in CATALOGO, and to PAGE_TITLES.
   That's it — the engine handles the rest automatically.
==================================================== */

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════
     LANGUAGE REGISTRY
     Add/remove languages here only.
  ══════════════════════════════════════════════════ */
  const LANGUAGES = {
    pt: { flag: '🇵🇹', label: 'PT' },
    en: { flag: '🇬🇧', label: 'EN' },
    // To add Spanish later, uncomment and add data-es attrs in HTML:
    // es: { flag: '🇪🇸', label: 'ES' },
  };

  const STORAGE_KEY = 'bcl-lang';
  const DEFAULT_LANG = 'pt';

  /* ══════════════════════════════════════════════════
     STATE
  ══════════════════════════════════════════════════ */
  let currentLang = (function () {
    const saved = localStorage.getItem(STORAGE_KEY);
    return (saved && LANGUAGES[saved]) ? saved : DEFAULT_LANG;
  })();

  /* ══════════════════════════════════════════════════
     CORE APPLY FUNCTION
     Reads data-<lang> attributes and swaps content.
  ══════════════════════════════════════════════════ */
  function applyLang(lang) {
    if (!LANGUAGES[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    /* ── Text nodes ── */
    document.querySelectorAll('[data-pt]').forEach(el => {
      const val = el.dataset[lang];
      if (val !== undefined) el.textContent = val;
    });

    /* ── Placeholders ── */
    document.querySelectorAll('[data-pt-ph]').forEach(el => {
      const val = el.dataset[lang + 'Ph'];
      if (val !== undefined) el.placeholder = val;
    });

    /* ── Sync all dropdown instances on the page ── */
    syncDropdowns(lang);

    /* ── Fire event for dynamic content (product detail, etc.) ── */
    document.dispatchEvent(new CustomEvent('bcl:langChange', { detail: { lang } }));
  }

  /* ══════════════════════════════════════════════════
     DROPDOWN UI
  ══════════════════════════════════════════════════ */
  function syncDropdowns(lang) {
    const cfg = LANGUAGES[lang];
    if (!cfg) return;

    /* Update toggle label + flag in every dropdown */
    document.querySelectorAll('.lang-flag[id]').forEach(el => {
      el.textContent = cfg.flag;
    });
    document.querySelectorAll('.lang-label[id]').forEach(el => {
      el.textContent = cfg.label;
    });

    /* Mark active option */
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function initDropdown(dropdownEl) {
    if (!dropdownEl) return;
    const toggle = dropdownEl.querySelector('.lang-dropdown-toggle');

    /* Open/close */
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownEl.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) {
        dropdownEl.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    /* Option click */
    dropdownEl.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = btn.dataset.lang;
        localStorage.setItem(STORAGE_KEY, lang);
        applyLang(lang);
        closeAllDropdowns();
      });
    });
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.lang-dropdown.open').forEach(d => {
      d.classList.remove('open');
      const t = d.querySelector('.lang-dropdown-toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  }

  /* Close on outside click or Escape */
  document.addEventListener('click', closeAllDropdowns);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllDropdowns();
  });

  /* ══════════════════════════════════════════════════
     PUBLIC API (used by script.js)
  ══════════════════════════════════════════════════ */
  window.BCL_i18n = {
    applyLang,
    getCurrentLang: () => currentLang,
    LANGUAGES,
  };

  /* ══════════════════════════════════════════════════
     BOOT
  ══════════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', function () {
    /* Init every dropdown on the page */
    document.querySelectorAll('.lang-dropdown').forEach(initDropdown);
    /* Apply saved / default language */
    applyLang(currentLang);
  });

})();
