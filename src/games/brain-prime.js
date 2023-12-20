import playGame from '../index.js';
import getRandomNum from '../utills/get-random-num.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getRoundData = () => {
  const num = getRandomNum(2, 3571);
  const answer = isPrimeNum(num) ? 'yes' : 'no';
  return [String(num), answer];
};

export default () => playGame(getRoundData, rules);
