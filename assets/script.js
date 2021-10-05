// selectors
const question = document.querySelector("#question");
const choice1 = document.querySelector("#answer1");
const choice2 = document.querySelector("#answer2");
const choice3 = document.querySelector("#answer3");
const choice4 = document.querySelector("#answer4");

let chosenquestion = [];
let answers = [];
// questions array which questions im on:

// let questions = [
//     {
//         question: "What the question is?"
//         option1: '1',
//         option2: '2',
//         option3: '3',
//         option4: '4',
//     },
// ]

// timer
let counter = 50;

// targets
const counterSpan = document.querySelector("#counter");
const counterDiv = document.querySelector("#counter-div");

const timerTick = function () {
  if (counter < 0) {
    // console.log("Out of time");
    clearInterval(timer);
  } else {
    counterSpan.textContent = counter;
    counter -= 1;
  }
};

// execute every second "timerTick"
const timer = setInterval(timerTick, 1000);

// const timerTick = function () {
//   console.log(counter);
// };

let questionTemplate = `
<h1>Question 1</h1>
        <p id="questions-tag">
          What is the first question?
        </p>
        <a id="answer1" class="button">Answer 1</a>
        <a id="answer2" class="button">Answer 2</a>
        <a id="answer3" class="button">Answer 3</a>
        <a id="answer4" class="button">Answer 4</a>`;

function nextQuestion() {
  const questionsContainer = document.querySelector("#questions");
  // bring the template in to this function and subtitute answers from the questions array.
  // template literals https://www.w3schools.com/js/js_string_templates.asp
  // put let question template
  questionsContainer.innerHTML = questionTemplate;
  // add event listeners for answer buttons
  //
}

// function to check if correct button is pressed for the answer

// event.target (look into this)

// run everytime after that when the person gets the question right and thye ened to go next question, needs to be called gaain to enxt question
// calling function
nextQuestion();

// template literal below
// ${question.title};
