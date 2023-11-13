import playGames from '../index.js';

const gameExercise = 'Answer "yes" if the number is even, otherwise answer "no".';

function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
const theFirstGame = () => {
  const nextNumber = randomNumber(1, 100);
  const question = `Question: ${nextNumber}\nYour answer: `;

  const correctAnswer = nextNumber % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

const go = () => {
  playGames(theFirstGame, gameExercise);
};

export default go;
