(() => {
  'use strict';

  const root = document.documentElement;
  const themeToggles = [...document.querySelectorAll('[data-eh-theme-toggle]')];
  const darkPreference = window.matchMedia('(prefers-color-scheme: dark)');

  const syncThemeToggles = () => {
    const isDark = root.classList.contains('dark');

    themeToggles.forEach((toggle) => {
      const label = isDark ? toggle.dataset.labelLight : toggle.dataset.labelDark;
      toggle.setAttribute('aria-pressed', String(isDark));
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
    });
  };

  const applyTheme = (theme) => {
    if (typeof window.setTheme === 'function') {
      window.setTheme(theme);
    } else {
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      root.style.colorScheme = theme;
    }

    try {
      localStorage.setItem('color-theme', theme);
    } catch (_) {
      // The toggle still works when storage is unavailable.
    }

    syncThemeToggles();
  };

  themeToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      applyTheme(root.classList.contains('dark') ? 'light' : 'dark');
    });
  });

  darkPreference.addEventListener?.('change', () => {
    let storedTheme = null;

    try {
      storedTheme = localStorage.getItem('color-theme');
    } catch (_) {
      // Keep the current resolved theme when storage is unavailable.
    }

    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      window.requestAnimationFrame(syncThemeToggles);
    }
  });

  syncThemeToggles();

  const header = document.querySelector('.hextra-nav-container');
  if (!header) return;

  let lastScrollY = Math.max(window.scrollY, 0);
  let scrollFrame = null;
  const hideProgress = 0.12;

  const updateHeader = () => {
    const scrollY = Math.max(window.scrollY, 0);
    const scrollDelta = scrollY - lastScrollY;
    const scrollRange = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      0
    );
    const hideThreshold = Math.max(
      header.offsetHeight + 24,
      scrollRange * hideProgress
    );
    const menuIsOpen = Boolean(
      header.querySelector('[aria-expanded="true"]')
    );
    const mustStayVisible = scrollY <= hideThreshold
      || menuIsOpen
      || header.matches(':focus-within');

    header.classList.toggle('is-scrolled', scrollY > 8);

    if (mustStayVisible || scrollDelta < -6) {
      header.classList.remove('is-hidden');
    } else if (scrollDelta > 6) {
      header.classList.add('is-hidden');
    }

    if (Math.abs(scrollDelta) > 6 || scrollY <= hideThreshold) {
      lastScrollY = scrollY;
    }
  };

  const requestHeaderUpdate = () => {
    if (scrollFrame !== null) return;

    scrollFrame = window.requestAnimationFrame(() => {
      updateHeader();
      scrollFrame = null;
    });
  };

  header.addEventListener('focusin', () => {
    header.classList.remove('is-hidden');
  });

  window.addEventListener('resize', () => {
    header.classList.remove('is-hidden');
    lastScrollY = Math.max(window.scrollY, 0);
    updateHeader();
  }, { passive: true });

  updateHeader();
  window.addEventListener('scroll', requestHeaderUpdate, { passive: true });
})();
