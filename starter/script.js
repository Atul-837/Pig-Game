'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
const modal = document.querySelector('.modal');
const winner = document.querySelector('.modal-content');
///////////////////////////////////////////////////////////////
score0.textContent = 0;
score1.textContent = 0;
let scores = [0, 0];
let points = 0;
let activePlayer = 0;
diceEl.classList.add('hidden');

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
const changePlayer = function (activePlayer) {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  let inactive = activePlayer === 1 ? 0 : 1;
  document
    .querySelector(`.player--${inactive}`)
    .classList.remove('player--active');
};
const displayWinner = function (activePlayer) {
  modal.style.display = 'block';
  winner.textContent = `Player ${activePlayer + 1} is the WINNER!!!!!`;
};
btnRoll.addEventListener('click', function () {
  let diceRoll = number();
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceRoll}.png`;
  if (diceRoll !== 1) {
    points = diceRoll + points;
    currentPoints(activePlayer, points);
  } else {
    currentPoints(activePlayer, 0);
    activePlayer = activePlayer === 0 ? 1 : 0;
    changePlayer(activePlayer);
    points = 0;
  }
});
btnHold.addEventListener('click', function () {
  if (scores[activePlayer] < 100) {
    scores[activePlayer] = scores[activePlayer] + points;
    displayScore(activePlayer, scores[activePlayer]);
    points = 0;
    currentPoints(activePlayer, points);
    if (scores[activePlayer] >= 100) displayWinner(activePlayer);
    else {
      activePlayer = activePlayer === 0 ? 1 : 0;
      changePlayer(activePlayer);
    }
  }
});

btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  points = 0;
  activePlayer = 0;
  scores = [0, 0];
  score0.textContent = 0;
  score1.textContent = 0;
  modal.style.display = 'none';
});
