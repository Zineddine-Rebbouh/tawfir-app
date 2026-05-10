import { charityImpact } from "../data/content.js";
import { icon } from "./Icon.js";

export function CharityCta() {
  return `
    <section class="section charity-cta" id="charity" aria-labelledby="charityTitle">
      <div class="container charity-grid">
        <div class="charity-copy fade-in">
          <span class="heart-wrap" aria-hidden="true">${icon("heart")}</span>
          <h2 id="charityTitle">كن جزءاً من الحل</h2>
          <p class="fr" dir="ltr" lang="fr">Les associations peuvent recevoir des dons vérifiés, organiser les collectes et publier des rapports d'impact transparents.</p>
          <a class="btn btn-amber" href="#download">انضم كجمعية</a>
        </div>
        <div class="impact-grid fade-in">
          ${charityImpact.map((item) => `<div class="impact-card"><span>${item.label}</span><strong>${item.value}</strong></div>`).join("")}
        </div>
      </div>
    </section>
  `;
}
