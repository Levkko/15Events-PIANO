//Мишка
var keys = document.querySelectorAll(".key");
let currentNoteSound;

keys.forEach((key) => {
  let noteSound;

  key.addEventListener("mousedown", () => {
    var note = key.getAttribute("data-note");

    if (currentNoteSound) {
      currentNoteSound.pause();
      currentNoteSound.currentTime = 0;
    }

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
      noteSound.volume = volumeSlider.value / 100; //цю властивість в ChatGPT дізнався
    }
    if (selectedInstrument === "celesta") {
      noteSound.volume = volumeSlider.value / 100;
    }

    noteSound.play();

    currentNoteSound = noteSound;

    key.classList.add("active");
    console.log("mouse touch");
  });

  key.addEventListener("mouseup", () => {
    if (noteSound) {
      // noteSound.pause();
      key.classList.remove("active");

      console.log("mouse up");
    }
  });

  key.addEventListener("mouseleave", () => {
    if (noteSound) {
      // noteSound.pause();
      key.classList.remove("active");

      console.log("mouse leave");
    }
  });
});
//--------------------
