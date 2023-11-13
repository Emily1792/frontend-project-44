import playGames from '../index.js';

const gameExercise = 'What is the result of the expression?';

function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const randomOperators = () => {
  const operators = ['+', '-', '*'];
  const indexOperators = Math.floor(Math.random() * operators.length);
  return operators[indexOperators];
};

const calculation = (meaning1, meaning2, operatorRand) => {
  let result;
  switch (operatorRand) {
    case '+':
      return meaning1 + meaning2;
    case '-':
      return meaning1 - meaning2;
    case '*':
      return meaning1 * meaning2;
    default:
      break;
  }
  return result;
};

const theSecondGame = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const operatorRand = randomOperators();
  const question = `Question: ${number1} ${operatorRand} ${number2}\nYour answer: `;

  const correctAnswer = String(calculation(number1, number2, operatorRand));

  return [question, correctAnswer];
};

const go = () => {
  playGames(theSecondGame, gameExercise);
};

export default go;
