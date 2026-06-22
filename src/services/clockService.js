import { qs } from "../utils/dom.js";
import { getLanguage } from "./translationService.js";

let intervalId = null;

export function initAlgeriaClock() {
  const clock = qs("#algeriaClock");
  if (!clock) return;

  if (intervalId) {
    clearInterval(intervalId);
  }

  const lang = getLanguage();
  const locale = lang === "ar" ? "ar-DZ-u-nu-arab" : (lang === "fr" ? "fr-DZ" : "en-US");

  const formatter = new Intl.DateTimeFormat(locale, {
    timeZone: "Africa/Algiers",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const update = () => {
    clock.textContent = formatter.format(new Date());
  };

  update();
  intervalId = setInterval(update, 1000);
}

