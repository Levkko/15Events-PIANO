//Мишка
var keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  let noteSound;

  key.addEventListener("mousedown", () => {
    var note = key.getAttribute("data-note");
    noteSound = new Audio(`./notes/${note}.mp3`);
    noteSound.play();

    console.log("mouse touch");
  });

  key.addEventListener("mouseup", () => {
    if (noteSound) {
      noteSound.pause();
    }
  });
});
//--------------------