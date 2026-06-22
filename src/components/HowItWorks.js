import { t } from "../services/translationService.js";
import { icon } from "./Icon.js";
import { SectionHeader } from "./SectionHeader.js";
import { toArabicNumber } from "../utils/arabicNumbers.js";

function actorColumn(actor) {
  return `
    <article class="actor-column fade-in">
      <div class="actor-head">
        <h3>${actor.title}</h3>
        <span class="actor-icon" aria-hidden="true">${icon(actor.icon)}</span>
      </div>
      <div class="step-list">
        <svg class="connector-svg" viewBox="0 0 30 300" preserveAspectRatio="none" aria-hidden="true">
          <path class="connector-path" d="M15 0 C15 60 15 70 15 100 C15 150 15 160 15 200 C15 250 15 260 15 300"></path>
        </svg>
        ${actor.steps.map((step, index) => `
          <div class="step-card"><span class="step-number">${toArabicNumber(index + 1)}</span><p>${step}</p></div>
        `).join("")}
      </div>
    </article>
  `;
}

export function HowItWorks() {
  const actors = t("howItWorks.actors");
  return `
    <section class="section grid-bg" id="how" aria-labelledby="howTitle">
      <div class="container">
        ${SectionHeader({
          eyebrow: t("howItWorks.eyebrow"),
          title: t("howItWorks.title"),
          subtitle: t("howItWorks.subtitle"),
          id: "howTitle"
        })}
        <div class="how-grid">${actors.map(actorColumn).join("")}</div>
      </div>
    </section>
  `;
}

