import playGames from '../index.js';

const gameExercise = 'What number is missing in the progression?';

function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const getNumberSeries = (start, step, length, stek = []) => {
  let i = 0;
  let nextNumber = start;
  while (i < length) {
    nextNumber += step;
    stek.push(nextNumber);
    i += 1;
  }
};

const theFourthGame = () => {
  const numbers = [];
  const number1 = randomNumber(1, 100);
  const numberStep = randomNumber(1, 11);
  const numberLength = randomNumber(5, 11);

  getNumberSeries(number1, numberStep, numberLength, numbers);

  const replacementNumber = randomNumber(0, numbers.length);
  const invisibleNumber = numbers[replacementNumber];
  const correctAnswer = String(invisibleNumber);
  numbers[replacementNumber] = '..';
  const questionOutput = numbers.join(' ');
  const question = `Question: ${questionOutput}\nYour answer: `;

  return [question, correctAnswer];
};

const go = () => {
  playGames(theFourthGame, gameExercise);
};

export default go;
