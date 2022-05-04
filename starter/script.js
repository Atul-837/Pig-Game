'use strict';
let score = 0;
let points = 0;
// const player1 = document.querySelector('.player--0');
// const player2 = document.querySelector('.player--1');
const number = function () {
  return Math.floor(Math.random() * 6 + 1);
};
const currentPoints = function (points) {
  document.querySelector('.current-score').textContent = points;
};
const displayScore = function (thatScore) {
  document.querySelector('.score').textContent = thatScore;
};

const image = function (num) {
  const img = document.querySelector('.dice');
  if (num) return (img.src = `dice-${num}.png`);
};
document.querySelector('.btn--roll').addEventListener('click', function () {
  let diceRoll = number();
  image(diceRoll);
  if (diceRoll !== 1) points = diceRoll + points;
  else points = 0;
  currentPoints(points);
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  score = score + points;
  points = 0;
  currentPoints(points);
  displayScore(score);
  //   player1.classList.remove('player--active');
  //   if (!player2.classList.contains('player--active')) {
  // player2.classList.add('player--active');
  //   }
});
