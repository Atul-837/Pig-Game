'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const img = document.querySelector('.dice');
///////////////////////////////////////////////////////////////
score0.textContent = 0;
score1.textContent = 0;
const scores = [0, 0];
let points = 0;
let activePlayer = 0;
img.classList.add('hidden');
////////////////////////////////////////////////////////////////

const number = function () {
  return Math.floor(Math.random() * 6 + 1);
};
const currentPoints = function (ap, points) {
  document.querySelector(`#current--${ap}`).textContent = points;
};
const displayScore = function (ap, thatScore) {
  document.querySelector(`#score--${ap}`).textContent = thatScore;
};

btnRoll.addEventListener('click', function () {
  let diceRoll = number();
  img.classList.remove('hidden');
  img.src = img.src = `dice-${diceRoll}.png`;
  if (diceRoll !== 1) {
    points = diceRoll + points;
    currentPoints(activePlayer, points);
  } else {
    currentPoints(activePlayer, 0);
    activePlayer = activePlayer === 0 ? 1 : 0;
    points = 0;
  }
});
btnHold.addEventListener('click', function () {
  scores[activePlayer] = scores[activePlayer] + points;
  displayScore(activePlayer, scores[activePlayer]);
  points = 0;
  currentPoints(activePlayer, points);
  activePlayer = activePlayer === 0 ? 1 : 0;
});
