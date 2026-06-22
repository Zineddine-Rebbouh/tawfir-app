import { t } from "../services/translationService.js";
import { icon } from "./Icon.js";

export function FloatingActions() {
  const message = encodeURIComponent(t("whatsapp.message"));

  return `
    <a class="floating-whatsapp" href="https://wa.me/213000000000?text=${message}" target="_blank" rel="noopener" aria-label="${t("whatsapp.label")}">
      <span class="whatsapp-bubble">${t("whatsapp.bubble")}</span>
      <span class="whatsapp-btn">${icon("whatsapp")}</span>
    </a>
    <button class="icon-btn scroll-top" id="scrollTop" type="button" aria-label="${t("scrollTop")}">${icon("arrowUp")}</button>
  `;
}

