function fadeOutAudio(audio) {
    const fadeAmount = audio.volume / 20;
  
    const fade = setInterval(() => {
      if (audio.volume - fadeAmount > 0) {
        audio.volume = audio.volume - fadeAmount;
      } else {
        audio.volume = 0;
        audio.pause();
        clearInterval(fade);
      }
    }, 20);
}