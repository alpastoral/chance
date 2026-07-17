const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let ticking = false;

function updateWordmark() {
  const scrollRange = Math.min(window.innerHeight * 0.65, 620);
  const progress = reduceMotion.matches
    ? Number(window.scrollY > 80)
    : Math.min(Math.max(window.scrollY / scrollRange, 0), 1);

  root.style.setProperty("--scroll-progress", progress.toFixed(4));
  ticking = false;
}

function requestWordmarkUpdate() {
  if (ticking) return;

  ticking = true;
  requestAnimationFrame(updateWordmark);
}

window.addEventListener("scroll", requestWordmarkUpdate, { passive: true });
window.addEventListener("resize", requestWordmarkUpdate);
reduceMotion.addEventListener("change", requestWordmarkUpdate);
updateWordmark();
