(function () {
    /** Video play/pause functionality */
    const pauseButtons = document.querySelectorAll(".aa-online-video-card-controls__button--pause");
    const playButtons = document.querySelectorAll(".aa-online-video-card-controls__button--play");
    const videos = document.querySelectorAll("video.aa-online-video-card");

    pauseButtons.forEach((pauseButton, index) => {
        pauseButton.classList.add("hidden");
        pauseButton.addEventListener("click", function () {
            const video = videos[index];
            video.pause();
            pauseButton.classList.add("hidden");
            const playButton = playButtons[index];
            playButton.classList.remove("hidden");
        });
    });

    playButtons.forEach((playButton, index) => {
        playButton.addEventListener("click", function () {
            const video = videos[index];
            video.play();
            playButton.classList.add("hidden");
            const pauseButton = pauseButtons[index];
            pauseButton.classList.remove("hidden");
        });
    });

    /** Update footer year */
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
})();