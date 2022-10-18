//variables for random nubers
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// variables
const question = document.getElementById("question");
const form = document.getElementById("form");
const input = document.getElementById("input");
const displayScore = document.getElementById("score");

// question text
question.innerText = `What is ${num1} multiply by ${num2}?`;
// corrrect answer
const correctAnswer = num1 * num2;
// score updating from localStorage
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}
// display score
displayScore.innerText = `score: ${score}`;

// Evenet listener for form submit
form.addEventListener("submit", () => {
  // to covert string to number we can add + sign
  const userAns = +input.value;
  if (userAns === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

// local storage function setting item and make it string
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
