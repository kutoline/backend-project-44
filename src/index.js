import readlineSync from 'readline-sync';
import { getName, greetingUser } from './utills/greeting-user.js';

const playGame = (getRoundData, rules) => {
  const playerName = getName();
  greetingUser(playerName);

  let correctAnswersCounter = 0;
  const numberCorrectAnswersToWin = 3;

  console.log(rules);

  while (correctAnswersCounter < numberCorrectAnswersToWin) {
    const [question, result] = getRoundData();

    const answer = readlineSync.question(
      `Question: ${question} \nYour answer: `,
    );

    if (answer !== String(result)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${playerName}!`);
      break;
    }

    console.log('Correct!');
    correctAnswersCounter += 1;
  }

  if (correctAnswersCounter === numberCorrectAnswersToWin) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default playGame;
