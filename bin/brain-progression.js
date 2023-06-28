#!/usr/bin/env node
import { generateProgression, getProgressionWithHideNum } from '../src/games/brain-progression.js';
import playGame from '../src/index.js';
import getRandomNum from '../src/utills/get-random-num.js';

const rules = 'What number is missing in the progression?';

const getRoundData = () => {
  const progressionLength = getRandomNum(5, 10);
  const startNum = getRandomNum(0, 100);
  const step = getRandomNum(0, 100);

  const progression = generateProgression(startNum, step, progressionLength);
  const replacementIndex = getRandomNum(0, progressionLength - 1);
  const replacementValue = progression[replacementIndex];
  const question = getProgressionWithHideNum(progression, replacementIndex).join(' ');

  return [question, replacementValue];
};

playGame(getRoundData, rules);
