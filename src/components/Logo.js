import { t, getLanguage } from "../services/translationService.js";
import { icon } from "./Icon.js";

export function Logo({ compact = false } = {}) {
  const lang = getLanguage();
  return `
    <span class="logo-container">
      <!-- LOGO PLACEHOLDER -->
      <span class="logo-mark" aria-hidden="true">${icon("heart")}</span>
      <span class="logo-text">
        <strong>${t("brandName")}</strong>
        ${compact ? "" : `<span>${t("brandLatin")}</span>`}
      </span>
    </span>
  `;
}

