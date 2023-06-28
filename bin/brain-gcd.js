#!/usr/bin/env node
import playGame from '../src/index.js';
import { getAllDivisorsNumber, getCommonDivisors, getHighestDivisor } from '../src/games/brain-gcd.js';
import getRandomNum from '../src/utills/get-random-num.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getRoundData = () => {
  const firstNum = getRandomNum(0, 100);
  const twoNum = getRandomNum(0, 100);
  const question = `${firstNum} ${twoNum}`;

  const divisorsFirstNumber = getAllDivisorsNumber(firstNum);
  const divisorsTwoNumber = getAllDivisorsNumber(twoNum);
  const commonDivisors = getCommonDivisors(divisorsFirstNumber, divisorsTwoNumber);
  const highestDivisor = getHighestDivisor(commonDivisors);

  return [question, highestDivisor];
};

playGame(getRoundData, rules);
