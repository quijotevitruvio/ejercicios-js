const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

//6.	Lea la cantidad de dinero correspondiente a una compra y calcule el valor del IVA (19%), y el valor total de la factura, si al valor de la compra se le autoriza un descuento del 10% (antes de aplicarle el IVA).

readline.question('Ingrese el monto de la compra: ', (montoCompra) => {
  const compra = parseFloat(montoCompra);

  if (!isNaN(compra) && compra >= 0) {
    const descuento = compra * 0.10;
    const montoConDescuento = compra - descuento;
    const iva = montoConDescuento * 0.19;
    const totalFactura = montoConDescuento + iva;

    console.log(`Valor del IVA: ${iva.toFixed(2)}`);
    console.log(`Monto del descuento: ${descuento.toFixed(2)}`);
    console.log(`Total de la Factura: ${totalFactura.toFixed(2)}`);
  } else {
    console.log('Entrada inválida. Por favor, ingrese un monto válido.');
  }

  readline.close();
});