readlinePromie.js;
readlinePromise.js;
const readline = require('readline-promise').default;

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});
let bar = null;

rlp.questionAsync('what is your Name?').then((answer) => {
  bar = answer;
  console.log('Welcome:' + bar);
});
console.log('\n After');
