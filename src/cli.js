import readlineSync from 'readline-sync';
import { greetingUser } from './utills/greeting-user.js';

const welcomeScript = () => {
  const playerName = readlineSync.question('');
  greetingUser(playerName);
};

export default welcomeScript;
