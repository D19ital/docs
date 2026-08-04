(() => {
  const triggerSelector = "[data-video-lightbox]";

  if (!document.querySelector(triggerSelector)) return;

  const modal = document.createElement("div");
  modal.className = "video-lightbox-modal";
  modal.hidden = true;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <button class="video-lightbox-modal__close" type="button" data-video-lightbox-close>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M5 5l14 14"></path>
        <path d="M19 5L5 19"></path>
      </svg>
    </button>
    <div class="video-lightbox-modal__viewport" data-video-lightbox-viewport>
      <video class="video-lightbox-modal__video" controls playsinline data-video-lightbox-video></video>
    </div>
  `;

  document.body.append(modal);

  const closeButton = modal.querySelector("[data-video-lightbox-close]");
  const viewport = modal.querySelector("[data-video-lightbox-viewport]");
  const video = modal.querySelector("[data-video-lightbox-video]");
  let activeTrigger = null;
  let inlineVideo = null;

  const close = () => {
    if (modal.hidden) return;

    video.pause();
    video.removeAttribute("src");
    video.load();
    modal.hidden = true;
    document.documentElement.classList.remove("video-lightbox-open");

    const triggerToFocus = activeTrigger;
    const videoToResume = inlineVideo;
    activeTrigger = null;
    inlineVideo = null;

    if (videoToResume?.autoplay) videoToResume.play().catch(() => {});
    triggerToFocus?.focus();
  };

  const open = (trigger) => {
    activeTrigger = trigger;
    inlineVideo = trigger.querySelector("video");
    inlineVideo?.pause();

    modal.setAttribute("aria-label", trigger.dataset.videoLightboxDialogLabel);
    closeButton.setAttribute("aria-label", trigger.dataset.videoLightboxCloseLabel);
    video.loop = trigger.dataset.videoLightboxLoop === "true";
    video.muted = trigger.dataset.videoLightboxMuted === "true";
    video.src = trigger.dataset.videoLightboxSrc;
    modal.hidden = false;
    document.documentElement.classList.add("video-lightbox-open");
    closeButton.focus();

    if (trigger.dataset.videoLightboxAutoplay === "true") {
      video.play().catch(() => {});
    }
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(triggerSelector);

    if (!trigger) return;

    open(trigger);
  });

  closeButton.addEventListener("click", close);

  viewport.addEventListener("click", (event) => {
    if (event.target === viewport) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) close();
  });
})();
