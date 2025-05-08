const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 2.	Lea dos números y calcule el resultado de su suma, resta, multiplicación y división.

readline.question('Enter the first number: ', (num1) => {
  readline.question('Enter the second number: ', (num2) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      console.log('Invalid input. Please enter numbers only.');
      readline.close();
      return;
    }

    const sum = number1 + number2;
    const subtraction = number1 - number2;
    const multiplication = number1 * number2;
    const division = number2 !== 0 ? number1 / number2 : 'Division by zero error';

    console.log(`Sum: ${sum}`);
    console.log(`Subtraction: ${subtraction}`);
    console.log(`Multiplication: ${multiplication}`);
    console.log(`Division: ${division}`);

    readline.close();
  });
});