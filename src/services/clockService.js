import { qs } from "../utils/dom.js";

export function initAlgeriaClock() {
  const clock = qs("#algeriaClock");
  if (!clock) return;

  const update = () => {
    clock.textContent = new Intl.DateTimeFormat("ar-DZ-u-nu-arab", {
      timeZone: "Africa/Algiers",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date());
  };

  update();
  setInterval(update, 1000);
}
