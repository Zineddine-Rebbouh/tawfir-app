import { screenshots } from "../data/content.js";
import { PhoneFrame, ScreenshotPlaceholder } from "./PhoneFrame.js";
import { SectionHeader } from "./SectionHeader.js";

export function ScreenshotShowcase() {
  const [left, center, right] = screenshots;

  return `
    <section class="section dark-section" id="screenshots" aria-labelledby="screensTitle">
      <div class="container">
        ${SectionHeader({
          eyebrow: "لقطات التطبيق",
          title: "تجربة هاتفية واضحة لكل دور",
          subtitle: "Remplacez les zones ci-dessous par les captures réelles de votre application Flutter.",
          id: "screensTitle"
        })}
        <div class="screenshot-stage fade-in">
          <div class="phone-carousel" aria-label="معرض لقطات التطبيق">
            <div class="carousel-phone left">${PhoneFrame(ScreenshotPlaceholder(left))}</div>
            <div class="carousel-phone center">${PhoneFrame(ScreenshotPlaceholder(center))}</div>
            <div class="carousel-phone right">${PhoneFrame(ScreenshotPlaceholder(right))}</div>
          </div>
        </div>
        <div class="screenshot-note fade-in">
          <p>لقطات إضافية جاهزة للاستبدال داخل نفس النمط: <span class="fr" dir="ltr" lang="fr">eco_score_profile.png, charity_request.png, support_chat.png</span></p>
          <p class="fr" dir="ltr" lang="fr">Recherchez chaque libellé de capture et remplacez le bloc d'écran par une image avec object-fit: cover.</p>
        </div>
      </div>
    </section>
  `;
}
