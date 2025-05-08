const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lee la distancia (en kilómetros) recorrida por un auto, el tiempo (en horas) y calcula la velocidad (V=D/T).

readline.question('Ingrese la distancia recorrida en kilómetros: ', (distance) => {
  readline.question('Ingrese el tiempo empleado en horas: ', (time) => {
    const d = parseFloat(distance);
    const t = parseFloat(time);

    if (!isNaN(d) && !isNaN(t) && t !== 0) {
      const velocity = d / t;
      console.log(`La velocidad del auto es: ${velocity} km/h`);
    } else if (t === 0) {
        console.log('Error: El tiempo no puede ser cero.');
    }else {
      console.log('Entrada inválida. Por favor, ingrese solo números.');
    }

    readline.close();
  });
});