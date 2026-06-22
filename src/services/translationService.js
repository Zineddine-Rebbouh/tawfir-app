import { translations } from "../data/translations.js";
import { qs } from "../utils/dom.js";

const STORAGE_KEY = "tawfir-language";
let currentLang = localStorage.getItem(STORAGE_KEY) || "ar";
let onLanguageChangeCallback = null;

export function getLanguage() {
  return currentLang;
}

export function getTranslations() {
  return translations[currentLang] || translations.ar;
}

/**
 * Get translation by dotted path, e.g. t('hero.subtitle')
 */
export function t(path) {
  const keys = path.split(".");
  let result = getTranslations();
  for (const key of keys) {
    if (result && result[key] !== undefined) {
      result = result[key];
    } else {
      console.warn(`Translation path not found: ${path} for language ${currentLang}`);
      return path;
    }
  }
  return result;
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  
  if (lang === "ar") {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }
}

export function setLanguage(lang) {
  if (!translations[lang]) return;
  localStorage.setItem(STORAGE_KEY, lang);
  applyLanguage(lang);
  if (onLanguageChangeCallback) {
    onLanguageChangeCallback();
  }
}

export function initTranslation(onLanguageChange) {
  onLanguageChangeCallback = onLanguageChange;
  applyLanguage(currentLang);
}
