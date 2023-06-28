#!/usr/bin/env node
import isPrimeNum from '../src/games/brain-prime.js';
import playGame from '../src/index.js';
import getRandomNum from '../src/utills/get-random-num.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundData = () => {
  const num = getRandomNum(2, 3571);
  const answer = isPrimeNum(num) ? 'yes' : 'no';
  return [String(num), answer];
};

playGame(getRoundData, rules);
