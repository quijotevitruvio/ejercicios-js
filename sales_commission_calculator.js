const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

let ventas = []
let contadorVentas = 0

function obtenerMontoVenta() {
  readline.question(
    `Ingrese el monto de la venta ${contadorVentas + 1}: `,
    (montoVenta) => {
      const venta = parseFloat(montoVenta)
      if (!isNaN(venta)) {
        ventas.push(venta)
        contadorVentas++
        if (contadorVentas < 3) {
          obtenerMontoVenta()
        } else {
          obtenerSueldoBase()
        }
      } else {
        console.log('Entrada inválida. Por favor, ingrese un número válido.')
        obtenerMontoVenta()
      }
    }
  )
}

function obtenerSueldoBase() {
  readline.question('Ingrese el sueldo base: ', (sueldoBase) => {
    const salario = parseFloat(sueldoBase)
    if (!isNaN(salario)) {
      calcularGanancias(salario)
    } else {
      console.log('Entrada inválida. Por favor, ingrese un número válido.')
      obtenerSueldoBase()
    }
  })
}

function calcularGanancias(sueldoBase) {
  const totalVentas = ventas.reduce((suma, venta) => suma + venta, 0)
  const comision = totalVentas * 0.1
  const totalGanancias = sueldoBase + comision

  console.log(`Comisión total ganada: ${comision.toFixed(2)}`)
  console.log(
    `Cantidad total recibida en el mes: ${totalGanancias.toFixed(2)}`
  )
  readline.close()
}

obtenerMontoVenta()
