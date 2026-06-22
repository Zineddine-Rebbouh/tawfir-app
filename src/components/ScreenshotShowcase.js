import { t } from "../services/translationService.js";
import { PhoneFrame, ScreenshotImage } from "./PhoneFrame.js";
import { SectionHeader } from "./SectionHeader.js";

export function ScreenshotShowcase() {
  const items = t("screenshots.items");
  const [left, center, right] = items;

  return `
    <section class="section dark-section" id="screenshots" aria-labelledby="screensTitle">
      <div class="container">
        ${SectionHeader({
          eyebrow: t("screenshots.eyebrow"),
          title: t("screenshots.title"),
          subtitle: t("screenshots.subtitle"),
          id: "screensTitle"
        })}
        <div class="screenshot-stage fade-in">
          <div class="phone-carousel" aria-label="Carousel">
            <div class="carousel-phone left">${PhoneFrame(ScreenshotImage(left))}</div>
            <div class="carousel-phone center">${PhoneFrame(ScreenshotImage(center))}</div>
            <div class="carousel-phone right">${PhoneFrame(ScreenshotImage(right))}</div>
          </div>
        </div>
      </div>
    </section>
  `;
}


