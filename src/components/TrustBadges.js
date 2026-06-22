import { t } from "../services/translationService.js";

export function TrustBadges() {
  const trustBadges = t("trustBadges");

  return `
    <section class="trust-badges" aria-label="${t("trustBadges").join(", ")}">
      <div class="container trust-row">
        ${trustBadges.map((badge) => {
          const [icon, ...label] = badge.split(" ");
          return `<div class="trust-badge fade-in"><span aria-hidden="true">${icon}</span><span>${label.join(" ")}</span></div>`;
        }).join("")}
      </div>
    </section>
  `;
}

