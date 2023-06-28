#!/usr/bin/env node
import playGame from '../src/index.js';
import { sum, product, difference } from '../src/games/brain-calc.js';
import getRandomNum from '../src/utills/get-random-num.js';

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

playGame(getRoundData, rules);
