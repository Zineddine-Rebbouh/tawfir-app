export function SectionHeader({ eyebrow, title, subtitle, id }) {
  return `
    <div class="section-header fade-in">
      ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ""}
      <h2 class="section-title" id="${id}">${title}</h2>
      ${subtitle ? `<p class="section-subtitle fr" dir="ltr" lang="fr">${subtitle}</p>` : ""}
    </div>
  `;
}
