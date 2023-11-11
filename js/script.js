
function playSong() {
    const songPlayer = document.getElementById("music");

    songPlayer.load();
    songPlayer.play();
}

const topContainer = document.getElementById("top-container");
const center = document.getElementById("center");
let lastScrollPosition = 0;

window.addEventListener("scroll", function() {
  const scrollY = window.scrollY;

  const scrollDirection = scrollY > lastScrollPosition ? "down" : "up";
  lastScrollPosition = scrollY;

  const translateY = scrollDirection === "down" ? -scrollY : 0;

  topContainer.style.transform = `translateY(${translateY}px)`;
  center.style.transform = `translateY(${translateY}px)`;
});
