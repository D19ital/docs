(() => {
  const triggerSelector = "[data-layout-lightbox]";

  if (!document.querySelector(triggerSelector)) return;

  const modal = document.createElement("div");
  modal.className = "layout-lightbox-modal";
  modal.hidden = true;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <button class="layout-lightbox-modal__close" type="button" data-layout-lightbox-close>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M5 5l14 14"></path>
        <path d="M19 5L5 19"></path>
      </svg>
    </button>
    <div class="layout-lightbox-modal__viewport" data-layout-lightbox-viewport>
      <img class="layout-lightbox-modal__image" data-layout-lightbox-image alt="" role="button" tabindex="0">
    </div>
  `;

  document.body.append(modal);

  const closeButton = modal.querySelector("[data-layout-lightbox-close]");
  const viewport = modal.querySelector("[data-layout-lightbox-viewport]");
  const image = modal.querySelector("[data-layout-lightbox-image]");
  let activeTrigger = null;
  let zoomInLabel = "";
  let zoomOutLabel = "";

  const setZoom = (zoomed, pointerEvent) => {
    let horizontalRatio = 0.5;
    let verticalRatio = 0.5;

    if (zoomed && pointerEvent) {
      const imageRect = image.getBoundingClientRect();
      horizontalRatio = (pointerEvent.clientX - imageRect.left) / imageRect.width;
      verticalRatio = (pointerEvent.clientY - imageRect.top) / imageRect.height;
    }

    modal.classList.toggle("is-zoomed", zoomed);
    image.setAttribute("aria-label", zoomed ? zoomOutLabel : zoomInLabel);

    if (!zoomed) {
      viewport.scrollTo({ left: 0, top: 0 });
      return;
    }

    requestAnimationFrame(() => {
      viewport.scrollLeft = horizontalRatio * image.scrollWidth - viewport.clientWidth / 2;
      viewport.scrollTop = verticalRatio * image.scrollHeight - viewport.clientHeight / 2;
    });
  };

  const close = () => {
    if (modal.hidden) return;

    modal.hidden = true;
    modal.classList.remove("is-zoomed");
    document.documentElement.classList.remove("layout-lightbox-open");
    image.removeAttribute("src");

    const triggerToFocus = activeTrigger;
    activeTrigger = null;
    triggerToFocus?.focus();
  };

  const open = (trigger) => {
    const thumbnail = trigger.querySelector("img");
    activeTrigger = trigger;
    zoomInLabel = trigger.dataset.layoutLightboxZoomInLabel;
    zoomOutLabel = trigger.dataset.layoutLightboxZoomOutLabel;

    modal.setAttribute("aria-label", trigger.dataset.layoutLightboxDialogLabel);
    closeButton.setAttribute("aria-label", trigger.dataset.layoutLightboxCloseLabel);
    image.src = trigger.href;
    image.alt = thumbnail?.alt ?? "";
    modal.hidden = false;
    document.documentElement.classList.add("layout-lightbox-open");
    setZoom(false);
    closeButton.focus();
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(triggerSelector);

    if (!trigger) return;

    event.preventDefault();
    open(trigger);
  });

  closeButton.addEventListener("click", close);

  viewport.addEventListener("click", (event) => {
    if (event.target === viewport) close();
  });

  image.addEventListener("click", (event) => {
    setZoom(!modal.classList.contains("is-zoomed"), event);
  });

  image.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    setZoom(!modal.classList.contains("is-zoomed"));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) close();
  });
})();
