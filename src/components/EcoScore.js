import { t } from "../services/translationService.js";
import { toArabicNumber } from "../utils/arabicNumbers.js";

function tierRow(tier) {
  return `
    <div class="tier-row">
      <span class="tier-dot" style="background:${tier.color};"></span>
      <strong>${tier.label}</strong>
    </div>
  `;
}

export function EcoScore() {
  const tiers = t("ecoScore.tiers");
  const scoreValue = t("ecoScore.scoreValue");
  
  return `
    <section class="section grid-bg" id="eco" aria-labelledby="ecoTitle">
      <div class="container eco-grid">
        <div class="eco-copy fade-in">
          <span class="eyebrow">${t("ecoScore.eyebrow")}</span>
          <h2 class="section-title" id="ecoTitle">${t("ecoScore.title")}</h2>
          <p>${t("ecoScore.description")}</p>
          <p>${t("ecoScore.subtitle")}</p>
          <div class="tier-table" aria-label="${t("ecoScore.tableLabel")}">${tiers.map(tierRow).join("")}</div>
        </div>
        <div class="eco-visual fade-in" id="ecoVisual" aria-label="${t("ecoScore.currentTierLabel")}: ${toArabicNumber(scoreValue)} ${t("ecoScore.scoreText")}">
          <div class="eco-ring-card">
            <div class="eco-ring" id="ecoRing">
              <div class="eco-score-number"><strong id="ecoScoreNumber">٠</strong><span>${t("ecoScore.scoreText")}</span></div>
            </div>
            <h3>${t("ecoScore.currentTierLabel")}</h3>
            <p>${t("ecoScore.statusText")}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

