/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
import readlineSync from 'readline-sync';
import theTrigger from '../src/index.js';

const userName = theTrigger();

console.log('What is the result of the expression?');
function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const randomOperators = () => {
  const operators = ['+', '-', '*'];
  const indexOperators = Math.floor(Math.random() * operators.length);
  return operators[indexOperators];
};

const theSecondGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNumber(1, 100);
    const number2 = randomNumber(1, 100);
    const operatorRand = randomOperators();
    console.log(`Question: ${number1} ${operatorRand} ${number2}`);
    const userResponse = Number(readlineSync.question('Your answer: '));
    const calculation = () => {
      let result;
      switch (operatorRand) {
        case '+':
          return number1 + number2;
        case '-':
          return number1 - number2;
        case '*':
          return number1 * number2;
        default:
          break;
      }
      return result;
    };
    if (calculation() === userResponse) {
      console.log('Correct!');
    } else {
      console.log(`${userResponse} is wrong answer ;(. Correct answer was ${calculation()}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default theSecondGame;
