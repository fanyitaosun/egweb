(function () {
  const STORAGE_KEY = 'tam_language_preference';
  const htmlEl = document.documentElement;

  const emitLanguageChange = (lang) => {
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
  };

  const updateLanguageAttributes = (lang) => {
    const normalized = lang === 'zh' ? 'zh' : 'en';
    htmlEl.setAttribute('data-language', normalized);
    htmlEl.lang = normalized === 'zh' ? 'zh-Hans' : 'en';

    document.querySelectorAll('[data-i18n-en]').forEach((node) => {
      const content = node.getAttribute(normalized === 'zh' ? 'data-i18n-zh' : 'data-i18n-en');
      if (content !== null) {
        if (node.tagName.toLowerCase() === 'title' || node.tagName.toLowerCase() === 'meta') {
          if (node.tagName.toLowerCase() === 'title') {
            document.title = content;
          } else if (node.hasAttribute('content')) {
            node.setAttribute('content', content);
          }
        } else {
          node.innerHTML = content;
        }
      }
    });

    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang-toggle') === normalized;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  };

  const setLanguage = (lang) => {
    const normalized = lang === 'zh' ? 'zh' : 'en';
    localStorage.setItem(STORAGE_KEY, normalized);
    updateLanguageAttributes(normalized);
    emitLanguageChange(normalized);
  };

  const init = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initial = saved === 'zh' ? 'zh' : 'en';
    updateLanguageAttributes(initial);
    emitLanguageChange(initial);
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-lang-toggle]');
    if (!trigger) return;
    event.preventDefault();
    setLanguage(trigger.getAttribute('data-lang-toggle'));
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
