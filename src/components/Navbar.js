import { navLinks } from "../data/content.js";
import { icon } from "./Icon.js";
import { Logo } from "./Logo.js";

function navList(className = "nav-links") {
  return `
    <ul class="${className}">
      ${navLinks.map((link) => `<li><a class="nav-link" href="${link.href}">${link.label}</a></li>`).join("")}
    </ul>
  `;
}

export function Navbar() {
  return `
    <header class="site-header" id="siteHeader">
      <nav class="nav container" aria-label="التنقل الرئيسي">
        <a href="#home" aria-label="توفير - الصفحة الرئيسية">${Logo()}</a>
        ${navList()}
        <div class="nav-actions">
          <button class="icon-btn theme-toggle" id="themeToggle" type="button" aria-label="تبديل الوضع الداكن">${icon("sun")}</button>
          <button class="icon-btn lang-toggle" type="button" aria-label="تبديل اللغة">FR / العربية</button>
          <a class="btn btn-amber" href="#download">سجّل الآن</a>
          <button class="icon-btn mobile-menu-btn" id="mobileMenuButton" type="button" aria-label="فتح القائمة" aria-expanded="false" aria-controls="mobileMenu">${icon("menu")}</button>
        </div>
      </nav>
      <div class="mobile-menu" id="mobileMenu" hidden>
        <div class="container mobile-menu-inner">
          ${navList("mobile-nav-links")}
          <a class="btn btn-amber" href="#download">سجّل الآن</a>
        </div>
      </div>
    </header>
  `;
}
