// Opens and closes the menu on phones.

var menuButton = document.querySelector(".menu-button");
var mainMenu = document.querySelector(".main-menu");

menuButton.addEventListener("click", function () {
  mainMenu.classList.toggle("open");

  // Tells screen readers whether the menu is open or closed
  if (mainMenu.classList.contains("open")) {
    menuButton.setAttribute("aria-expanded", "true");
  } else {
    menuButton.setAttribute("aria-expanded", "false");
  }
});
