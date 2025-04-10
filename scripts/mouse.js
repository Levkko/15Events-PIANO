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

    noteSound = new Audio(`./notes/${note}.mp3`);
    noteSound.play();

    currentNoteSound = noteSound; 

    key.classList.add('active');
    console.log("mouse touch");
  });

  key.addEventListener("mouseup", () => {
    if (noteSound) {
      // noteSound.pause();
      key.classList.remove('active');

      console.log("mouse up");
    }
  });

  key.addEventListener("mouseleave", () => {
    if (noteSound) {
      // noteSound.pause();
      key.classList.remove('active');

      console.log("mouse leave");
    }
  });
});
//--------------------