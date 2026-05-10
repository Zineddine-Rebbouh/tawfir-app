import { qs, on } from "../utils/dom.js";

export function initWaitlistForm() {
  const form = qs("#waitlistForm");
  const success = qs("#formSuccess");
  if (!form || !success) return;

  on(form, "submit", (event) => {
    event.preventDefault();
    form.classList.add("is-submitted");
    success.classList.add("is-visible");
  });
}
