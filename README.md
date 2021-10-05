# Timed-quiz

A quiz testing coding skills using HTML, CSS and Javascript with a timer.

## Application Flow

- Click on the START button

  - start the timer
  - render the first question on the page

- When user clicks/selects an answer
  - check if the selected answer is correct
    - if answers is wrong then subtract x seconds from the timers time remaining and render next question
    - if answer is correct then render the next question
      - if the question is the last question then display score

## timer

- timer in div, then a <span>with an id for the counter from 50 to 0 etc.
- create questions div section in JS, top bit stays the same where timer etc is apart from timer changing.
- make score the timer?
- questions wrong deduct form timer
- could start timer 50 seconds, then 5 questions 10 second loss each question so you get 0 if all wrong for example.
- if true when answer right move onto render next question, if false and wrong validation, deduct timer value, but it will still go to render next question as it only deducts from timer if wrong, otherwise it just goes to next render either way without deducting form timer if right.
-
- score should be the timer!

- when seeing highscore, need a button to make a function to clear local storage!

- parse data from strings to array of the highscores?
  everytime we play we push to this array.

- if timer reaches 0
  remove the question, build a div with h1 etc
  append to the main.
