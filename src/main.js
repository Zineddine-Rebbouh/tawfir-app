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

function bootstrap() {
  const root = document.getElementById("app");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  renderLandingPage(root);
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

whenReady(bootstrap);
