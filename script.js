const jumpButton = document.getElementById("jump-form");
const intakeSection = document.getElementById("intake");
const intakeForm = document.querySelector(".intake-form");

if (jumpButton && intakeSection) {
  jumpButton.addEventListener("click", () => {
    intakeSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (intakeForm) {
  intakeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = intakeForm.querySelector("button[type='submit']");
    if (submitButton) {
      submitButton.textContent = "Thanks! We'll be in touch.";
      submitButton.disabled = true;
    }
    intakeForm.reset();
    const confirmation = document.createElement("p");
    confirmation.className = "fine";
    confirmation.textContent =
      "Intake received. We'll respond with next steps within 24 hours.";
    intakeForm.appendChild(confirmation);
  });
}
