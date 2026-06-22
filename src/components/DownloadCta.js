import { t } from "../services/translationService.js";
import { icon } from "./Icon.js";

export function DownloadCta() {
  return `
    <section class="section download-cta" id="download" aria-labelledby="downloadTitle">
      <div class="container download-grid">
        <div class="download-copy fade-in">
          <span class="eyebrow">${t("downloadCta.eyebrow")}</span>
          <h2 id="downloadTitle">${t("downloadCta.title")}</h2>
          <p>${t("downloadCta.subtitle")}</p>
          <div class="store-buttons">
            <a class="store-btn" href="#" aria-label="${t("downloadCta.storeApple")} ${t("downloadCta.storeAppleBold")}">${icon("apple")}<span>${t("downloadCta.storeApple")}<strong>${t("downloadCta.storeAppleBold")}</strong></span></a>
            <a class="store-btn" href="#" aria-label="${t("downloadCta.storeGoogle")} ${t("downloadCta.storeGoogleBold")}">${icon("googlePlay")}<span>${t("downloadCta.storeGoogle")}<strong>${t("downloadCta.storeGoogleBold")}</strong></span></a>
          </div>
        </div>
        <div class="waitlist-card fade-in">
          <h3>${t("downloadCta.waitlistTitle")}</h3>
          <form class="waitlist-form" id="waitlistForm">
            <div class="input-row">
              <input type="email" name="email" placeholder="${t("downloadCta.emailPlaceholder")}" aria-label="${t("downloadCta.emailLabel")}" required>
              <button type="submit">${t("downloadCta.notifyMe")}</button>
            </div>
          </form>
          <div class="form-success" id="formSuccess" role="status">${t("downloadCta.successMsg")}</div>
        </div>
      </div>
    </section>
  `;
}

