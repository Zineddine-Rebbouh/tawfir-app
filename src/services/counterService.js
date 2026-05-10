import { WILAYA_STATS } from "../constants/wilayaStats.js";
import { easeOutQuart, formatSignedArabic } from "../utils/arabicNumbers.js";
import { qs, qsa, on } from "../utils/dom.js";

function animateCounter(element, target, duration, prefersReducedMotion) {
  const prefix = element.dataset.prefix || "";

  if (prefersReducedMotion) {
    element.textContent = formatSignedArabic(target, prefix);
    return;
  }

  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const current = Math.round(easeOutQuart(progress) * target);
    element.textContent = formatSignedArabic(current, prefix);

    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

export function initCounters(prefersReducedMotion) {
  const counters = qsa("[data-counter]");
  const statsBar = qs("#statsBar");
  const wilayaSelect = qs("#wilayaSelect");
  let hasAnimated = false;

  const runCounters = (duration = 2500) => {
    counters.forEach((counter) => animateCounter(counter, Number(counter.dataset.target), duration, prefersReducedMotion));
  };

  on(wilayaSelect, "change", () => {
    const values = WILAYA_STATS[wilayaSelect.value] || WILAYA_STATS.algiers;
    counters.forEach((counter, index) => {
      counter.dataset.target = values[index];
      animateCounter(counter, values[index], 900, prefersReducedMotion);
    });
  });

  if (prefersReducedMotion || !statsBar) {
    runCounters(0);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    if (!hasAnimated && entries.some((entry) => entry.isIntersecting)) {
      hasAnimated = true;
      runCounters();
      observer.disconnect();
    }
  }, { threshold: 0.35 });

  observer.observe(statsBar);
}
