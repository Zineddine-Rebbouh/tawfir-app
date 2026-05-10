import { ecoTiers } from "../data/content.js";

function tierRow(tier) {
  return `
    <div class="tier-row">
      <span class="tier-dot" style="background:${tier.color};"></span>
      <strong>${tier.ar}</strong>
      <span dir="ltr" lang="fr">${tier.fr}</span>
    </div>
  `;
}

export function EcoScore() {
  return `
    <section class="section grid-bg" id="eco" aria-labelledby="ecoTitle">
      <div class="container eco-grid">
        <div class="eco-copy fade-in">
          <span class="eyebrow">نظام الإيكو سكور</span>
          <h2 class="section-title" id="ecoTitle">الثقة تتحول إلى امتيازات داخل المنصة</h2>
          <p>كل عملية استلام مؤكدة، كل التزام بالوقت، وكل تقرير أثر موثّق يرفع ثقة المستخدم ويمنحه وصولاً أفضل للعروض والطلبات.</p>
          <p class="fr" dir="ltr" lang="fr">Le score combine fiabilité, ponctualité, qualité des transactions et contribution sociale pour protéger tout l'écosystème.</p>
          <div class="tier-table" aria-label="مستويات الإيكو سكور">${ecoTiers.map(tierRow).join("")}</div>
        </div>
        <div class="eco-visual fade-in" id="ecoVisual" aria-label="نقاط الإيكو ٧٣ من ١٠٠">
          <div class="eco-ring-card">
            <div class="eco-ring" id="ecoRing">
              <div class="eco-score-number"><strong id="ecoScoreNumber">٠</strong><span>من ١٠٠</span></div>
            </div>
            <h3>مستوى موثوق</h3>
            <p class="fr" dir="ltr" lang="fr">Score actuel : 73/100</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
