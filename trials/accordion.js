// Trial 2, option B. Opens and closes a timeline entry when its
// button is pressed. Does the same job as the details tag.

var timelineButtons = document.querySelectorAll(".timeline-button");

timelineButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // The writing for this entry is the next thing after the button
    var panel = button.nextElementSibling;

    if (panel.hidden) {
      panel.hidden = false;
      button.setAttribute("aria-expanded", "true");
    } else {
      panel.hidden = true;
      button.setAttribute("aria-expanded", "false");
    }
  });
});
