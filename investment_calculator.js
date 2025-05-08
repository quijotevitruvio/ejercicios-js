const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingrese la cantidad de la inversión inicial: ', (initialInvestment) => {
  const investment = parseFloat(initialInvestment);
  if (!isNaN(investment) && investment >= 0) {
    const monthlyInterestRate = 0.02;
    const interestEarned = investment * monthlyInterestRate;
    const totalAmount = investment + interestEarned;

    console.log(`Interés ganado: ${interestEarned.toFixed(2)}`);
    console.log(`Cantidad total después de un mes: ${totalAmount.toFixed(2)}`);
  } else {
    console.log('Entrada inválida. Por favor, ingrese un número positivo válido para el monto de la inversión.');
  }
  readline.close();
});