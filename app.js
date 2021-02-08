require('./models/index') // connect to DB
const prompt = require('prompt-sync')(); //read from console

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);

module.exports = app