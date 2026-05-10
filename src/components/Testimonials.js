import { testimonials } from "../data/content.js";
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
  return `
    <section class="section grid-bg" id="testimonials" aria-labelledby="testimonialsTitle">
      <div class="container">
        ${SectionHeader({ eyebrow: "آراء المستخدمين", title: "ثقة تبدأ من الحي وتكبر مع كل عملية", id: "testimonialsTitle" })}
        <div class="testimonials-grid">${testimonials.map(testimonialCard).join("")}</div>
      </div>
    </section>
  `;
}
