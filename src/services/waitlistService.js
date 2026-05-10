import { qs, on } from "../utils/dom.js";

export function initWaitlistForm() {
  const form = qs("#waitlistForm");
  if (!form) return;

  // Find or create success message
  let successMsg = qs(".form__message--success", form);
  if (!successMsg) {
    successMsg = document.createElement("div");
    successMsg.className = "form__message--success";
    form.appendChild(successMsg);
  }

  // Find or create error message
  let errorMsg = qs(".form__message--error", form);
  if (!errorMsg) {
    errorMsg = document.createElement("div");
    errorMsg.className = "form__message--error";
    form.appendChild(errorMsg);
  }

  const submitBtn = qs("button[type='submit']", form) || qs(".form__submit", form);

  on(form, "submit", async (event) => {
    event.preventDefault();
    
    // Original button text
    const originalBtnText = submitBtn ? submitBtn.textContent : "";

    // Loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "جارٍ الإرسال...";
    }
    form.classList.add("form--loading");
    form.classList.remove("form--success", "form--error");

    try {
      // TODO: Replace mock with real waitlist API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success state
      form.classList.remove("form--loading");
      form.classList.add("form--success");
      
      if (submitBtn) {
        submitBtn.textContent = "تم التسجيل ✓";
      }
      successMsg.textContent = "شكراً! سنتواصل معك قريباً.";

      // Reset after 4 seconds
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
      }, 4000);

    } catch (error) {
      // Error state
      form.classList.remove("form--loading");
      form.classList.add("form--error");
      
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
      errorMsg.textContent = "حدث خطأ. حاول مرة أخرى.";

      // Reset error state after 4 seconds
      setTimeout(() => {
        form.classList.remove("form--error");
      }, 4000);
    }
  });
}
