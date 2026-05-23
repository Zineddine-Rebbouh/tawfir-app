export function PhoneFrame(content, className = "") {
  return `
    <div class="phone ${className}">
      <div class="phone-screen">
        ${content}
      </div>
    </div>
  `;
}

export function ScreenshotImage({ label, file }) {
  return `
    <img src="/public/screenshots/${file}" alt="${label}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
  `;
}
