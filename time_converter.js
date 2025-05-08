const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Ingrese las horas: ', (horas) => {
  readline.question('Ingrese los minutos: ', (minutos) => {
    readline.question('Ingrese los segundos: ', (segundos) => {
      const h = parseFloat(horas);
      const m = parseFloat(minutos);
      const s = parseFloat(segundos);

      if (!isNaN(h) && !isNaN(m) && !isNaN(s)) {
        const totalSegundos = h * 3600 + m * 60 + s;
        console.log(`Total de segundos: ${totalSegundos}`);
      } else {
        console.log(
          'Entrada inválida. Por favor, ingrese solo números.'
        );
      }

      readline.close();
    });
  });
});