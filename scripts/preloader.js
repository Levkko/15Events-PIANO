//не працює ніфіга

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
          ? `./notes-piano/${encodedNote}.wav` 
          : `./notes celesta/${encodedNote}.wav`;
        const audio = new Audio(notePath);
        audio.volume = 0.0001;
        audio.play().catch(() => {
        });
      });
    });
  };

  // Preload favicon.ico
  const preloadFavicon = () => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "./favicon.ico";
    document.head.appendChild(link);

    // Force load favicon
    const img = document.createElement("img");
    img.src = "./favicon.ico";
    img.style.display = "none";
    document.body.appendChild(img);
  };

  // Show loading screen
  const showLoadingScreen = () => {
    const loadingScreen = document.createElement("div");
    loadingScreen.id = "loading-screen";
    loadingScreen.style.position = "fixed";
    loadingScreen.style.top = "0";
    loadingScreen.style.left = "0";
    loadingScreen.style.width = "100%";
    loadingScreen.style.height = "100%";
    loadingScreen.style.backgroundColor = "#fff"; // Білий фон
    loadingScreen.style.color = "#000"; // Чорний текст
    loadingScreen.style.display = "flex";
    loadingScreen.style.justifyContent = "center";
    loadingScreen.style.alignItems = "center";
    loadingScreen.style.zIndex = "9999";
    loadingScreen.style.transition = "opacity 0.5s ease"; // Плавний перехід
    loadingScreen.innerText = "Loading...";
    document.body.appendChild(loadingScreen);
  };

  // Hide loading screen
  const hideLoadingScreen = () => {
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
      loadingScreen.style.opacity = "0"; // Плавне зникнення
      setTimeout(() => {
        loadingScreen.remove();
      }, 500); // Час для завершення анімації
    }
  };

  // Show loading screen and preload resources
  showLoadingScreen();
  preloadNotes(); // Почати завантаження нот одразу
  preloadFavicon(); // Почати завантаження фавіконки одразу
  setTimeout(() => {
    hideLoadingScreen(); // Приховати заставку через 3 секунди
  }, 3000); // 3 seconds delay
});