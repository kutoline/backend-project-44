#!/usr/bin/env node
import playGame from '../src/index.js';
import {getHighestDivisor} from "../src/games/brain-gcd.js";

const rules = 'What number is missing in the progression?';

const getRoundData = () => {
  const firstNum = Math.floor(Math.random() * 101);
  const twoNum = Math.floor(Math.random() * 101);
  const question = `${firstNum} ${twoNum}`;
  Math.floor(Math.random() * (max - min + 1)) + min
  const divisorsFirstNumber = getAllDivisorsNumber(firstNum);
  const divisorsTwoNumber = getAllDivisorsNumber(twoNum);
  const commonDivisors = getCommonDivisors(divisorsFirstNumber, divisorsTwoNumber);
  const highestDivisor = getHighestDivisor(commonDivisors);

  return [question, highestDivisor];
};

playGame(getRoundData, rules);
