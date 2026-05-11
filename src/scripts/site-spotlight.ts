export {};

const root = document.documentElement;
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

let animationFrame = 0;
let nextX = 50;
let nextY = 24;

const applySpotlight = () => {
  animationFrame = 0;
  root.style.setProperty("--spotlight-x", `${nextX.toFixed(2)}%`);
  root.style.setProperty("--spotlight-y", `${nextY.toFixed(2)}%`);
};

const scheduleSpotlight = () => {
  if (!animationFrame) {
    animationFrame = window.requestAnimationFrame(applySpotlight);
  }
};

const setSpotlightFromPointer = (event: PointerEvent) => {
  if (reducedMotionQuery.matches) {
    return;
  }

  nextX = (event.clientX / window.innerWidth) * 100;
  nextY = (event.clientY / window.innerHeight) * 100;
  scheduleSpotlight();
};

const resetSpotlight = () => {
  nextX = 50;
  nextY = 24;
  scheduleSpotlight();
};

const createClickRipple = (event: PointerEvent) => {
  if (reducedMotionQuery.matches) {
    return;
  }

  const ripple = document.createElement("span");
  ripple.className = "spotlight-ripple";
  ripple.setAttribute("aria-hidden", "true");
  ripple.style.left = `${event.clientX}px`;
  ripple.style.top = `${event.clientY}px`;
  document.body.append(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), {
    once: true,
  });
};

window.addEventListener("pointermove", setSpotlightFromPointer, {
  passive: true,
});
window.addEventListener("pointerdown", createClickRipple, { passive: true });
window.addEventListener("blur", resetSpotlight);
reducedMotionQuery.addEventListener("change", resetSpotlight);
