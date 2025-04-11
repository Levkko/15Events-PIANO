//Мишка
var keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  let noteSound;

  key.addEventListener("mousedown", () => {
    var note = key.getAttribute("data-note");

    var instrumentSelector = document.getElementById("instrument");
    var selectedInstrument = instrumentSelector.value;

    let noteSoundChosen;
    if (selectedInstrument === "piano") {
      noteSoundChosen = `./notes/${note}.mp3`;
    }
    if (selectedInstrument === "celesta") {
      noteSoundChosen = `./notes celesta/${note}.wav`;
    }

    noteSound = new Audio(noteSoundChosen);
    if (selectedInstrument === "piano") {
      noteSound.volume = volumeSlider.value / 100;
    }
    if (selectedInstrument === "celesta") {
      noteSound.volume = volumeSlider.value / 100;
    }

    noteSound.play();

    key.classList.add("active");
    console.log("mouse touch");
  });

  key.addEventListener("mouseup", () => {
    if (noteSound) {
      // noteSound.pause();
      key.classList.remove("active");
      fadeOutAudio(noteSound);
      console.log("mouse up");
    }
  });

  key.addEventListener("mouseleave", () => {
    if (noteSound) {
      // noteSound.pause();
      key.classList.remove("active");
      fadeOutAudio(noteSound);
      console.log("mouse leave");
    }
  });
});
//--------------------
