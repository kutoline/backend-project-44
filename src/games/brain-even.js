import playGame from '../index.js';
import getRandomNum from '../utills/get-random-num.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEvenNum = (num) => num % 2 === 0;

const getRoundData = () => {
  const num = getRandomNum(0, 100);
  const answer = isEvenNum(num) ? 'yes' : 'no';
  return [num, answer];
};

export default () => playGame(getRoundData, rules);
