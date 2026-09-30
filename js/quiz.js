// Marks the quiz. This file is only loaded on the quiz page.

var quizForm = document.querySelector("#quiz");
var quizResult = document.querySelector("#quiz-result");
var questions = document.querySelectorAll(".question");

// Runs when the Check my answers button is pressed
quizForm.addEventListener("submit", function (event) {
  // Stops the browser reloading the page, which is what a form
  // normally does when you submit it
  event.preventDefault();

  var score = 0;
  var skipped = 0;

  questions.forEach(function (question) {
    var chosen = question.querySelector("input:checked");

    // The label around the right answer, so it can be shown if they got it wrong
    var rightAnswer = question.querySelector('input[value="' + question.dataset.answer + '"]').parentElement;

    // Clear the marking from any previous attempt
    question.classList.remove("correct", "wrong", "unanswered");
    rightAnswer.classList.remove("show-answer");

    if (chosen === null) {
      // Skipped questions get their own colour so they don't look wrong
      skipped = skipped + 1;
      question.classList.add("unanswered");
      rightAnswer.classList.add("show-answer");
    } else if (chosen.value === question.dataset.answer) {
      score = score + 1;
      question.classList.add("correct");
    } else {
      question.classList.add("wrong");
      rightAnswer.classList.add("show-answer");
    }
  });

  var message = "You got " + score + " out of " + questions.length + ".";

  if (skipped > 0) {
    message = message + " You left " + skipped + " unanswered.";
  }

  quizResult.textContent = message;
});

// Runs when the Start again button is pressed
quizForm.addEventListener("reset", function () {
  questions.forEach(function (question) {
    question.classList.remove("correct", "wrong", "unanswered");
  });
  document.querySelectorAll(".show-answer").forEach(function (label) {
    label.classList.remove("show-answer");
  });
  quizResult.textContent = "";
});
