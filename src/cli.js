import readlineSync from 'readline-sync';
import { playGame } from './index.js';

const playerName = readlineSync.question('');
greetingUser(playerName);
