import { t } from "../services/translationService.js";
import { icon } from "./Icon.js";

export function VideoModal() {
  return `
    <div class="video-modal" id="videoModal" role="dialog" aria-modal="true" aria-labelledby="videoTitle" aria-hidden="true">
      <div class="modal-card">
        <button class="icon-btn modal-close" id="closeVideo" type="button" aria-label="${t("videoModal.close")}">${icon("close")}</button>
        <div class="video-placeholder">
          <div>
            <strong id="videoTitle">${t("videoModal.title")}</strong>
            <span>${t("videoModal.subtitle")}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

