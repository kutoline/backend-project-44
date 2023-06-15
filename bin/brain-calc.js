#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingUser from '../src/cli.js';

greetingUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const operators = ['-', '*', '+'];
let correctAnswersCounter = 0;
const numberCorrectAnswersToWin = 3;

while (correctAnswersCounter < numberCorrectAnswersToWin) {
  const operandFirst = Math.floor(Math.random() * 101);
  const operandTwo = Math.floor(Math.random() * 101);
  const currentOperator = operators[Math.floor(Math.random() * operators.length)];
  let currentResult = 0;
  console.log(currentOperator);
  if (currentOperator === '-') {
    currentResult = operandFirst - operandTwo;
  } else if (currentOperator === '+') {
    currentResult = operandFirst + operandTwo;
  } else if (currentOperator === '*') {
    currentResult = operandFirst * operandTwo;
  }

  const answer = readlineSync.question(`Question: ${operandFirst} ${currentOperator} ${operandTwo} `);
  if (Number(answer) !== currentResult) {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.\n'
        + 'Let\'s try again, Bill!');
    break;
  }

  console.log(`Your answer: ${answer}`);
  correctAnswersCounter += 1;
}
