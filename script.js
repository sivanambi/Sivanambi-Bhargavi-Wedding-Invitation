document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // COUNTDOWNS
  // ==========================================

  const countdowns = document.querySelectorAll(".countdown");

  function updateCountdown(countdown) {
    const targetDate = new Date(
      countdown.dataset.target
    ).getTime();

    const now = Date.now();
    const difference = targetDate - now;

    const days = countdown.querySelector("[data-days]");
    const hours = countdown.querySelector("[data-hours]");
    const minutes = countdown.querySelector("[data-minutes]");
    const seconds = countdown.querySelector("[data-seconds]");

    if (difference <= 0) {
      days.textContent = "00";
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";
      return;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const d = Math.floor(totalSeconds / 86400);
    const h = Math.floor((totalSeconds % 86400) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    days.textContent = String(d).padStart(2, "0");
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");
  }

  function updateAllCountdowns() {
    countdowns.forEach(updateCountdown);
  }

  updateAllCountdowns();
  setInterval(updateAllCountdowns, 1000);


  // ==========================================
  // WEDDING MUSIC
  // ==========================================

  const music = document.getElementById("weddingMusic");
  const musicToggle = document.getElementById("musicToggle");
  const openInvitation = document.getElementById("openInvitation");

  let musicPlaying = false;


  function updateMusicButton() {
    if (!musicToggle) return;

    musicToggle.textContent = musicPlaying ? "♫" : "♪";

    musicToggle.setAttribute(
      "aria-label",
      musicPlaying ? "Pause music" : "Play music"
    );
  }


  // ------------------------------------------
  // OPEN INVITATION → START MUSIC
  // ------------------------------------------

  if (openInvitation && music) {

    openInvitation.addEventListener("click", () => {

      music.play()
        .then(() => {
          musicPlaying = true;
          updateMusicButton();
        })
        .catch((error) => {
          console.log("Music could not start:", error);
        });

    });

  }


  // ------------------------------------------
  // FLOATING MUSIC BUTTON
  // ------------------------------------------

  if (musicToggle && music) {

    musicToggle.addEventListener("click", () => {

      if (musicPlaying) {

        music.pause();
        musicPlaying = false;

      } else {

        music.play()
          .then(() => {
            musicPlaying = true;
            updateMusicButton();
          })
          .catch((error) => {
            console.log("Music could not start:", error);
          });

        return;
      }

      updateMusicButton();

    });

  }

  updateMusicButton();


  // ==========================================
  // SMOOTH SCROLLING
  // ==========================================

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  // ==========================================
  // BACK TO TOP
  // ==========================================

  document.querySelectorAll('a[href="#top"]').forEach(link => {

    link.addEventListener("click", event => {

      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  });

});
