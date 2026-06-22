import { t } from "../services/translationService.js";
import { SectionHeader } from "./SectionHeader.js";
import { StarRating } from "./StarRating.js";

function testimonialCard(testimonial) {
  const quoteClass = testimonial.typewriter ? "quote typewriter" : "quote";

  return `
    <article class="testimonial-card fade-in">
      ${StarRating()}
      <blockquote class="${quoteClass}">${testimonial.quote}</blockquote>
      <div class="testimonial-person">
        <span class="avatar">${testimonial.initials}</span>
        <div><strong>${testimonial.name}</strong><span>${testimonial.role}</span></div>
      </div>
    </article>
  `;
}

export function Testimonials() {
  const items = t("testimonials.items");
  return `
    <section class="section grid-bg" id="testimonials" aria-labelledby="testimonialsTitle">
      <div class="container">
        ${SectionHeader({ eyebrow: t("testimonials.eyebrow"), title: t("testimonials.title"), id: "testimonialsTitle" })}
        <div class="testimonials-grid">${items.map(testimonialCard).join("")}</div>
      </div>
    </section>
  `;
}

