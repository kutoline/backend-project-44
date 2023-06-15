#!/usr/bin/env node
import greetingUser from '../src/cli.js';
import parityCheck from '../src/parity-check.js';

greetingUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
parityCheck();
