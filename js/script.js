// Opens and closes the menu on phones.

var button = document.querySelector(".nav-toggle");
var menu = document.querySelector(".primary-nav");

button.addEventListener("click", function () {
  menu.classList.toggle("open");

  // Tells screen readers whether the menu is open or closed
  if (menu.classList.contains("open")) {
    button.setAttribute("aria-expanded", "true");
  } else {
    button.setAttribute("aria-expanded", "false");
  }
});
