const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const music = document.getElementById("music");

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.classList.remove("hidden");
  music.play();
});