import { t } from "../services/translationService.js";
import { Logo } from "./Logo.js";
import { icon } from "./Icon.js";

function footerColumn(column) {
  return `
    <div class="footer-col">
      <h3>${column.title}</h3>
      <ul>
        ${column.links.map((link) => `
          <li><a href="${link.href}">${link.label}</a></li>
        `).join("")}
      </ul>
    </div>
  `;
}

export function Footer() {
  const columns = t("footer.columns");

  return `
    <footer class="site-footer" aria-labelledby="footerTitle">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a href="#home" aria-label="${t("brandName")}">${Logo()}</a>
          <p>${t("footer.about")}</p>
          <div class="social-row" aria-label="Social">
            <a href="#" aria-label="${t("footer.facebook")}">${icon("heart")}</a>
            <a href="#" aria-label="${t("footer.instagram")}">${icon("sparkles")}</a>
            <a href="#" aria-label="${t("footer.linkedin")}">${icon("chat")}</a>
          </div>
        </div>
        ${columns.map(footerColumn).join("")}
      </div>
      <div class="container footer-bottom">
        <span>${t("footer.copyright")}</span>
        <span>${t("footer.wilayaIndex")}</span>
        <span class="algeria-clock"><span>${t("footer.clockLabel")}</span><time id="algeriaClock">--:--:--</time></span>
      </div>
    </footer>
  `;
}

