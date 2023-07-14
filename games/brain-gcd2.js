import playGames from '../src/index.js';

const gameExercise = 'Find the greatest common divisor of given numbers.';

function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const theThirdGame = () => {
  let number1 = randomNumber(1, 100);
  let number2 = randomNumber(1, 100);
  const question = `Question: ${number1} ${number2}\nYour answer: `;
  const commonDivisor = () => {
    while (number1 !== 0 && number2 !== 0) {
      if (number1 > number2) {
        number1 %= number2;
      } else {
        number2 %= number1;
      }
    }
    return number1 + number2;
  };

  const correctAnswer = String(commonDivisor());

  return [question, correctAnswer];
};

const go = () => {
  playGames(theThirdGame, gameExercise);
};

export default go;
