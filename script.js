window.addEventListener('load', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

const musicToggle = document.querySelector('.music-toggle');
let musicPlaying = false;
let audio = new Audio('audio/t.mp3'); // Ensure this path is correct relative to your HTML file.

musicToggle.addEventListener('click', () => {
    if (musicPlaying) {
        audio.pause();
        musicToggle.textContent = 'Play Music';
    } else {
        audio.play();
        musicToggle.textContent = 'Pause Music';
    }
    musicPlaying = !musicPlaying;
});