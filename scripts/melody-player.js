function playNote(note, time) {
  setTimeout(() => {
    const element = document.querySelector(`[data-note="${note}"]`);
    element.classList.add("active");

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
    
    setTimeout(() => {
      element.classList.remove("active");
    }, 300);
  }, time);
}

function playNotes() {
  const melody = [
    { note: "E6", time: 0 },
    { note: "E6", time: 900 },
    { note: "E6", time: 1200 },
    { note: "D6", time: 1500 },
    { note: "E6", time: 1800 },
    { note: "F6", time: 2100 },
    { note: "G6", time: 2400 },
    { note: "F6", time: 3300 },
    { note: "E6", time: 3600 },
    { note: "D6", time: 4200 },
    { note: "C6", time: 4800 },
    { note: "E6", time: 5400 },
    { note: "B5", time: 6000 },
    { note: "E6", time: 6600 },
    { note: "A5", time: 7200 },
    { note: "B5", time: 8100 },
    { note: "C6", time: 8400 },
    { note: "D6", time: 9000 },
    //2 частина
    { note: "E6", time: 9600 },
    { note: "E6", time: 10500 },
    { note: "E6", time: 10800 },
    { note: "D6", time: 11100 },
    { note: "E6", time: 11400 },
    { note: "F6", time: 11700 },
    { note: "G6", time: 12000 },
    { note: "F6", time: 12900 },
    { note: "E6", time: 13200 },
    { note: "D6", time: 13800 },
    { note: "C6", time: 14400 },
    { note: "E6", time: 15000 },
    { note: "B5", time: 15600 },
    { note: "E6", time: 16200 },
    { note: "A5", time: 16800 },
    { note: "A5", time: 18000 },
    //акорди перша частина
    { note: "C4", time: 0 },
    { note: "G4", time: 600 },
    { note: "C5", time: 600 },
    { note: "E5", time: 600 },
    { note: "C4", time: 1200 },
    { note: "G4", time: 1800 },
    { note: "C5", time: 1800 },
    { note: "E5", time: 1800 },
    { note: "G4", time: 2400 },
    { note: "D5", time: 3000 },
    { note: "G5", time: 3000 },
    { note: "B5", time: 3000 },
    { note: "G4", time: 3600 },
    { note: "D5", time: 3600 },
    { note: "E4", time: 4200 },
    { note: "G%234", time: 4200 },
    { note: "B4", time: 4200 },
    { note: "E5", time: 4200 },
    { note: "E4", time: 4800 },
    { note: "A4", time: 5100 },
    { note: "C5", time: 5400 },
    { note: "E5", time: 5700 },
    { note: "E4", time: 6000 },
    { note: "G%234", time: 6300 },
    { note: "B4", time: 6600 },
    { note: "E5", time: 6900 },
    { note: "A4", time: 7200 },
    { note: "E5", time: 7500 },
    { note: "A5", time: 7800 },
    { note: "E5", time: 8100 },
    { note: "A4", time: 8400 },
    { note: "E5", time: 8400 },
    { note: "A5", time: 8400 },
    { note: "E5", time: 8400 },
    { note: "G4", time: 9000 },
    { note: "D5", time: 9000 },
    { note: "G5", time: 9000 },
    { note: "B5", time: 9000 },
    //бас друга частина
    { note: "C4", time: 9600 },
    { note: "G4", time: 10200 },
    { note: "C5", time: 10200 },
    { note: "E5", time: 10200 },
    { note: "C4", time: 10800 },
    { note: "G4", time: 11400 },
    { note: "C5", time: 11400 },
    { note: "E5", time: 11400 },
    { note: "G4", time: 12000 },
    { note: "D5", time: 12600 },
    { note: "G5", time: 12600 },
    { note: "B5", time: 12600 },
    { note: "G4", time: 13200 },
    { note: "D5", time: 13200 },
    { note: "E4", time: 13800 }, //ді
    { note: "G%234", time: 13800 },
    { note: "B4", time: 13800 },
    { note: "E5", time: 13800 }, //ї
    { note: "E4", time: 14400 }, //у
    { note: "A4", time: 14700 },
    { note: "C5", time: 15000 },
    { note: "E5", time: 15300 },
    { note: "E4", time: 15600 }, //хне
    { note: "G%234", time: 15900 },
    { note: "B4", time: 16200 },
    { note: "E5", time: 16500 },
    { note: "A4", time: 16800 },
    { note: "E5", time: 17100 },
    { note: "C6", time: 17400 },
    { note: "E5", time: 17700 },
  ];

  melody.forEach(({ note, time }) => playNote(note, time));
}

document.getElementById("Play").addEventListener("click", playNotes);

//так довго це писав 😮‍💨