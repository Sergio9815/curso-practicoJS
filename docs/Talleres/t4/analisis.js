// import { calcularMediana } from "../t3/app.js";

// OBTENER SALARIOS

// const salarioPanama = panama.map((persona) => persona.salary)

// SALARIOS ORDENADOS

// const salariosSorted = salarioPanama.sort((a, b) => a - b)

// MEDIANA GENERAL
// const medianaGeneral = calcularMediana(salariosSorted)
// console.log(`Mediana general de Panama $${medianaGeneral}`);

// MEDIANA DEL TOP 10%
// const spStart = ((salariosSorted.length) * 90) / 100
// const spCount = salariosSorted.length - spStart

// const salariosTop = salariosSorted.splice(spStart, spCount)
// const medianaTop = calcularMediana(salariosTop)
// console.log(`Mediana general de salarios Top en Panama $${medianaTop}`);

// ----------------------------------------------------------------------------------------------------------------
// CAPACIDAD DE CREDITO

const btn_Calcular = document.getElementById('calcular')
const main__result = document.getElementById('main__result')
const LIMIT = 40

btn_Calcular.addEventListener('click', () => {
  const salary = document.getElementById('inputIngresos')
  const expenses = document.getElementById('inputGastos')

  const netIncome = salary.value - expenses.value

  const debtCapacity = ((LIMIT / 100) * netIncome).toFixed(2)
  console.log(debtCapacity);

  main__result.innerText = `🧐Usted tiene una capacidad de endeudamiento de $${debtCapacity}. Por lo tanto, puede asumir una deuda cuya cuota mensual no supere ese monto. 💸`
})