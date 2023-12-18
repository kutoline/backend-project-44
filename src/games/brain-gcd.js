import playGame from '../index.js';
import getRandomNum from '../utills/get-random-num.js';

const getAllDivisorsNumber = (num) => {
  const divisors = [];

  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};

const getCommonDivisors = (collFirst, collTwo) => {
  const divisors = [];

  for (let i = 0; i < collFirst.length; i += 1) {
    if (collTwo.includes(collFirst[i])) {
      divisors.push(collFirst[i]);
    }
  }

  return divisors;
};

const getHighestDivisor = (coll) => {
  let result = 0;

  for (let i = 0; i < coll.length; i += 1) {
    if (result < coll[i]) {
      result = coll[i];
    }
  }

  return result;
};

const rules = 'Find the greatest common divisor of given numbers.';

const getRoundData = () => {
  const firstNum = getRandomNum(0, 100);
  const twoNum = getRandomNum(0, 100);
  const question = `${firstNum} ${twoNum}`;

  const divisorsFirstNumber = getAllDivisorsNumber(firstNum);
  const divisorsTwoNumber = getAllDivisorsNumber(twoNum);
  const commonDivisors = getCommonDivisors(divisorsFirstNumber, divisorsTwoNumber);
  const highestDivisor = getHighestDivisor(commonDivisors);

  return [question, String(highestDivisor)];
};

export default () => playGame(getRoundData, rules);
