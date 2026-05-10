import { qs, on } from "../utils/dom.js";

export function initVideoModal() {
  const modal = qs("#videoModal");
  const openButton = qs("#openVideo");
  const closeButton = qs("#closeVideo");
  if (!modal || !openButton || !closeButton) return;

  const setOpen = (isOpen) => {
    modal.classList.toggle("is-open", isOpen);
    modal.setAttribute("aria-hidden", String(!isOpen));
    document.body.classList.toggle("modal-open", isOpen);
    if (isOpen) closeButton.focus();
  };

  on(openButton, "click", () => setOpen(true));
  on(closeButton, "click", () => setOpen(false));
  on(modal, "click", (event) => {
    if (event.target === modal) setOpen(false);
  });
  on(window, "keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) setOpen(false);
  });
}
