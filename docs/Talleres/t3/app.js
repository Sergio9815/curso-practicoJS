//  PROMEDIO, MODA, MEDIANA
// ---------------------------------------------------------------------------

function calcularPromedio(list) {
  let nums = list.toString().split(",").map((value) => parseInt(value));
  let totalSuma = nums.reduce((acumlador, value) => acumlador + value)
  let promedio = totalSuma / nums.length
  return promedio
}

let result = calcularPromedio('1,14,151,98')

console.log(`El promedio es: ${result}`);