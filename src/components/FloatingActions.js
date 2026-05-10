import { icon } from "./Icon.js";

export function FloatingActions() {
  const message = encodeURIComponent("أهلاً توفير، أريد معرفة المزيد");

  return `
    <a class="floating-whatsapp" href="https://wa.me/213000000000?text=${message}" target="_blank" rel="noopener" aria-label="تحدث معنا عبر واتساب">
      <span class="whatsapp-bubble">تحدث معنا</span>
      <span class="whatsapp-btn">${icon("whatsapp")}</span>
    </a>
    <button class="icon-btn scroll-top" id="scrollTop" type="button" aria-label="العودة إلى الأعلى">${icon("arrowUp")}</button>
  `;
}
