export function PhoneFrame(content, className = "") {
  return `
    <div class="phone ${className}">
      <div class="phone-screen">
        ${content}
      </div>
    </div>
  `;
}

export function ScreenshotPlaceholder({ label, file }) {
  return `
    <div class="placeholder-screen" data-label="${label}">
      <span>${label}<br>${file}</span>
    </div>
  `;
}
