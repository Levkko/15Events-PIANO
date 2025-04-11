//Клавіатура
var keys = document.querySelectorAll(".key");
let noteSound;
var activeKey;

document.addEventListener("keydown", (event) => {
  const pressedKey = event.code;

  keys.forEach((key) => {
    const dataCode = key.getAttribute("data-code");
    const altdataCode = key.getAttribute("alternative-data-code");

    if (pressedKey === dataCode || pressedKey === altdataCode) {
      const note = key.getAttribute("data-note");

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
        noteSound.volume = volumeSlider.value / 100; //цю властивість (.volume) в ChatGPT дізнався
      }
      if (selectedInstrument === "celesta") {
        noteSound.volume = volumeSlider.value / 100;
      }

      noteSound.play();

      currentNoteSound = noteSound;

      key.classList.add("active");
      activeKey = key;
      console.log("keyboard touch");
    }
  });
});
document.addEventListener("keyup", () => {
  if (activeKey) {
    // noteSound.pause();
    activeKey.classList.remove("active");
    console.log("keyboard up");
  }
});
//-----------------
