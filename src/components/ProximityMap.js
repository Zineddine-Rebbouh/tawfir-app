import { t } from "../services/translationService.js";
import { toArabicNumber } from "../utils/arabicNumbers.js";

export function ProximityMap() {
  const locations = t("proximityMap.locations");

  return `
    <section class="section" id="map" aria-labelledby="mapTitle">
      <div class="container map-grid">
        <div class="map-visual fade-in" aria-hidden="true">
          <svg class="map-roads" viewBox="0 0 700 500" fill="none" preserveAspectRatio="none">
            <path d="M-20 120 C110 90 160 170 260 142 C380 108 424 46 550 72 C640 92 690 128 740 118" stroke="rgba(26,127,75,.22)" stroke-width="20" stroke-linecap="round"/>
            <path d="M20 370 C120 300 190 312 288 344 C410 384 466 284 570 302 C650 316 690 360 725 342" stroke="rgba(245,166,35,.24)" stroke-width="16" stroke-linecap="round"/>
            <path d="M236 -30 C260 80 232 160 284 226 C336 292 438 280 462 370 C482 442 440 492 424 540" stroke="rgba(26,127,75,.18)" stroke-width="14" stroke-linecap="round"/>
          </svg>
          <span class="map-pin pin-1"></span>
          <span class="map-pin amber pin-2"></span>
          <span class="map-pin pin-3"></span>
          <span class="map-pin amber pin-4"></span>
          <div class="map-panel"><strong>${t("proximityMap.detectedWilaya")}</strong><span>${t("proximityMap.offersStats")}</span></div>
        </div>
        <div class="map-copy fade-in">
          <span class="eyebrow">${t("proximityMap.eyebrow")}</span>
          <h2 id="mapTitle">${t("proximityMap.title")}</h2>
          <p>${t("proximityMap.subtitle")}</p>
          <div class="location-list">
            ${locations.map((location) => `<div class="location-item"><strong>${location.name}</strong><span>${toArabicNumber(location.count)} ${location.suffix}</span></div>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

