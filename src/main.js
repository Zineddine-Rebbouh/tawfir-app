import { renderLandingPage } from "./pages/landingPage.js";
import { whenReady } from "./utils/dom.js";
import { initTheme } from "./services/themeService.js";
import { initMobileNavigation } from "./services/navigationService.js";
import { initScrollUi } from "./services/scrollService.js";
import { initCounters } from "./services/counterService.js";
import { initEcoScore } from "./services/ecoScoreService.js";
import { initAnimations } from "./services/animationService.js";
import { initParticleField } from "./services/particleField.js";
import { initVideoModal } from "./services/modalService.js";
import { initWaitlistForm } from "./services/waitlistService.js";
import { initAlgeriaClock } from "./services/clockService.js";
import { initTranslation, setLanguage } from "./services/translationService.js";

function bootstrap() {
  const root = document.getElementById("app");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  renderLandingPage(root);

  // Re-bind mouseleave on the newly rendered dropdown
  const globeBtn = document.getElementById("langGlobeBtn");
  const langDropdown = document.getElementById("langDropdown");
  if (globeBtn && langDropdown) {
    langDropdown.addEventListener("mouseleave", () => {
      langDropdown.hidden = true;
      globeBtn.setAttribute("aria-expanded", "false");
    });
  }

  initTheme();
  initMobileNavigation();
  initScrollUi(prefersReducedMotion);
  initCounters(prefersReducedMotion);
  initEcoScore(prefersReducedMotion);
  initAnimations(prefersReducedMotion);
  initParticleField(prefersReducedMotion);
  initVideoModal();
  initWaitlistForm();
  initAlgeriaClock();
}

function startApp() {
  initTranslation(bootstrap);

  // Persistent document-level delegation for language dropdown clicks
  document.addEventListener("click", (e) => {
    const globeBtn = document.getElementById("langGlobeBtn");
    const langDropdown = document.getElementById("langDropdown");
    if (!globeBtn || !langDropdown) return;

    const isGlobeClick = globeBtn.contains(e.target);
    const isDropdownClick = langDropdown.contains(e.target);
    const langOption = e.target.closest(".lang-option");

    if (isGlobeClick) {
      const isOpen = !langDropdown.hidden;
      langDropdown.hidden = isOpen;
      globeBtn.setAttribute("aria-expanded", String(!isOpen));
    } else if (langOption) {
      // Set language (this triggers re-render via bootstrap)
      setLanguage(langOption.dataset.lang);
    } else if (!isDropdownClick) {
      langDropdown.hidden = true;
      globeBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const globeBtn = document.getElementById("langGlobeBtn");
      const langDropdown = document.getElementById("langDropdown");
      if (globeBtn && langDropdown) {
        langDropdown.hidden = true;
        globeBtn.setAttribute("aria-expanded", "false");
      }
    }
  });

  bootstrap();
}

whenReady(startApp);

