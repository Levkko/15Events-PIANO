//клава (кока)
let activeKeys = {};

document.addEventListener("keydown", (event) => {
  const pressedKey = event.code;

  if (activeKeys[pressedKey]) return false; //блокування тих самих нот

  keys.forEach((key) => {
    const dataCode = key.getAttribute("data-code");
    const altdataCode = key.getAttribute("alternative-data-code");

    if (pressedKey === dataCode || pressedKey === altdataCode) {
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

      activeKeys[pressedKey] = [noteSound];

      key.classList.add("active");
      console.log("keyboard touch");
    }
  });
});

document.addEventListener("keyup", (event) => {
  let keyCode = event.code;

  if (activeKeys[keyCode]) {
    let sounds = activeKeys[keyCode];

    for (let i = 0; i < sounds.length; i++) {
      let sound = sounds[i];
      fadeOutAudio(sound);
    }

    delete activeKeys[keyCode];

    let keyElement = document.querySelector('[data-code="' + keyCode + '"], [alternative-data-code="' + keyCode + '"]');
    
    keyElement.classList.remove("active");
    console.log("keyboard up");
  }
});
