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

let currentQuestionIndex = 0;

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

const constructAlert = function (className, text) {
  //construct div
  const alertDiv = document.createElement("div");

  alertDiv.setAttribute("class", className);
  alertDiv.textContent = text;
  //

  return alertDiv;
};

const constructForm = function () {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "container score-form");

  const form = document.createElement("form");

  const h2Element = document.createElement("h2");
  h2Element.setAttribute("class", "question");

  h2Element.textContent = "Your score is " + count;

  const formContainer = document.createElement("div");
  formContainer.setAttribute("class", "form-container");

  const formInputDiv = document.createElement("div");
  formInputDiv.setAttribute("class", "form-item");

  const formInput = document.createElement("input");
  formInput.setAttribute("placeholder", "Enter your initials");

  const formButtonDiv = document.createElement("div");
  formButtonDiv.setAttribute("class", "form-item");

  const formButton = document.createElement("button");
  formButton.setAttribute("class", "button-begin");
  formButton.textContent = "Submit";

  formInputDiv.append(formInput);
  formButtonDiv.append(formButton);

  formContainer.append(formInputDiv, formButtonDiv);

  form.append(h2Element, formContainer);
  divContainer.append(form);

  return divContainer;
};

const renderSuccessAlert = function () {
  // contruct alert
  const alert = constructAlert(
    "container answer-alert answer-alert-success",
    "You are correct!"
  );

  // append the alert to the document
  document.getElementById("main-container").appendChild(alert);

  // declare timeout function (to remove the element)
  const afterWait = function () {
    //remove the alert
    alert.remove();

    // kill timeout
    clearTimeout(delay);
  };

  // start a timeout (delay)
  const delay = setTimeout(afterWait, 1000);
};

const renderDangerAlert = function () {
  // contruct alert
  const alert = constructAlert(
    "container answer-alert answer-alert-danger",
    "Incorrect answer!"
  );

  // append the alert to the document
  document.getElementById("main-container").appendChild(alert);

  // declare timeout function (to remove the element)
  const afterWait = function () {
    //remove the alert
    alert.remove();

    // kill timeout
    clearTimeout(delay);
  };

  // start a timeout (delay)
  const delay = setTimeout(afterWait, 1000);
};

const renderScoreForm = function () {
  //remove the last question
  removeQuestionContainer();

  //construct score form
  const form = constructForm();

  //append form to document
  document.getElementById("main-container").append(form);
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
      // time penalty if wrong deduct 10 seconds
      count -= 10;
      renderDangerAlert();
    } else {
      console.log("CORRECT");
      renderSuccessAlert();
    }
    // go to next question
    currentQuestionIndex += 1;

    // render the next question
    removeQuestionContainer();
    renderQuestionContainer();

    // check if last question
    if (currentQuestionIndex < codeQuestions.length) {
      // render the next question
      removeQuestionContainer();
      renderQuestionContainer();
    } else {
      renderScoreForm();
    }
  }
};

const constructQuestionContainer = function (question) {
  // construct container div
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "container question-container");
  questionContainer.setAttribute("id", "question-container");
  questionContainer.setAttribute("data-correct", question.correctOption);
  //

  // construct h2 element
  const questionH2 = document.createElement("h2");
  questionH2.setAttribute("class", "question");
  questionH2.textContent = question.title;

  // construct options div
  const options = constructOptions(question.options);

  //append h2 and options div to container div
  questionContainer.append(questionH2, options);
  // add event listener to listen for click events

  questionContainer.addEventListener("click", verifyAnswer);

  return questionContainer;
};

// render question container
const renderQuestionContainer = function () {
  // get the current question
  const currentQuestion = codeQuestions[currentQuestionIndex];

  // construct the HTML for the question container
  const questionContainer = constructQuestionContainer(currentQuestion);

  // append the container to the document
  document.getElementById("main-container").appendChild(questionContainer);
};

const removeStartContainer = function () {
  // target start container
  const startContainer = document.getElementById("start-container");
  // remove from document
  startContainer.remove();
};

const removeQuestionContainer = function () {
  //target question container
  const questionContainer = document.getElementById("question-container");
  // Then remove it from document
  questionContainer.remove();
};

const startTimer = function () {
  //declare timer
  const timerTick = function () {
    // stop timer when 0
    // stop timer when no more questions
    if (currentQuestionIndex >= codeQuestions.length) {
      clearInterval(timer);
    } else if (count < 0) {
      clearInterval(timer);
      console.log("GAM OVER!");
    } else {
      document.getElementById("countdown").textContent = count;
      count -= 1;
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
