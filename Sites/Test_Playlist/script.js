const tracks = document.querySelectorAll('.track');

tracks.forEach((track, index) => {
  const playButton = track.querySelector('.play-button');
  const progressBar = track.querySelector('.progress-bar .progress');
  const audio = track.querySelector('audio');

  let isPlaying = false;

  playButton.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playButton.classList.remove('pause');
    } else {
      tracks.forEach((otherTrack) => {
        const otherAudio = otherTrack.querySelector('audio');
        const otherButton = otherTrack.querySelector('.play-button');
        if (otherAudio !== audio) {
          otherAudio.pause();
          otherAudio.currentTime = 0;
          otherButton.classList.remove('pause');
        }
      });
      audio.play();
      playButton.classList.add('pause');
    }
    isPlaying = !isPlaying;
  });

  audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
  });

  audio.addEventListener('ended', () => {
    playButton.classList.remove('pause');
    progressBar.style.width = '0%';
    isPlaying = false;
  });
});