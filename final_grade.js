const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 3.  Dadas las 3 notas de un aprendiz, calcule la definitiva de la asignatura.

let notas = [];
let contador = 0;

function leerNota() {
  readline.question(`Ingrese la nota ${contador + 1}: `, (nota) => {
    const numeroNota = parseFloat(nota);
    if (!isNaN(numeroNota)) {
      notas.push(numeroNota);
      contador++;
      if (contador < 3) {
        leerNota();
      } else {
        const suma = notas.reduce((a, b) => a + b, 0);
        const promedio = suma / notas.length;
        console.log(`La nota definitiva es: ${promedio}`);
        readline.close();
      }
    } else {
        console.log("Entrada inválida. Por favor, ingrese un número.");
        leerNota();
    }
  });
}

leerNota();