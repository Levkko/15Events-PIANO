const hideButton = document.getElementById("toggleSymbols");
const keyLabels = document.querySelectorAll(".key-label");
const noteNames = document.querySelectorAll(".note-name");

hideButton.addEventListener("click", function() {
  keyLabels.forEach((label) => {
    label.classList.toggle("hidden");
  });
  noteNames.forEach((note) => {
    note.classList.toggle("hidden");
  });
});