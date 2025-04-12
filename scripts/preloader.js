//щоб не було затримки
const preloadNotes = () => {
    const instruments = ["piano", "celesta"];
    const notes = [
      "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
      "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
      "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6"
    ];
  
    instruments.forEach((instrument) => {
      notes.forEach((note) => {
        let notePath;
        if (instrument === "piano") {
          notePath = `./notes/${note}.mp3`;
        } else {
          notePath = `./notes celesta/${note}.wav`;
        }
        const audio = new Audio(notePath);
        audio.load();
      });
    });
  };
  
  document.addEventListener("DOMContentLoaded", preloadNotes);