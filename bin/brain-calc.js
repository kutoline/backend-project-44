#!/usr/bin/env node
import playGame from '../src/index.js';
import { sum, product, difference } from '../src/games/brain-calc.js';

const operators = ['-', '*', '+'];
const rules = 'What is the result of the expression?';

const getRoundData = () => {
  const operandFirst = Math.floor(Math.random() * 101);
  const operandTwo = Math.floor(Math.random() * 101);
  const operatorIndex = Math.floor(Math.random() * operators.length);

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
