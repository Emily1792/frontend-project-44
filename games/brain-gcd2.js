import readlineSync from 'readline-sync';
import theTrigger from '../src/index.js';

const userName = theTrigger();

console.log('Find the greatest common divisor of given numbers.');

function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
};

const theThirdGame = () => {
  for (let i = 0; i < 3; i += 1) {
    let number1 = randomNumber(1, 100);
    let number2 = randomNumber(1, 100);
    console.log(`Question: ${number1} ${number2}`);
    const userResponse = Number(readlineSync.question('Your answer: '));
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
    if (commonDivisor() === userResponse) {
      console.log('Correct!');
    } else {
      console.log(`${userResponse} is wrong answer ;(. Correct answer was ${commonDivisor()}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default theThirdGame;
