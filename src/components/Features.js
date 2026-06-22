import { t } from "../services/translationService.js";
import { icon } from "./Icon.js";
import { SectionHeader } from "./SectionHeader.js";

function featureCard(feature) {
  return `
    <article class="feature-card ${feature.size}">
      <span class="feature-icon" aria-hidden="true">${icon(feature.icon)}</span>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
      ${feature.chips ? `<div class="feature-detail">${feature.chips.map((chip) => `<span class="mini-chip">${chip}</span>`).join("")}</div>` : ""}
    </article>
  `;
}

export function Features() {
  const items = t("features.items");
  return `
    <section class="section" id="features" aria-labelledby="featuresTitle">
      <div class="container">
        ${SectionHeader({
          eyebrow: t("features.eyebrow"),
          title: t("features.title"),
          subtitle: t("features.subtitle"),
          id: "featuresTitle"
        })}
        <div class="features-grid">${items.map(featureCard).join("")}</div>
      </div>
    </section>
  `;
}

