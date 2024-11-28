document.querySelectorAll('.audio-player').forEach((player, index) => {
    const audio = player.querySelector('audio');
    const playPauseButton = player.querySelector(`#play-pause${index + 1}`);
    const timeline = player.querySelector(`#timeline${index + 1}`);
    const volumeControl = player.querySelector(`#volume${index + 1}`);
    const likeButton = player.querySelector(`#like-button${index + 1}`);
    const likeCount = player.querySelector(`#like-count${index + 1}`);
    const playCount = player.querySelector(`#play-count${index + 1}`);
    let plays = 0;

    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = '⏸';
            plays++;
            playCount.textContent = plays;
        } else {
            audio.pause();
            playPauseButton.textContent = '▶';
        }
    });

    audio.addEventListener('timeupdate', () => {
        timeline.value = audio.currentTime;
        timeline.max = audio.duration;
    });

    timeline.addEventListener('input', () => {
        audio.currentTime = timeline.value;
    });

    volumeControl.addEventListener('input', () => {
        audio.volume = volumeControl.value;
    });

    likeButton.addEventListener('click', () => {
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });
});