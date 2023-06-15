import readlineSync from 'readline-sync';

const greetingUser = () => {
  const answer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${answer}`);
  console.log('Welcome to the Brain Games!');
};

export default greetingUser;
