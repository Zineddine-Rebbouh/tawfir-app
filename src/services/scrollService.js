import { qs, on } from "../utils/dom.js";

export function initScrollUi(prefersReducedMotion) {
  const header = qs("#siteHeader");
  const progress = qs("#scrollProgress");
  const scrollTop = qs("#scrollTop");
  
  let isTicking = false;

  const update = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const amount = maxScroll > 0 ? window.scrollY / maxScroll : 0;

    if (progress) progress.style.transform = `scaleX(${Math.min(amount, 1)})`;
    header?.classList.toggle("scrolled", window.scrollY > 80);
    scrollTop?.classList.toggle("is-visible", window.scrollY > 500);
    
    isTicking = false;
  };

  const onScroll = () => {
    if (!isTicking) {
      requestAnimationFrame(update);
      isTicking = true;
    }
  };

  on(window, "scroll", onScroll, { passive: true });
  on(scrollTop, "click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));
  update();
}
