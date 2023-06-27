#!/usr/bin/env node
import playGame from '../src/index.js';
import { getAllDivisorsNumber, getCommonDivisors, getHighestDivisor } from '../src/games/brain-gcd.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getRoundData = () => {
  const firstNum = Math.floor(Math.random() * 101);
  const twoNum = Math.floor(Math.random() * 101);
  const question = `${firstNum} ${twoNum}`;

  const divisorsFirstNumber = getAllDivisorsNumber(firstNum);
  const divisorsTwoNumber = getAllDivisorsNumber(twoNum);
  const commonDivisors = getCommonDivisors(divisorsFirstNumber, divisorsTwoNumber);
  const highestDivisor = getHighestDivisor(commonDivisors);

  return [question, highestDivisor];
};

playGame(getRoundData, rules);
