/* Mobile menu toggle (Trial 1, option B).

   Only runs if the toggle button is on the page, so option A can share
   this file without anything happening. */

var toggle = document.querySelector(".nav-toggle");
var nav = document.querySelector(".primary-nav.is-collapsible");

if (toggle && nav) {
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Escape closes the menu and puts focus back on the button.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
}
