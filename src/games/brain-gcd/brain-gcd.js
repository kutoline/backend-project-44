#!/usr/bin/env node
import playGame from '../../index.js';
import { getAllDivisorsNumber, getCommonDivisors, getHighestDivisor } from './func.js';
import getRandomNum from '../../utills/get-random-num.js';

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

export default () => playGame(getRoundData, rules);
