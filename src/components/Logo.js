import { brand } from "../data/content.js";
import { icon } from "./Icon.js";

export function Logo({ compact = false } = {}) {
  return `
    <span class="logo-container">
      <!-- LOGO PLACEHOLDER -->
      <span class="logo-mark" aria-hidden="true">${icon("heart")}</span>
      <span class="logo-text">
        <strong>${brand.arabicName}</strong>
        ${compact ? "" : `<span dir="ltr" lang="fr">${brand.latinName}</span>`}
      </span>
    </span>
  `;
}
