import { qs } from "../utils/dom.js";

export function initAlgeriaClock() {
  const clock = qs("#algeriaClock");
  if (!clock) return;

  const formatter = new Intl.DateTimeFormat("ar-DZ-u-nu-arab", {
    timeZone: "Africa/Algiers",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const update = () => {
    clock.textContent = formatter.format(new Date());
  };

  update();
  setInterval(update, 1000);
}
