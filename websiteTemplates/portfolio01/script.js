// Navigation start
function toggleMobileMenu() {
  const mobileMenuOptions = document.getElementById("mobile-menu-options");
  mobileMenuOptions.classList.toggle("open");
  const burgerMenuLines = document.querySelectorAll(".burger-menu-line");
  burgerMenuLines.forEach((burgerMenuLine) =>
    burgerMenuLine.classList.toggle("open")
  );
}
// Navigation end

function applyColorSchema(colorSchema) {
  Object.keys(colorSchema).forEach((key) => {
    document.documentElement.style.setProperty(`--${key}`, colorSchema[key]);
  });
}

window.addEventListener("message", (event) => {
  if (event.origin !== "http://localhost:3000") return;

  if (event.data.colorSchema) {
    applyColorSchema(event.data.colorSchema);
  }
});
