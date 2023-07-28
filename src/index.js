import readlineSync from 'readline-sync';
import { getName, greetingUser } from './utills/greeting-user.js';

const playGame = (getRoundData, rules) => {
  const playerName = getName();
  greetingUser(playerName);

  const correctAnswersToWin = 3;

  console.log(rules);
  for (let correctAnswers = 0; correctAnswers < correctAnswersToWin; correctAnswers += 1) {
    const [question, result] = getRoundData();

    const answer = readlineSync.question(
      `Question: ${question} \nYour answer: `,
    );

    if (answer !== String(result)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;
