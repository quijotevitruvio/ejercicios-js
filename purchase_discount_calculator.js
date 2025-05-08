const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  'Ingrese el monto total de la compra: ',
  (totalPurchaseAmount) => {
    const purchaseAmount = parseFloat(totalPurchaseAmount);

    if (!isNaN(purchaseAmount) && purchaseAmount >= 0) {
      const discountPercentage = 0.15;
      const discountAmount = purchaseAmount * discountPercentage;
      const finalAmount = purchaseAmount - discountAmount;
      console.log(`El monto final a pagar es: ${finalAmount.toFixed(2)}`);
    } else {
      console.log('Entrada inválida. Por favor, ingrese un monto válido.');
    }
    readline.close();
  }
);