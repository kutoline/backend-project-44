import getRandomNum from '../utills/get-random-num.js';
import playGame from '../index.js';

const sum = (operandOne, operandTwo) => operandOne + operandTwo;

const product = (operandOne, operandTwo) => operandOne * operandTwo;

const difference = (operandOne, operandTwo) => operandOne - operandTwo;

const calculateResult = (operandFirst, operandTwo, operator) => {
  const operations = {
    '-': difference,
    '*': product,
    '+': sum,
  };

  return operations[operator](operandFirst, operandTwo);
};

const operators = ['-', '*', '+'];
const rules = 'What is the result of the expression?';

const getRoundData = () => {
  const operandFirst = getRandomNum(0, 100);
  const operandTwo = getRandomNum(0, 100);
  const operatorIndex = getRandomNum(0, operators.length - 1);

  const operator = operators[operatorIndex];
  const question = `${operandFirst} ${operator} ${operandTwo}`;
  const result = calculateResult(operandFirst, operandTwo, operator);

  return [question, String(result)];
};

export default () => playGame(getRoundData, rules);
