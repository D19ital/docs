(() => {
  'use strict';

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
