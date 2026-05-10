import { icon } from "./Icon.js";

export function StarRating() {
  return `<div class="stars" aria-label="خمسة نجوم">${Array.from({ length: 5 }, () => icon("star")).join("")}</div>`;
}
