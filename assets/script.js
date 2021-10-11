// My array of question, options and answer objects
var questions = [
  {
    question: "What does DOM stand for?",
    options: [
      "Delete Original Method",
      "Data Ordered Method",
      "Document Object Model",
      "Dinner On Matress",
    ],
    correctOption: 2,
  },
  {
    options: "A JavaScript File Has An Extension of?",
    choices: [".js", ".javascript", ".java", ".xml"],
    correctOption: 0,
  },
  {
    question: "What is the correct syntax character to seperate statements?",
    options: ["}", ";", "]", "#"],
    correctOption: 1,
  },
  {
    question: "What is the correct syntax for an array?",
    options: ["{}", "[]", "**", "//"],
    correctOption: 1,
  },
  {
    question: "A integer is A number with...?",
    choices: [
      "A decimal fraction",
      "A seperation",
      "A personality",
      "No decimal fraction",
    ],
    correctOption: 3,
  },
];

// render question container
const renderQuestionContainer = function () {};

// function to execute when start quiz is called
const startQuiz = function () {
  // console.log("start quiz");
  // remove start container
  // render question container
};

// target the start quiz button
const startButton = document.getElementById("start-quiz");

// add a click event listener and start the quiz
startButton.addEventListener("click", startQuiz);
