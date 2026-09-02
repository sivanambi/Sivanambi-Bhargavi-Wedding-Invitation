(() => {
  const countdowns = document.querySelectorAll(".countdown");

  function updateCountdown(el) {
    const target = new Date(el.dataset.target).getTime();
    const now = Date.now();
    let diff = target - now;

    if (diff <= 0) {
      el.querySelector("[data-days]").textContent = "00";
      el.querySelector("[data-hours]").textContent = "00";
      el.querySelector("[data-minutes]").textContent = "00";
      el.querySelector("[data-seconds]").textContent = "00";
      return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(diff / day);
    diff %= day;
    const hours = Math.floor(diff / hour);
    diff %= hour;
    const minutes = Math.floor(diff / minute);
    diff %= minute;
    const seconds = Math.floor(diff / second);

    el.querySelector("[data-days]").textContent = String(days).padStart(2, "0");
    el.querySelector("[data-hours]").textContent = String(hours).padStart(2, "0");
    el.querySelector("[data-minutes]").textContent = String(minutes).padStart(2, "0");
    el.querySelector("[data-seconds]").textContent = String(seconds).padStart(2, "0");
  }

  function tick() {
    countdowns.forEach(updateCountdown);
  }
  tick();
  setInterval(tick, 1000);

  // The original design has a floating music control.
  // Add assets/music.mp3 if you want background music; the button fails gracefully
  // when no audio file is present.
  const toggle = document.getElementById("musicToggle");
  const audio = document.getElementById("weddingMusic");

  toggle.addEventListener("click", async () => {
    if (!audio.src) {
      alert("Add your music file as assets/music.mp3 to enable the music button.");
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();
        toggle.classList.add("is-playing");
      } else {
        audio.pause();
        toggle.classList.remove("is-playing");
      }
    } catch {
      alert("Tap the music button again after allowing audio playback.");
    }
  });
})();
