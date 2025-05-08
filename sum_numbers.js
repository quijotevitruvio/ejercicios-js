const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1.	Lea tres números y calcule el resultado de su suma.

let numbers = [];
let count = 0;

function readNumber() {
  readline.question(`Enter number ${count + 1}: `, (num) => {
    const number = parseFloat(num);
    if (!isNaN(number)) {
      numbers.push(number);
      count++;
      if (count < 3) {
        readNumber();
      } else {
        const sum = numbers.reduce((a, b) => a + b, 0);
        console.log(`The sum is: ${sum}`);
        readline.close();
      }
    } else {
        console.log("Invalid input. Please enter a number.");
        readNumber();
    }
  });
}

readNumber();