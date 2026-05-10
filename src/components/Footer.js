import { footerColumns } from "../data/content.js";
import { Logo } from "./Logo.js";
import { icon } from "./Icon.js";

function footerColumn(column) {
  return `
    <div class="footer-col">
      <h3>${column.title}</h3>
      <ul>
        ${column.links.map((link) => `
          <li><a href="${link.href}" ${link.lang === "fr" ? `class="fr" dir="ltr" lang="fr"` : ""}>${link.label}</a></li>
        `).join("")}
      </ul>
    </div>
  `;
}

export function Footer() {
  return `
    <footer class="site-footer" aria-labelledby="footerTitle">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a href="#home" aria-label="توفير">${Logo()}</a>
          <p>نحارب هدر الطعام في الجزائر بمنصة تجمع السعر العادل، الثقة الرقمية، والأثر الاجتماعي.</p>
          <div class="social-row" aria-label="الشبكات الاجتماعية">
            <a href="#" aria-label="فيسبوك">${icon("heart")}</a>
            <a href="#" aria-label="إنستغرام">${icon("sparkles")}</a>
            <a href="#" aria-label="لينكدإن">${icon("chat")}</a>
          </div>
        </div>
        ${footerColumns.map(footerColumn).join("")}
      </div>
      <div class="container footer-bottom">
        <span class="fr" dir="ltr" lang="fr">© 2026 Tawfir. Tous droits réservés.</span>
        <span>مؤشر الولاية: الجزائر العاصمة</span>
        <span class="algeria-clock"><span>الوقت في الجزائر</span><time id="algeriaClock">--:--:--</time></span>
      </div>
    </footer>
  `;
}
