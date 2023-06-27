import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');

export const greetingUser = (name) => {
  console.log(`Hello, ${name}`);
  console.log('Welcome to the Brain Games!');
};
