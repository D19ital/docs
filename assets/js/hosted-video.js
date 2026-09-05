(() => {
  document.querySelectorAll("[data-hosted-video]").forEach((root) => {
    const viewport = root.querySelector("[data-hosted-video-viewport]");
    const playButton = root.querySelector("[data-hosted-video-play]");
    const sourceButtons = [...root.querySelectorAll("[data-hosted-video-source]")];
    const status = root.querySelector("[data-hosted-video-status]");
    let source = root.dataset.defaultSource === "youtube" ? "youtube" : "vk";
    let loaded = false;

    const providerLabel = () => (source === "youtube" ? root.dataset.youtubeLabel : root.dataset.vkLabel);
    const sourceUrl = () => (source === "youtube" ? root.dataset.youtubeSrc : root.dataset.vkSrc);
    const playLabel = () => (source === "youtube" ? root.dataset.youtubePlayLabel : root.dataset.vkPlayLabel);
    const statusText = () => (source === "youtube" ? root.dataset.youtubeStatus : root.dataset.vkStatus);

    const updateSourceControls = () => {
      sourceButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.hostedVideoSource === source));
      });
      playButton?.setAttribute("aria-label", playLabel());
    };

    const loadPlayer = (moveFocus = false) => {
      const iframe = document.createElement("iframe");
      iframe.className = "hosted-video__frame";
      iframe.src = sourceUrl();
      iframe.title = `${root.dataset.videoTitle} — ${providerLabel()}`;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.setAttribute("allowfullscreen", "");

      viewport.replaceChildren(iframe);
      root.classList.add("is-loaded");
      status.textContent = statusText();
      loaded = true;

      if (moveFocus) requestAnimationFrame(() => iframe.focus());
    };

    sourceButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const nextSource = button.dataset.hostedVideoSource;
        if (nextSource === source) return;

        source = nextSource;
        updateSourceControls();
        if (loaded) loadPlayer();
      });
    });

    playButton.addEventListener("click", () => loadPlayer(true));
    updateSourceControls();
  });
})();
