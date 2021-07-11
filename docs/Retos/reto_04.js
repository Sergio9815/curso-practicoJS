// -------------------------------------------------------------------------
// MEDIA CUADRÁTICA

// Esta se define como la raíz cuadrada del promedio de los elementos al cuadrado.

// Es útil para calcular la media de variables que toman valores negativos y positivos.
// Se suele utilizar cuando el símbolo de la variable no es importante y lo que interesa
// es el valor absoluto del elemento. Por ejemplo, para calcular la media de errores de medida.


const rootMeanSquare = (list) => {
  const squaredNumbers = (list.map((num) => Math.pow(num, 2)))
  const avg = (squaredNumbers.reduce((a = 0, b) => a + b)) / list.length
  return Math.sqrt(avg).toFixed(3)
}

let result = rootMeanSquare([1, -2, 24, -15, 17, 25, 10])
console.log(result);
