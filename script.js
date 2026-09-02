document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // WEDDING COUNTDOWNS
  // =========================

  const events = [
    {
      id: "reception-countdown",
      date: "2026-09-12T19:00:00+05:30"
    },
    {
      id: "wedding-countdown",
      date: "2026-09-13T08:00:00+05:30"
    }
  ];

  function updateCountdown(event) {
    const container = document.getElementById(event.id);

    if (!container) return;

    const target = new Date(event.date).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      container.innerHTML = `
        <div class="countdown-finished">
          The celebration has begun ❤️
        </div>
      `;
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
      (difference / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    const dayEl = container.querySelector("[data-days]");
    const hourEl = container.querySelector("[data-hours]");
    const minuteEl = container.querySelector("[data-minutes]");
    const secondEl = container.querySelector("[data-seconds]");

    if (dayEl) dayEl.textContent = String(days).padStart(2, "0");
    if (hourEl) hourEl.textContent = String(hours).padStart(2, "0");
    if (minuteEl) minuteEl.textContent = String(minutes).padStart(2, "0");
    if (secondEl) secondEl.textContent = String(seconds).padStart(2, "0");
  }

  events.forEach(updateCountdown);

  setInterval(() => {
    events.forEach(updateCountdown);
  }, 1000);


  // =========================
  // BACKGROUND MUSIC
  // =========================

  const music = new Audio("assets/music.mp3");

  music.loop = true;
  music.volume = 0.7;

  let musicPlaying = false;

  // OPEN INVITATION BUTTON
  const openInvitation = document.querySelector(
    "#openInvitation, .open-invitation, [data-open-invitation]"
  );

  if (openInvitation) {
    openInvitation.addEventListener("click", () => {
      music.play()
        .then(() => {
          musicPlaying = true;
          updateMusicButton();
        })
        .catch(() => {
          console.log("Music playback was blocked by the browser.");
        });
    });
  }


  // =========================
  // FLOATING MUSIC BUTTON
  // =========================

  const musicButton = document.querySelector(
    "#musicButton, .music-button, [data-music-button]"
  );

  function updateMusicButton() {
    if (!musicButton) return;

    musicButton.textContent = musicPlaying ? "🔊" : "🔇";
    musicButton.setAttribute(
      "aria-label",
      musicPlaying ? "Pause music" : "Play music"
    );
  }

  if (musicButton) {
    musicButton.addEventListener("click", () => {
      if (musicPlaying) {
        music.pause();
        musicPlaying = false;
      } else {
        music.play()
          .then(() => {
            musicPlaying = true;
          })
          .catch(() => {
            console.log("Music playback was blocked.");
          });
      }

      updateMusicButton();
    });
  }

  updateMusicButton();


  // =========================
  // SMOOTH SCROLL
  // =========================

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // =========================
  // BACK TO TOP
  // =========================

  const backToTop = document.querySelector(
    "#backToTop, .back-to-top, [data-back-to-top]"
  );

  if (backToTop) {
    backToTop.addEventListener("click", event => {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
