#!/usr/bin/env node
import playGame from '../src/index.js';
import isEvenNum from '../src/games/brain-even.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const getRoundData = () => {
  const num = Math.floor(Math.random() * 101);
  return [num, isEvenNum(num)];
};

playGame(getRoundData, rules);
