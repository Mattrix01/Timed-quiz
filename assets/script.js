// selectors
const question = document.querySelector("#question");
const choice1 = document.querySelector("#answer1");
const choice2 = document.querySelector("#answer2");
const choice3 = document.querySelector("#answer3");
const choice4 = document.querySelector("#answer4");

let chosenquestion = [];
let answers = [];

let questions = [
    {
        question: "What the question is?"
        option1: '1',
        option2: '2',
        option3: '3',
        option4: '4',
    },
]

// timer
let counter = 50;

// targets
const counterSpan = document.querySelector("#counter");
const counterDiv = document.querySelector("#counter-div");

// execute every second "timerTick"
const timer = setInterval(timerTick, 1000);

const timerTick = function () {
  if (counter < 0) {
    console.log("Out of time");
    clearInterval(timer);
  } else {
    counterSpan.textContent = counter;
    counter -= 1;
  }
};


// const timerTick = function () {
//   console.log(counter);
// };
