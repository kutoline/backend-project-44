import readlineSync from 'readline-sync';

const welcomeScript = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Welcome to the Brain Games!');
};

export default welcomeScript;
