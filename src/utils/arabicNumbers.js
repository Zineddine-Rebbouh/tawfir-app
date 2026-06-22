import { getLanguage } from "../services/translationService.js";

const ARABIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

export function toArabicNumber(value) {
  const lang = getLanguage();
  if (lang !== "ar") return String(value);
  return String(value).replace(/\d/g, (digit) => ARABIC_DIGITS[Number(digit)]);
}

export function formatSignedArabic(value, prefix = "") {
  const lang = getLanguage();
  if (lang !== "ar") {
    return `${prefix}${value}`;
  }
  return `${prefix}${toArabicNumber(value)}`;
}

export function easeOutQuart(progress) {
  return 1 - Math.pow(1 - progress, 4);
}

