const jumpButton = document.getElementById("jump-form");
const intakeSection = document.getElementById("intake");
const intakeForm = document.querySelector(".intake-form");
const replyToField = intakeForm?.querySelector("input[name='_replyto']");
const emailField = intakeForm?.querySelector("input[name='email']");

if (jumpButton && intakeSection) {
  jumpButton.addEventListener("click", () => {
    intakeSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (intakeForm && replyToField && emailField) {
  intakeForm.addEventListener("submit", () => {
    replyToField.value = emailField.value.trim();
  });
}
