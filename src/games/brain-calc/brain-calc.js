import getRandomNum from '../../utills/get-random-num.js';
import { difference, product, sum } from './func.js';
import playGame from '../../index.js';

const operators = ['-', '*', '+'];
const rules = 'What is the result of the expression?';

const getRoundData = () => {
  const operandFirst = getRandomNum(0, 100);
  const operandTwo = getRandomNum(0, 100);
  const operatorIndex = getRandomNum(0, operators.length - 1);

  const operator = operators[operatorIndex];
  const question = `${operandFirst} ${operator} ${operandTwo}`;
  let result;

  if (operator === '+') {
    result = sum(operandFirst, operandTwo);
  }

  if (operator === '*') {
    result = product(operandFirst, operandTwo);
  }

  if (operator === '-') {
    result = difference(operandFirst, operandTwo);
  }

  return [question, String(result)];
};

export default () => playGame(getRoundData, rules);
