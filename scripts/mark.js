document.addEventListener("DOMContentLoaded", () => { //без цього чогось не працює, хз
  const markButton = document.getElementById("toggleMark");
  let isRecording = false;
  const recordedNotes = [];

  const playButton = document.getElementById("playButton");
  playButton.style.display = "none";
  const controls2 = document.querySelector(".controls2");

  const clearButton = document.getElementById("clearButton");
  clearButton.style.display = "none";

  markButton.addEventListener("click", () => {
    if (isRecording === false) {
      isRecording = true;
      markButton.style.backgroundColor = "#4e4e4e";

      const script = document.querySelector('script[src="./scripts/keyboard.js"]');
      if (script) {
        script.remove();
      }
    } else {
      isRecording = false;
      markButton.style.backgroundColor = "#8f8f8f";
      playButton.style.display = "none";
      clearButton.style.display = "none";
      controls2.style.marginRight = "663px";
      recordedNotes.length = 0;

      document.querySelectorAll(".key").forEach((key) => {
        key.classList.remove("selected")
      });
    }

    if (isRecording && recordedNotes.length > 0) {
      clearButton.style.display = "block";
      playButton.style.display = "block";
      controls2.style.marginRight = "571px";
    }
  });

  playButton.addEventListener("click", () => {
    if (recordedNotes.length > 0) {
      var instrumentSelector = document.getElementById("instrument");
      var selectedInstrument = instrumentSelector.value;

      recordedNotes.forEach((note) => {
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

        var keys = document.querySelectorAll(".key");
        keys.forEach((key) => {
          if (key.dataset.note === note) {
            key.classList.add("active");
            setTimeout(() => {
              key.classList.remove("active");
            }, 500);
          }
        });
      });
    }
  });

  document.querySelectorAll(".key").forEach((key) => {
    const note = key.dataset.note;

    key.addEventListener("click", () => {
      if (isRecording) {
        recordedNotes.push(note);
        key.classList.add("selected");
      } 

      if (recordedNotes.length > 0 && isRecording) {
        playButton.style.display = "block";
        clearButton.style.display = "block";
        controls2.style.marginRight = "451px";
      }
    });
  });

  clearButton.addEventListener("click", () => {
    if (recordedNotes.length > 0) {
      recordedNotes.length = 0;

      document.querySelectorAll(".key").forEach((key) => {
        key.classList.remove("selected")
      });
    }
  });

  //клавіатура
  let activeKeys = {};

  document.addEventListener("keydown", (event) => {
    if (activeKeys[event.code]) return false;

    document.querySelectorAll(".key").forEach((key) => {
      const dataCode = key.getAttribute("data-code");
      const altdataCode = key.getAttribute("alternative-data-code");

      if (event.code === dataCode || event.code === altdataCode) {
        const note = key.getAttribute("data-note");

        if (isRecording) {
          recordedNotes.push(note);
          key.classList.add("selected");
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

        const noteSound = new Audio(noteSoundChosen);
        noteSound.volume = volumeSlider.value / 100;
        noteSound.play();

        activeKeys[event.code] = noteSound;

        key.classList.add("active");
        console.log("keyboard down, key: " + decodeURIComponent(note));
      }
    });

    if (isRecording && recordedNotes.length > 0) {
      clearButton.style.display = "block";
      playButton.style.display = "block";
      controls2.style.marginRight = "451px";
    }
  });

  document.addEventListener("keyup", (event) => {
    if (activeKeys[event.code]) {
      fadeOutAudio(activeKeys[event.code]);

      delete activeKeys[event.code];

      let keyElement =
        document.querySelector('[data-code="' + event.code + '"]') ||
        document.querySelector('[alternative-data-code="' + event.code + '"]');

      if (keyElement !== null) {
        keyElement.classList.remove("active");
      }
      console.log("keyboard up");
    }
  });
});
