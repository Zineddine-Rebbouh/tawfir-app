import { t, getLanguage } from "../services/translationService.js";
import { icon } from "./Icon.js";
import { PhoneFrame, ScreenshotImage } from "./PhoneFrame.js";
import { toArabicNumber } from "../utils/arabicNumbers.js";

function titleLine(words, lineIndex) {
  return `
    <span class="title-line">
      ${words.map((word, index) => `<span class="word ${index === 0 ? "accent-word" : ""}" style="--word-index:${lineIndex * 2 + index}">${word}</span>`).join("")}
    </span>
  `;
}

function wilayaOptions() {
  const wilayas = t("wilayas");
  return wilayas.map((wilaya) => `<option value="${wilaya.value}">${wilaya.label}</option>`).join("");
}

function categoryPills() {
  const categories = t("categories");
  return categories.map((category) => `
    <span class="category-pill">${category.icon} ${category.label}<span class="count">${toArabicNumber(category.count)} ${category.suffix}</span></span>
  `).join("");
}

function statCards() {
  const stats = t("stats");
  return stats.map((stat) => `
    <article class="stat-card">
      <div class="stat-value" data-counter data-target="${stat.target}" data-prefix="${stat.prefix}">٠</div>
      <p class="stat-label">${stat.label}</p>
    </article>
  `).join("");
}

export function Hero() {
  const titleLines = t("hero.titleLines");
  const subtitle = t("hero.subtitle");
  
  return `
    <section class="hero" id="home" aria-labelledby="heroTitle">
      <canvas class="particle-canvas" id="particleCanvas" aria-hidden="true"></canvas>
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="hero-badge fade-in"><span aria-hidden="true">🌿</span><span>${t("brandTagline")}</span></div>
          <h1 class="hero-title" id="heroTitle" aria-label="${titleLines.map(line => line.join(" ")).join(". ")}">
            ${titleLines.map(titleLine).join("")}
          </h1>
          <p class="hero-subtitle fade-in">
            ${subtitle}
          </p>
          <div class="wilaya-widget fade-in">
            <label for="wilayaSelect">
               ${icon("pin")}
               <span class="wilaya-label-full">${t("hero.wilayaLabel")}</span>
               <span class="wilaya-label-short">${t("hero.wilayaShort")}</span>
            </label>
            <select id="wilayaSelect" aria-label="${t("hero.wilayaLabel")}">${wilayaOptions()}</select>
          </div>
          <div class="hero-actions fade-in">
            <a class="btn btn-primary" href="#download" aria-label="${t("hero.primaryCta")}">${icon("download")}${t("hero.primaryCta")}</a>
            <button class="btn btn-ghost" id="openVideo" type="button" aria-label="${t("hero.secondaryCta")}">${icon("play")}${t("hero.secondaryCta")}</button>
          </div>
          <div class="category-pills fade-in" aria-label="${t("nav.features")}">${categoryPills()}</div>
          <div class="stats-bar fade-in" id="statsBar" aria-label="${t("brandName")}">${statCards()}</div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="halo"></div>
          <div class="floating-card float-impact"><strong>${t("hero.trustValue")}</strong><span>${t("hero.userTrust")}</span></div>
          <div class="floating-card float-qr">
            <strong>${t("hero.qrLabel")}</strong><span>${t("hero.instantVerify")}</span>
            <span class="qr-mini"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
          </div>
          <div class="hero-phone-wrap" id="heroPhone">${PhoneFrame(ScreenshotImage({ label: t("screenshots.items.1.label"), file: "hero-screen.png" }))}</div>
        </div>
      </div>
    </section>
  `;
}

