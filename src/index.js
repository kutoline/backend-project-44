import readlineSync from 'readline-sync';

const correctAnswersToWin = 3;

const playGame = (getRoundData, rules) => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log('Welcome to the Brain Games!');

  console.log(rules);
  for (let correctAnswers = 0; correctAnswers < correctAnswersToWin; correctAnswers += 1) {
    const [question, result] = getRoundData();

    const answer = readlineSync.question(
      `Question: ${question} \nYour answer: `,
    );

    if (answer !== String(result)) {
      console.log(`'${answer}' is wrong answer ;(.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;
