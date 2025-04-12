document.addEventListener("DOMContentLoaded", () => {
  const notes = [
    "A#4", "A#5", "A4", "A5", "B4", "B5", "C#4", "C#5", "C#6", "C4", "C5", "C6",
    "D#4", "D#5", "D#6", "D4", "D5", "D6", "E4", "E5", "E6", "F#4", "F#5", "F#6",
    "F4", "G#4", "G#5", "G4", "G5", "G6"
  ];

  const preloadNotes = () => {
    const instruments = ["piano", "celesta"];
    instruments.forEach((instrument) => {
      notes.forEach((note) => {
        const encodedNote = note.replace("#", "%23");
        const notePath = instrument === "piano" 
          ? `./notes/${encodedNote}.mp3` 
          : `./notes celesta/${encodedNote}.wav`;
        const audio = new Audio(notePath);
        audio.volume = 0.0001;
        audio.play().catch(() => {
        });
      });
    });
  };

  preloadNotes();
});