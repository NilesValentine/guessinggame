'use strict';


//FUNCTION TO CHECK IF GUESS IS TOO HIGH OR TOO LOW//
let checkGuess = function (high) {
  if (score > 1) {
    document.querySelector(`.message`).textContent = high
      ? `Too high!`
      : `Too low!`;
    score--;
    document.querySelector(`.score`).textContent = score;
  } else {
    document.querySelector(`.message`).textContent = `You Lost!`;
    document.querySelector(`.score`).textContent = 0;
  }
};

//FUNCTION TO GENERATE A RANDOM NUMBER//
let getRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

//GLOBAL VARIABLES REQUIRED//
let score = 20;
let highscore = 0;
let secretNumber = getRandomNumber();

//EVENT HANDLER FOR CLICKING GUESS BUTTON//
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  //IF GUESS INPUT IS EMPTY AND BUTTON CLICKED//
  if (!guess) {
    document.querySelector(`.message`).textContent = `No Guess Made!`;
  }

  //IF GUESS IS CORRECT//
  else if (guess === secretNumber) {
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`.message`).textContent = `Correct Number!`;

    document.querySelector(`body`).style.backgroundColor = '#60b347';

    document.querySelector(`.number`).style.width = `30rem`;

    if (highscore < score) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  }

  //IF GUESS IS HIGH//
  else if (guess > secretNumber) {
    checkGuess(true);
  }

  //IF GUESS IS LOW//
  else if (guess < secretNumber) {
    checkGuess(false);
  }
});

//EVENT HANDLER FOR CLICKING PLAY AGAIN BUTTON//
document.querySelector(`.btn`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = getRandomNumber();

  document.querySelector(`body`).style.backgroundColor = `#000000`;
  document.querySelector(`.number`).style.width = `15rem`;

  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.guess`).value = ``;
});