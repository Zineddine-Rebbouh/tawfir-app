import { qs, qsa, on } from "../utils/dom.js";

export function initMobileNavigation() {
  const button = qs("#mobileMenuButton");
  const menu = qs("#mobileMenu");
  if (!button || !menu) return;

  const setOpen = (isOpen) => {
    menu.hidden = !isOpen;
    button.setAttribute("aria-expanded", String(isOpen));
  };

  on(button, "click", () => setOpen(menu.hidden));
  qsa("a", menu).forEach((link) => on(link, "click", () => setOpen(false)));
  on(window, "keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}
