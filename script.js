console.log('XStream Player v3 Loaded');
const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause');

playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = '⏸️ Pause';
  } else {
    video.pause();
    playPauseBtn.textContent = '▶️ Play';
  }
});

// Placeholder: File buttons will load sample videos
document.querySelectorAll('.file-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Example: Replace this with actual file source loading
    const sampleSources = {
      'Sample Video 1': 'https://www.w3schools.com/html/mov_bbb.mp4',
      'Sample Video 2': 'https://www.w3schools.com/html/movie.mp4',
    };
    const videoSrc = sampleSources[btn.textContent] || '';
    if (videoSrc) {
      video.src = videoSrc;
      video.play();
      playPauseBtn.textContent = '⏸️ Pause';
    }
  });
});
