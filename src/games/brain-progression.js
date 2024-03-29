import playGame from '../index.js';
import getRandomNum from '../utills/get-random-num.js';

const rules = 'What number is missing in the progression?';

const getProgressionWithHideNum = (progression, replacementIndex) => [...progression.slice(0, replacementIndex), '..', ...progression.slice(replacementIndex + 1)];

const generateProgression = (startNum, step, progressionLength) => {
  const result = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    const current = startNum + (step * i);
    result.push(current);
  }

  return result;
};

const getRoundData = () => {
  const progressionLength = getRandomNum(5, 10);
  const startNum = getRandomNum(0, 100);
  const step = getRandomNum(0, 100);

  const progression = generateProgression(startNum, step, progressionLength);
  const replacementIndex = getRandomNum(0, progressionLength - 1);
  const replacementValue = progression[replacementIndex];
  const question = getProgressionWithHideNum(progression, replacementIndex).join(' ');

  return [question, String(replacementValue)];
};

export default () => playGame(getRoundData, rules);
