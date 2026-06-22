import { t, getLanguage } from "../services/translationService.js";
import { icon } from "./Icon.js";

export function Logo({ compact = false } = {}) {
  const lang = getLanguage();
  return `
    <span class="logo-container">
      <img src="/logo/logo.png" alt="${t("brandName")} Logo" class="logo-mark-img" style="width: 42px; height: 42px; object-fit: contain;">
      <span class="logo-text">
        <strong>${t("brandName")}</strong>
        ${compact ? "" : `<span>${t("brandLatin")}</span>`}
      </span>
    </span>
  `;
}

