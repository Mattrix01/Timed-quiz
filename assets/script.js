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

//timer set to count of question, 10 seconds for each.
let count = codeQuestions.length * 10;

const constructOptions = function (options) {
  const optionsContainer = document.createElement("div");
  optionsContainer.setAttribute("class", "options-container");
  for (let i = 0; i < options.length; i++) {
    // get the currrent option from array
    const option = options[i];
    // create button
    const optionButton = document.createElement("button");
    optionButton.setAttribute("class", "option-item");
    optionButton.setAttribute("name", "option");
    optionButton.setAttribute("data-option", option);
    optionButton.textContent = option;

    //append to options container
    optionsContainer.appendChild(optionButton);
  }

  return optionsContainer;
};

const verifyAnswer = function (event) {
  console.log("verifyAnswer");
  const target = event.target;
  const currentTarget = event.currentTarget;
  // check if click is from button ONLY
  if (target.getAttribute("name") === "option") {
    // get the option user clciked on
    const userOption = target.getAttribute("data-option");
    //get the correct option for the question
    const correctOption = currentTarget.getAttribute("data-correct");
    console.log(userOption, correctOption);
    // verify the two
    if (userOption !== correctOption) {
      console.log("WRONG");
    } else {
      console.log("CORRECT");
    }
  }
};

const constructQuestionContainer = function (question) {
  console.log(question);
  // contsruct container div
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "container question-container");
  questionContainer.setAttribute("data-correct", question.correctOption);
  //

  // construct h2 element
  const questionH2 = document.createElement("h2");
  questionH2.setAttribute("class", "question");
  questionH2.textContent = question.title;

  // construct options div
  const options = constructOptions(question.options);
  console.log(options);

  //append h2 and options div to container div
  questionContainer.append(questionH2, options);
  // add event listener to listen for click events

  questionContainer.addEventListener("click", verifyAnswer);

  return questionContainer;
};

// render question container, called from clicking start button
const renderQuestionContainer = function () {
  //get current question
  const currentQuestion = codeQuestions[0];
  console.log(currentQuestion);

  //construct html for the question container
  const questionContainer = constructQuestionContainer(currentQuestion);
  //append the container to document
  document.getElementById("main-container").appendChild(questionContainer);
};

const removeStartContainer = function () {
  // target start container
  const startContainer = document.getElementById("start-container");
  // remove from document
  startContainer.remove();
};

const startTimer = function () {
  //declare timer
  const timerTick = function () {
    // check if the countdown has reached 0
    if (count >= 0) {
      //render the countdown time in the document
      document.getElementById("countdown").textContent = count;
      count -= 1;
    } else {
      //render game over container when timer less than 0
      console.log("gameover");
      clearInterval(timer);
    }
  };

  // declare timer tick function
  const timer = setInterval(timerTick, 1000);
};

// function to execute when start quiz is called
const startQuiz = function () {
  // console.log("start quiz");
  // remove start container
  removeStartContainer();
  // render question container
  renderQuestionContainer();

  //start timer
  startTimer();
};

// target the start quiz button
const startButton = document.getElementById("start-quiz");

// add a click event listener and start the quiz
startButton.addEventListener("click", startQuiz);
