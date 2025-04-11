//клава (кока)
let activeKeys = {};

document.addEventListener("keydown", (event) => {

  if (activeKeys[event.code]) return false; //блокування тих самих нот

  keys.forEach((key) => {
    const dataCode = key.getAttribute("data-code");
    const altdataCode = key.getAttribute("alternative-data-code");

    if (event.code === dataCode || event.code === altdataCode) {
      const note = key.getAttribute("data-note");

      var instrumentSelector = document.getElementById("instrument");
      var selectedInstrument = instrumentSelector.value;

      let noteSoundChosen;
      if (selectedInstrument === "piano") {
        noteSoundChosen = `./notes/${note}.mp3`;
      }
      if (selectedInstrument === "celesta") {
        noteSoundChosen = `./notes celesta/${note}.wav`;
      }

      const noteSound = new Audio(noteSoundChosen);
      noteSound.volume = volumeSlider.value / 100;
      noteSound.play();

      activeKeys[event.code] = noteSound;

      key.classList.add("active");
      console.log("keyboard touch");
    }
  });
});

document.addEventListener("keyup", function(event) {

  if (activeKeys[event.code]) {
    fadeOutAudio(activeKeys[event.code]);

    delete activeKeys[event.code];

    let keyElement = document.querySelector('[data-code="' + event.code + '"]') 
    || document.querySelector('[alternative-data-code="' + event.code + '"]');

    if (keyElement !== null) {
      keyElement.classList.remove("active");
    }
    console.log("keyboard up");
  }
});
