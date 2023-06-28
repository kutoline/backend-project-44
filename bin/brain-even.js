#!/usr/bin/env node
import playGame from '../src/index.js';
import isEvenNum from '../src/games/brain-even.js';
import getRandomNum from '../src/utills/get-random-num.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const getRoundData = () => {
  const num = getRandomNum(0, 100);
  const answer = isEvenNum(num) ? 'yes' : 'no';
  return [num, answer];
};

playGame(getRoundData, rules);
