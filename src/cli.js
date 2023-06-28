import { getName, greetingUser } from './utills/greeting-user.js';

const welcomeScript = () => {
  const playerName = getName();
  greetingUser(playerName);
};

export default welcomeScript;
