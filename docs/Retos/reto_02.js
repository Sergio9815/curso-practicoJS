// En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.

errors = [
  {
    name: 'Error 1',
    message: 'Ooops, los lados a y b son distintos.'
  },
  {
    name: 'Error 2',
    message: 'No corresponde a un triángulo isósceles.'
  },
]

let calculate = (lados, base) => {
  let a = Math.pow(lados, 2)
  let b = (Math.pow(base, 2)) / 4
  let altura = parseFloat(Math.sqrt(a - b)).toFixed(2)
  return altura;
}

function alturaIsoceles(lado1, lado2, base) {
  let value = 0

  lado1 === lado2
    ? value = calculate(lado1, base)
    : value = errors[0].message
  lado1 != base
    ? ' '
    : value = errors[1].message
  
  return value
}

result = alturaIsoceles(4, 4, 6)
console.log(result)
