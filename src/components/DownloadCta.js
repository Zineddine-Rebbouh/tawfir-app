import { icon } from "./Icon.js";

export function DownloadCta() {
  return `
    <section class="section download-cta" id="download" aria-labelledby="downloadTitle">
      <div class="container download-grid">
        <div class="download-copy fade-in">
          <span class="eyebrow">حمّل التطبيق الآن</span>
          <h2 id="downloadTitle">حمّل توفير الآن مجاناً</h2>
          <p class="fr" dir="ltr" lang="fr">Disponible sur iOS et Android. Téléchargement gratuit.</p>
          <div class="store-buttons">
            <a class="store-btn" href="#" aria-label="تحميل من App Store">${icon("apple")}<span>متوفر على<strong>App Store</strong></span></a>
            <a class="store-btn" href="#" aria-label="تحميل من Google Play">${icon("googlePlay")}<span>متوفر على<strong>Google Play</strong></span></a>
          </div>
        </div>
        <div class="waitlist-card fade-in">
          <h3>أدخل بريدك للحصول على التحديثات</h3>
          <form class="waitlist-form" id="waitlistForm">
            <div class="input-row">
              <input type="email" name="email" placeholder="name@example.com" aria-label="البريد الإلكتروني" required>
              <button type="submit">أعلمني</button>
            </div>
          </form>
          <div class="form-success" id="formSuccess" role="status">تم تسجيلك بنجاح. سنرسل لك آخر التحديثات قريباً.</div>
        </div>
      </div>
    </section>
  `;
}
