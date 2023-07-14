import readlineSync from 'readline-sync';

const playGames = (newGame, gameExercise) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameExercise);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = newGame();
    const userAnswer = readlineSync.question(question);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default playGames;
