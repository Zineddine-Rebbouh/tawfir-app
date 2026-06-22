import { t, getLanguage } from "../services/translationService.js";
import { icon } from "./Icon.js";
import { Logo } from "./Logo.js";

function navList(className = "nav-links") {
  const links = [
    { href: "#home", label: t("nav.home") },
    { href: "#features", label: t("nav.features") },
    { href: "#how", label: t("nav.howItWorks") },
    { href: "#charity", label: t("nav.charity") }
  ];

  return `
    <ul class="${className}">
      ${links.map((link) => `<li><a class="nav-link" href="${link.href}">${link.label}</a></li>`).join("")}
    </ul>
  `;
}

export function Navbar() {
  const lang = getLanguage();
  const langLabels = { ar: "العربية", fr: "Français", en: "English" };

  return `
    <header class="site-header" id="siteHeader">
      <nav class="nav container" aria-label="${t("nav.home")}">
        <a href="#home" aria-label="${t("brandName")}">${Logo()}</a>
        ${navList()}
        <div class="nav-actions">
          <button class="icon-btn theme-toggle" id="themeToggle" type="button" aria-label="${t("themeToggleDark")}">${icon("sun")}</button>
          <div class="lang-dropdown-wrap" id="langDropdownWrap">
            <button class="icon-btn lang-globe-btn" id="langGlobeBtn" type="button" aria-label="${t("langSelectLabel")}" aria-expanded="false" aria-haspopup="listbox">
              ${icon("globe")}
            </button>
            <div class="lang-dropdown" id="langDropdown" role="listbox" aria-label="${t("langSelectLabel")}" hidden>
              <button class="lang-option ${lang === "en" ? "active" : ""}" data-lang="en" role="option" aria-selected="${lang === "en"}">🇬🇧 English</button>
              <button class="lang-option ${lang === "fr" ? "active" : ""}" data-lang="fr" role="option" aria-selected="${lang === "fr"}">🇫🇷 Français</button>
              <button class="lang-option ${lang === "ar" ? "active" : ""}" data-lang="ar" role="option" aria-selected="${lang === "ar"}">🇩🇿 العربية</button>
            </div>
          </div>
          <a class="btn btn-amber" href="#download">${t("registerNow")}</a>
          <button class="icon-btn mobile-menu-btn" id="mobileMenuButton" type="button" aria-label="Menu" aria-expanded="false" aria-controls="mobileMenu">${icon("menu")}</button>
        </div>
      </nav>
      <div class="mobile-menu" id="mobileMenu" hidden>
        <div class="container mobile-menu-inner">
          ${navList("mobile-nav-links")}
          <a class="btn btn-amber" href="#download">${t("registerNow")}</a>
        </div>
      </div>
    </header>
  `;
}


