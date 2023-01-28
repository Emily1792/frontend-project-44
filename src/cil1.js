import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
const theFirstGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const nextNumber = randomNumber(1, 100);
    console.log(`Question: ${nextNumber}`);
    const userResponse = readlineSync.question('Your answer: ');
    const correctAnswer = nextNumber % 2 === 0 ? 'yes' : 'no';
    if (correctAnswer === userResponse) {
      console.log('Correct!');
    } else {
      console.log(`${userResponse} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default theFirstGame;
