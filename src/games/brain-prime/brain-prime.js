import isPrimeNum from './func.js';
import playGame from '../../index.js';
import getRandomNum from '../../utills/get-random-num.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundData = () => {
  const num = getRandomNum(2, 3571);
  const answer = isPrimeNum(num) ? 'yes' : 'no';
  return [String(num), answer];
};

export default () => playGame(getRoundData, rules);
