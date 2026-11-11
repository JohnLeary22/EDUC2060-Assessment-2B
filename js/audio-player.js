const player = document.querySelector("#narration-player");
const media = document.querySelector("#presentation-audio");
const playButton = document.querySelector("#narration-play");
const restartButton = document.querySelector("#narration-restart");
const seekSlider = document.querySelector("#narration-seek");
const elapsedLabel = document.querySelector("#narration-elapsed");
const durationLabel = document.querySelector("#narration-duration");
const statusLabel = document.querySelector("#narration-status");

if (player && media && playButton && restartButton && seekSlider) {
  let hasMetadata = false;
  let hasError = false;

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) return "--:--";
    const wholeSeconds = Math.floor(seconds);
    const minutes = Math.floor(wholeSeconds / 60);
    const remainder = String(wholeSeconds % 60).padStart(2, "0");
    return `${minutes}:${remainder}`;
  };

  const updateTime = () => {
    const duration = Number.isFinite(media.duration) ? media.duration : 0;
    const elapsed = Number.isFinite(media.currentTime) ? media.currentTime : 0;
    const safeElapsed = Math.min(elapsed, duration || elapsed);
    elapsedLabel.textContent = formatTime(safeElapsed);
    durationLabel.textContent = formatTime(duration);
    seekSlider.max = String(duration || 100);
    seekSlider.value = String(duration ? safeElapsed : 0);
    seekSlider.disabled = !hasMetadata || hasError;
    seekSlider.setAttribute(
      "aria-valuetext",
      `${formatTime(safeElapsed)} elapsed of ${duration ? formatTime(duration) : "unknown duration"}`
    );
  };

  const setPlaying = (playing) => {
    player.classList.toggle("is-playing", playing);
    playButton.setAttribute("aria-label", playing ? "Pause presentation narration" : "Play presentation narration");
    playButton.setAttribute("aria-pressed", String(playing));
  };

  const showError = () => {
    hasError = true;
    hasMetadata = false;
    setPlaying(false);
    player.classList.add("has-error");
    statusLabel.textContent = "Narration audio could not be loaded.";
    playButton.disabled = true;
    restartButton.disabled = true;
    updateTime();
  };

  const clearStatus = () => {
    player.classList.remove("has-error");
    statusLabel.textContent = "";
  };

  const setMetadataReady = () => {
    if (!Number.isFinite(media.duration)) return;
    hasMetadata = true;
    restartButton.disabled = false;
    clearStatus();
    updateTime();
  };

  media.addEventListener("loadedmetadata", setMetadataReady);
  media.addEventListener("durationchange", setMetadataReady);
  media.addEventListener("timeupdate", updateTime);
  media.addEventListener("seeked", updateTime);
  media.addEventListener("play", () => setPlaying(true));
  media.addEventListener("pause", () => setPlaying(false));
  media.addEventListener("canplay", clearStatus);
  media.addEventListener("error", showError);
  media.addEventListener("ended", () => {
    setPlaying(false);
    media.currentTime = 0;
    updateTime();
  });

  playButton.addEventListener("click", async () => {
    if (hasError) return;
    if (!media.paused) {
      media.pause();
      return;
    }
    try {
      await media.play();
    } catch {
      if (media.error) showError();
      else {
        setPlaying(false);
        statusLabel.textContent = "Playback could not start. Press Play to try again.";
        player.classList.add("has-error");
      }
    }
  });

  restartButton.addEventListener("click", () => {
    if (!hasMetadata || hasError) return;
    media.currentTime = 0;
    updateTime();
  });

  seekSlider.addEventListener("input", () => {
    if (!hasMetadata || hasError) return;
    const targetTime = Number(seekSlider.value);
    media.currentTime = targetTime;
    elapsedLabel.textContent = formatTime(targetTime);
    seekSlider.setAttribute("aria-valuetext", `${formatTime(targetTime)} elapsed of ${formatTime(media.duration)}`);
  });

  if (media.readyState >= 1) setMetadataReady();
  else updateTime();
}
