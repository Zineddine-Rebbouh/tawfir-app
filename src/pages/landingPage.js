import { Navbar } from "../components/Navbar.js";
import { Hero } from "../components/Hero.js";
import { HowItWorks } from "../components/HowItWorks.js";
import { Features } from "../components/Features.js";
import { ScreenshotShowcase } from "../components/ScreenshotShowcase.js";
import { EcoScore } from "../components/EcoScore.js";
import { ProximityMap } from "../components/ProximityMap.js";
import { Testimonials } from "../components/Testimonials.js";
import { CharityCta } from "../components/CharityCta.js";
import { DownloadCta } from "../components/DownloadCta.js";
import { TrustBadges } from "../components/TrustBadges.js";
import { Footer } from "../components/Footer.js";
import { FloatingActions } from "../components/FloatingActions.js";
import { VideoModal } from "../components/VideoModal.js";

export function LandingPage() {
  return `
    <a class="skip-link" href="#main">تجاوز إلى المحتوى الرئيسي</a>
    <div class="scroll-progress" id="scrollProgress" aria-hidden="true"></div>
    ${Navbar()}
    <main id="main">
      ${Hero()}
      ${HowItWorks()}
      ${Features()}
      ${ScreenshotShowcase()}
      ${EcoScore()}
      ${ProximityMap()}
      ${Testimonials()}
      ${CharityCta()}
      ${DownloadCta()}
      ${TrustBadges()}
    </main>
    ${Footer()}
    ${FloatingActions()}
    ${VideoModal()}
  `;
}

export function renderLandingPage(root) {
  root.innerHTML = LandingPage();
}
