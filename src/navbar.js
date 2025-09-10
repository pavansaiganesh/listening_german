function initNavbar() {
  const toggleButton = document.getElementById("themeToggle");
  const htmlElement = document.documentElement;

  toggleButton.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlElement.setAttribute("data-bs-theme", newTheme);
    toggleButton.textContent = newTheme === "dark" ? "🌙" : "🌞";
  });
}

// Load navbar.html into the page
fetch("navbar.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("navbar").innerHTML = html;
    initNavbar(); // run the toggle logic after navbar is loaded
  });
