import { calcularMediana } from "../t3/app.js";


// OBTENER SALARIOS

const salarioPanama = panama.map((persona) => persona.salary)

// SALARIOS ORDENADOS

const salariosSorted = salarioPanama.sort((a, b) => a - b)

// MEDIANA GENERAL
const medianaGeneral = calcularMediana(salariosSorted)
console.log(`Mediana general de Panama $${medianaGeneral}`);

// MEDIANA DEL TOP 10%
const spStart = ((salariosSorted.length) * 90) / 100
const spCount = salariosSorted.length - spStart

const salariosTop = salariosSorted.splice(spStart, spCount)
const medianaTop = calcularMediana(salariosTop)
console.log(`Mediana general de salarios Top en Panama $${medianaTop}`);