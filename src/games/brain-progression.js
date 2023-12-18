import playGame from '../index.js';
import getRandomNum from '../utills/get-random-num.js';

const getProgressionWithHideNum = (progression, replacementIndex) => [...progression.slice(0, replacementIndex), '..', ...progression.slice(replacementIndex + 1)];

const generateProgression = (startNum, step, progressionLength) => {
  let currentNum = startNum;

  const result = [];
  result.push(currentNum);

  for (let i = 1; i < progressionLength; i += 1) {
    const nextNum = currentNum + step;
    result.push(nextNum);
    currentNum = nextNum;
  }

  return result;
};

const rules = 'What number is missing in the progression?';

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
