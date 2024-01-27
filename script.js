'use strict';

// document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = `🎉Correct number!`;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener(`click`, function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there's no guess
  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No number!`;

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `🎉 Correct number!`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When the guess is bigger than the secret number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📈 Too high!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `💥 You lost the game!`;
      document.querySelector('.score').textContent = 0;
    }

    // When the guess is below the secret number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📉 Too low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `💥 You lost the game!`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
