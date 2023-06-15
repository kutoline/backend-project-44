import readlineSync from 'readline-sync';

const parityCheck = () => {
  let correctAnswersCounter = 0;
  const numberCorrectAnswersToWin = 3;

  while (correctAnswersCounter < numberCorrectAnswersToWin) {
    const num = Math.floor(Math.random() * 100);
    const isParityNum = num % 2 === 0 ? 'yes' : 'no';

    const answer = readlineSync.question(`Question: ${num}\n`);

    if (answer !== isParityNum) {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.\n'
          + 'Let\'s try again, Bill!');
      break;
    }

    correctAnswersCounter += 1;
    console.log('Correct!');
  }

  if (correctAnswersCounter === numberCorrectAnswersToWin) {
    console.log('Congratulations, Bill!');
  }
};

export default parityCheck;
