import { t } from "../services/translationService.js";
import { icon } from "./Icon.js";

export function CharityCta() {
  const impacts = t("charityCta.impacts");

  return `
    <section class="section charity-cta" id="charity" aria-labelledby="charityTitle">
      <div class="container charity-grid">
        <div class="charity-copy fade-in">
          <span class="heart-wrap" aria-hidden="true">${icon("heart")}</span>
          <h2 id="charityTitle">${t("charityCta.title")}</h2>
          <p>${t("charityCta.description")}</p>
          <a class="btn btn-amber" href="#download">${t("charityCta.btnText")}</a>
        </div>
        <div class="impact-grid fade-in">
          ${impacts.map((item) => `<div class="impact-card"><span>${item.label}</span><strong>${item.value}</strong></div>`).join("")}
        </div>
      </div>
    </section>
  `;
}

