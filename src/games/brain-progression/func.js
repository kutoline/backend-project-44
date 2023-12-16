export const generateProgression = (startNum, step, progressionLength) => {
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

export const getProgressionWithHideNum = (progression, replacementIndex) => [...progression.slice(0, replacementIndex), '..', ...progression.slice(replacementIndex + 1)];
