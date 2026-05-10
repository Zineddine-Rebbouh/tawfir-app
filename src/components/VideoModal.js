import { icon } from "./Icon.js";

export function VideoModal() {
  return `
    <div class="video-modal" id="videoModal" role="dialog" aria-modal="true" aria-labelledby="videoTitle" aria-hidden="true">
      <div class="modal-card">
        <button class="icon-btn modal-close" id="closeVideo" type="button" aria-label="إغلاق الفيديو">${icon("close")}</button>
        <div class="video-placeholder">
          <div>
            <strong id="videoTitle">عرض توضيحي لتوفير</strong>
            <span class="fr" dir="ltr" lang="fr">Placeholder vidéo pour la démo produit</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
