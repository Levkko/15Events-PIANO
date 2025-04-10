//Клавіатура
var keys = document.querySelectorAll(".key");

document.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toLowerCase();

  keys.forEach((key) => {
    let noteSound;
    const keyAttribute = (
      key.getAttribute("data-key") || key.getAttribute("alternative-data-key")
    ).toLowerCase();

    if (pressedKey === keyAttribute) {
      const note = key.getAttribute("data-note");


      if (currentNoteSound) {
        currentNoteSound.pause();
        currentNoteSound.currentTime = 0;
    } 

      noteSound = new Audio(`./notes/${note}.mp3`);
      noteSound.play();

      currentNoteSound = noteSound; 
      
      key.classList.add('active');
      console.log("keyboard touch");
    }

    document.addEventListener("keyup", () => {
      if (noteSound) {
        noteSound.pause();
        key.classList.remove('active');
        console.log("keyboard up");
      }
    });
  });
});
//-----------------
