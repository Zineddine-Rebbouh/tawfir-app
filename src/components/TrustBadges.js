import { trustBadges } from "../data/content.js";

export function TrustBadges() {
  return `
    <section class="trust-badges" aria-label="شارات الثقة">
      <div class="container trust-row">
        ${trustBadges.map((badge) => {
          const [icon, ...label] = badge.split(" ");
          return `<div class="trust-badge fade-in"><span aria-hidden="true">${icon}</span><span>${label.join(" ")}</span></div>`;
        }).join("")}
      </div>
    </section>
  `;
}
