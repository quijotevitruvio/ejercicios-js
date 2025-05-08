const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 4.	Dadas las 3 notas de un aprendiz, calcule la definitiva de la asignatura si la primera nota tiene un valor del 20%, la segunda del 30% y la última del 50%.

let pesos = [];
let notas = [];
let contadorNotas = 0;
let contadorPesos = 0;

function leerPeso() {
  readline.question(`Ingrese el porcentaje para la nota ${contadorPesos + 1} (de 1 a 100): `, (peso) => {
    const numeroPeso = parseFloat(peso);
    if (!isNaN(numeroPeso) && numeroPeso >= 0 && numeroPeso <= 100) {
      pesos.push(numeroPeso / 100);
      contadorPesos++;
      if (contadorPesos < 3) {
        leerPeso();
      } else {
        leerNota();
      }
    } else {
      console.log("Entrada inválida. Por favor, ingrese un número entre 0 y 100.");
      leerPeso();
    }
  });
}

function leerNota(){
    readline.question(`Ingrese la nota ${contadorNotas + 1}: `, (nota) => {
        const numeroNota = parseFloat(nota);
        if (!isNaN(numeroNota)) {
          notas.push(numeroNota);
          contadorNotas++;
          if (contadorNotas < 3) {
            leerNota();
          } else {
            calcularNotaFinal();
          }
        } else {
          console.log("Entrada inválida. Por favor, ingrese un número.");
          leerNota();
        }
      });
}

function calcularNotaFinal() {
    if (pesos.length !== notas.length) {
        console.log("Error: El número de pesos y notas no coinciden.");
        readline.close();
        return;
    }
    let sumaPonderada = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaPonderada += notas[i] * pesos[i];
    }
    console.log(`La nota final ponderada es: ${sumaPonderada}`);
    readline.close();
}

leerPeso();