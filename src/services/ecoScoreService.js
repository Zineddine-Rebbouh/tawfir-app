import { easeOutQuart, toArabicNumber } from "../utils/arabicNumbers.js";
import { qs } from "../utils/dom.js";

function paintRing(score, value) {
  const ring = qs("#ecoRing");
  const number = qs("#ecoScoreNumber");
  if (!ring || !number) return;

  const degrees = value * 3.6;
  ring.style.background = `conic-gradient(var(--eco-suspended) 0deg, var(--eco-developing) ${Math.min(degrees, 180)}deg, var(--eco-exemplary) ${degrees}deg, rgba(107, 114, 128, 0.18) 0deg)`;
  number.textContent = toArabicNumber(Math.round(value));
}

export function initEcoScore(prefersReducedMotion, score = 73) {
  const visual = qs("#ecoVisual");
  if (!visual) return;

  if (prefersReducedMotion) {
    paintRing(score, score);
    return;
  }

  let hasAnimated = false;
  const animate = () => {
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 1800, 1);
      paintRing(score, easeOutQuart(progress) * score);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    if (!hasAnimated && entries.some((entry) => entry.isIntersecting)) {
      hasAnimated = true;
      animate();
      observer.disconnect();
    }
  }, { threshold: 0.45 });

  observer.observe(visual);
}
