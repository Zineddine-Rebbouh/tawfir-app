import { features } from "../data/content.js";
import { icon } from "./Icon.js";
import { SectionHeader } from "./SectionHeader.js";

function featureCard(feature) {
  return `
    <article class="feature-card ${feature.size}">
      <span class="feature-icon" aria-hidden="true">${icon(feature.icon)}</span>
      <h3>${feature.title}</h3>
      <p class="fr" dir="ltr" lang="fr">${feature.description}</p>
      ${feature.chips ? `<div class="feature-detail">${feature.chips.map((chip) => `<span class="mini-chip">${chip}</span>`).join("")}</div>` : ""}
    </article>
  `;
}

export function Features() {
  return `
    <section class="section" id="features" aria-labelledby="featuresTitle">
      <div class="container">
        ${SectionHeader({
          eyebrow: "المميزات",
          title: "منصة واحدة لثلاث مهام يومية",
          subtitle: "Une expérience fiable pour vendre, acheter et donner les excédents alimentaires avec transparence.",
          id: "featuresTitle"
        })}
        <div class="features-grid">${features.map(featureCard).join("")}</div>
      </div>
    </section>
  `;
}
