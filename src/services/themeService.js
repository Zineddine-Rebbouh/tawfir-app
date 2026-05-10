import { qs, on } from "../utils/dom.js";

const STORAGE_KEY = "tawfir-theme";

function applyTheme(mode) {
  const isDark = mode === "dark";
  document.documentElement.classList.toggle("dark-mode", isDark);
  qs("#themeToggle")?.setAttribute("aria-label", isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن");
}

export function initTheme() {
  applyTheme(localStorage.getItem(STORAGE_KEY) || "light");

  on(qs("#themeToggle"), "click", () => {
    const mode = document.documentElement.classList.contains("dark-mode") ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, mode);
    applyTheme(mode);
  });
}
