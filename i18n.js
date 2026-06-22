/* ====================================================
   BROCHADO & CASTRO — i18n Engine
   Language Inline Switcher + Translation System
==================================================== */

(function () {
  'use strict';

  const LANGUAGES = {
    pt: { label: 'PT' },
    en: { label: 'EN' },
  };

  const STORAGE_KEY = 'bcl-lang';
  const DEFAULT_LANG = 'pt';

  let currentLang = (function () {
    const saved = localStorage.getItem(STORAGE_KEY);
    return (saved && LANGUAGES[saved]) ? saved : DEFAULT_LANG;
  })();

  function applyLang(lang) {
    if (!LANGUAGES[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    /* Text nodes */
    document.querySelectorAll('[data-pt]').forEach(el => {
      const val = el.dataset[lang];
      if (val !== undefined) el.innerHTML = val;
    });

    /* Placeholders */
    document.querySelectorAll('[data-pt-ph]').forEach(el => {
      const val = el.dataset[lang + 'Ph'];
      if (val !== undefined) el.placeholder = val;
    });

    /* Select options */
    document.querySelectorAll('select option[data-pt]').forEach(opt => {
      const val = opt.dataset[lang];
      if (val !== undefined) opt.textContent = val;
    });

    /* Sync inline switcher buttons */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.dispatchEvent(new CustomEvent('bcl:langChange', { detail: { lang } }));
  }

  function initSwitchers() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        localStorage.setItem(STORAGE_KEY, lang);
        applyLang(lang);
      });
    });
  }

  window.BCL_i18n = {
    applyLang,
    getCurrentLang: () => currentLang,
    LANGUAGES,
  };

  document.addEventListener('DOMContentLoaded', function () {
    initSwitchers();
    applyLang(currentLang);
  });

})();
