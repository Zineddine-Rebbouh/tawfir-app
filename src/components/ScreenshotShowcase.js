import { screenshots } from "../data/content.js";
import { PhoneFrame, ScreenshotImage } from "./PhoneFrame.js";
import { SectionHeader } from "./SectionHeader.js";

export function ScreenshotShowcase() {
  const [left, center, right] = screenshots;

  return `
    <section class="section dark-section" id="screenshots" aria-labelledby="screensTitle">
      <div class="container">
        ${SectionHeader({
          eyebrow: "واجهة التطبيق",
          title: "تجربة استخدام سلسة ومبتكرة",
          subtitle: "تصميم عصري يضع سهولة الاستخدام في المقام الأول، ليضمن لك تنقلاً سريعاً وتجربة ممتعة في كل خطوة.",
          id: "screensTitle"
        })}
        <div class="screenshot-stage fade-in">
          <div class="phone-carousel" aria-label="معرض لقطات التطبيق">
            <div class="carousel-phone left">${PhoneFrame(ScreenshotImage(left))}</div>
            <div class="carousel-phone center">${PhoneFrame(ScreenshotImage(center))}</div>
            <div class="carousel-phone right">${PhoneFrame(ScreenshotImage(right))}</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

