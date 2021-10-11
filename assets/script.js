// My array of question, options and answer objects
const codeQuestions = [
  {
    title: "What does DOM stand for?",
    options: [
      "Delete Original Method",
      "Data Ordered Method",
      "Document Object Model",
      "Dinner On Matress",
    ],
    correctOption: "Document Object Model",
  },
  {
    title: "A JavaScript File Has An Extension of?",
    options: [".js", ".javascript", ".java", ".xml"],
    correctOption: ".js",
  },
  {
    title: "What is the correct syntax character to seperate statements?",
    options: ["}", ";", "]", "#"],
    correctOption: ";",
  },
  {
    title: "What is the correct syntax for an array?",
    options: ["{}", "[]", "**", "//"],
    correctOption: "[]",
  },
  {
    title: "A integer is A number with...?",
    options: [
      "A decimal fraction",
      "A seperation",
      "A personality",
      "No decimal fraction",
    ],
    correctOption: "No decimal fraction",
  },
];

const constructOptions = function (options) {};

const constructQuestionContainer = function (question) {
  console.log(question);
  // contsruct container div
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "container question-container");

  console.log(questionContainer);

  // construct h2 element
  const questionH2 = document.createElement("h2");
  questionH2.setAttribute("class", "question");
  questionH2.textContent = question.title;

  // construct options div
  constructOptions(question.options);
};

// render question container
const renderQuestionContainer = function () {
  console.log(currentQuestion);
  //get current question
  const currentQuestion = codeQuestions[0];
  console.log(currentQuestion);

  //construct html for the question container
  constructQuestionContainer(currentQuestion);
  //append the container to document
};

const removeStartContainer = function () {
  // target start container
  const startContainer = document.getElementById("start-container");
  // remove from document
  startContainer.remove();
};

// function to execute when start quiz is called
const startQuiz = function () {
  // console.log("start quiz");
  // remove start container
  removeStartContainer();
  // render question container
  renderQuestionContainer();
};

// target the start quiz button
const startButton = document.getElementById("start-quiz");

// add a click event listener and start the quiz
startButton.addEventListener("click", startQuiz);
