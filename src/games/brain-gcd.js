import playGame from '../index.js';
import getRandomNum from '../utills/get-random-num.js';

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

const rules = 'Find the greatest common divisor of given numbers.';

const getRoundData = () => {
  const firstNum = getRandomNum(0, 100);
  const twoNum = getRandomNum(0, 100);
  const question = `${firstNum} ${twoNum}`;

  const highestDivisor = gcd(firstNum, twoNum);

  return [question, String(highestDivisor)];
};

export default () => playGame(getRoundData, rules);
