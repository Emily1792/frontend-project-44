import playGames from '../index.js';

const gameExercise = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const prime = (number) => {
  if (number < 2) {
    return false;
  }

  let i = 2;
  while (i < number) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const theFifthGame = () => {
  const number1 = randomNumber(1, 20);
  const question = `Question: ${number1}\nYour answer: `;

  const correctAnswer = prime(number1) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const go = () => {
  playGames(theFifthGame, gameExercise);
};

export default go;
