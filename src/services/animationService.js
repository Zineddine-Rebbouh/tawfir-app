import { qs, qsa } from "../utils/dom.js";

function initIntersectionReveal() {
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -40px 0px" });

  qsa(".fade-in, .actor-column, .typewriter, .feature-card").forEach((element) => observer.observe(element));
}

function initGsapAnimations() {
  if (!window.gsap) return false;

  const { gsap, ScrollTrigger } = window;
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(".hero-title .word", { y: 60, opacity: 0 }, {
    y: 0,
    opacity: 1,
    stagger: 0.12,
    duration: 0.9,
    ease: "power3.out"
  });

  gsap.fromTo("#heroPhone", { x: 120, opacity: 0, rotateX: 20, rotateY: -24, rotateZ: 6 }, {
    x: 0,
    opacity: 1,
    rotateX: 20,
    rotateY: -24,
    rotateZ: 6,
    duration: 1.2,
    ease: "elastic.out(1, 0.5)",
    delay: 0.28
  });

  window.setTimeout(() => {
    qsa(".hero-title .word").forEach((word) => {
      word.style.opacity = "1";
      word.style.transform = "none";
    });

    const heroPhone = qs("#heroPhone");
    if (heroPhone) {
      heroPhone.style.opacity = "1";
    }
  }, 2600);

  qsa(".feature-card").forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      delay: index * 0.04,
      scrollTrigger: ScrollTrigger ? { trigger: card, start: "top 84%", once: true } : undefined,
      onStart: () => {
        const icon = card.querySelector(".feature-icon");
        if (icon) gsap.fromTo(icon, { rotation: 0 }, { rotation: 360, duration: 0.5, ease: "power1.inOut" });
      }
    });
  });

  return true;
}

function revealWithoutMotion() {
  qsa(".hero-title .word, .feature-card, .fade-in, .actor-column, .typewriter").forEach((element) => {
    element.classList.add("is-visible");
    element.style.opacity = "1";
    element.style.transform = "none";
  });
}

export function initAnimations(prefersReducedMotion) {
  if (window.ScrollTrigger) {
    window.ScrollTrigger.getAll().forEach((t) => t.kill());
  }
  if (window.gsap) {
    window.gsap.killTweensOf("*");
  }

  if (prefersReducedMotion) {
    revealWithoutMotion();
    return;
  }

  initIntersectionReveal();
  if (!initGsapAnimations()) revealWithoutMotion();
}

