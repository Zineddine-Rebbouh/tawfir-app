import { categories, hero, stats, wilayas } from "../data/content.js";
import { icon } from "./Icon.js";
import { PhoneFrame } from "./PhoneFrame.js";

function titleLine(words, lineIndex) {
  return `
    <span class="title-line">
      ${words.map((word, index) => `<span class="word ${index === 0 ? "accent-word" : ""}" style="--word-index:${lineIndex * 2 + index}">${word}</span>`).join("")}
    </span>
  `;
}

function wilayaOptions() {
  return wilayas.map((wilaya) => `<option value="${wilaya.value}">${wilaya.label}</option>`).join("");
}

function categoryPills() {
  return categories.map((category) => `
    <span class="category-pill">${category.icon} ${category.label}<span class="count">${category.count}</span></span>
  `).join("");
}

function statCards() {
  return stats.map((stat) => `
    <article class="stat-card">
      <div class="stat-value" data-counter data-target="${stat.target}" data-prefix="${stat.prefix}">٠</div>
      <p class="stat-label">${stat.labelAr}<br><span class="fr" dir="ltr" lang="fr">${stat.labelFr}</span></p>
    </article>
  `).join("");
}

function heroPhoneScreen() {
  return `
    <div class="phone-status"><span>٩:٤١</span><span>●●●</span></div>
    <div class="screen-header">
      <strong>قريب منك الآن</strong>
      <span>وجبات محفوظة في الجزائر العاصمة</span>
    </div>
    <div class="screen-search">${icon("pin")} ابحث عن خبز، وجبات، حلويات</div>
    <div class="food-list">
      ${[
        ["🥖", "سلة خبز طازج", "٠٫٨ كم", "-٧٠٪"],
        ["🥗", "وجبة غداء متوازنة", "١٫٤ كم", "-٥٥٪"],
        ["🍊", "صندوق فواكه", "٢٫١ كم", "تبرع"]
      ].map(([emoji, title, distance, tag]) => `
        <div class="food-item">
          <div class="food-img">${emoji}</div>
          <div class="food-info">
            <strong>${title}</strong>
            <div class="food-meta"><span class="meta-pill">${distance}</span><span class="meta-pill price">${tag}</span></div>
          </div>
        </div>
      `).join("")}
    </div>
    <div class="screen-nav"><span class="active">⌂</span><span>⌕</span><span>♡</span><span>☻</span></div>
  `;
}

export function Hero() {
  return `
    <section class="hero" id="home" aria-labelledby="heroTitle">
      <canvas class="particle-canvas" id="particleCanvas" aria-hidden="true"></canvas>
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="hero-badge fade-in"><span aria-hidden="true">🌿</span><span>منصة جزائرية لإنقاذ الطعام</span></div>
          <h1 class="hero-title" id="heroTitle" aria-label="أنقذ الطعام. وفر المال. اصنع الفرق.">
            ${hero.titleLines.map(titleLine).join("")}
          </h1>
          <p class="hero-subtitle fade-in">
            ${hero.subtitleAr}
            <span class="fr" dir="ltr" lang="fr">${hero.subtitleFr}</span>
          </p>
          <div class="wilaya-widget fade-in">
            <label for="wilayaSelect">
              ${icon("pin")}
              <span class="wilaya-label-full">${hero.wilayaLabel}</span>
              <span class="wilaya-label-short">ولايتك</span>
            </label>
            <select id="wilayaSelect" aria-label="اختيار الولاية">${wilayaOptions()}</select>
          </div>
          <div class="hero-actions fade-in">
            <a class="btn btn-primary" href="#download" aria-label="حمّل تطبيق توفير">${icon("download")}${hero.primaryCta}</a>
            <button class="btn btn-ghost" id="openVideo" type="button" aria-label="شاهد كيف تعمل منصة توفير">${icon("play")}${hero.secondaryCta}</button>
          </div>
          <div class="category-pills fade-in" aria-label="فئات الطعام">${categoryPills()}</div>
          <div class="stats-bar fade-in" id="statsBar" aria-label="إحصائيات توفير">${statCards()}</div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="halo"></div>
          <div class="floating-card float-impact"><strong>٧٣٪</strong><span>ثقة المستخدم</span></div>
          <div class="floating-card float-qr">
            <strong>QR</strong><span>تحقق فوري</span>
            <span class="qr-mini"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
          </div>
          <div class="hero-phone-wrap" id="heroPhone">${PhoneFrame(heroPhoneScreen())}</div>
        </div>
      </div>
    </section>
  `;
}
