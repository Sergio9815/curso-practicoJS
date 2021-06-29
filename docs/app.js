// --- AGRUPAR console.logs ---
//ABRIR console.group("NOMBRE")
//CERRAR console.groupEnd()

import { alturaIsoceles } from './Retos/reto_02.js';

//  CUADRADO
// ---------------------------------------------------------------------------

let sqrPerimetro = (lado) => lado * 4
let sqrArea = (lado) => Math.pow(lado, 2)

const result = document.getElementById('main__figuras-result-cuadrado')

function perimetroCuadrado() {
  const lado = document.getElementById('inputCuadrado')
  let data = sqrPerimetro(parseFloat(lado.value))

  result.innerHTML = `${data.toFixed(2)} cm`
}

function areaCuadrado() {
  const lado = document.getElementById('inputCuadrado')
  let data = sqrArea(parseFloat(lado.value))

  result.innerHTML = `${data.toFixed(2)} cm^2`
}

//  TRIANGULO 
// ---------------------------------------------------------------------------

let triPerimetro = (lado1, lado2, base) => lado1 + lado2 + base
let triArea = (base, altura) => (base * altura) / 2

const result2 = document.getElementById('main__figuras-result-triangulo')

function perimetroTriangulo() {
  const ladoA = document.getElementById('inputTrianguloA')
  const ladoB = document.getElementById('inputTrianguloB')
  const ladoC = document.getElementById('inputTrianguloC')

  let data = triPerimetro(parseFloat(ladoA.value), parseFloat(ladoB.value), parseFloat(ladoC.value))
  result2.innerHTML = `${data.toFixed(2)} cm`
}

function areaTriangulo() {
  const ladoC = document.getElementById('inputTrianguloC')
  const altura = document.getElementById('inputTriangulo')

  let data = triArea(parseFloat(ladoC.value), parseFloat(altura.value))
  result2.innerHTML = `${data.toFixed(2)} cm^2`
}

//  CIRCULOS 
// ---------------------------------------------------------------------------

const PI = Math.PI

let cirDiametro = (radio) => radio * 2

let cirPerimetro = (radio) => {
  let diametro = cirDiametro(radio)
  return diametro * PI
}

let cirArea = (radio) => Math.pow(radio, 2) * PI

const result3 = document.getElementById('main__figuras-result-circulo')

function perimetroCirculo() {
  const radio = document.getElementById('inputCirculo')

  let data = cirPerimetro(parseFloat(radio.value))
  result3.innerHTML = `${data.toFixed(2)} cm`
}

function areaCirculo() {
  const radio = document.getElementById('inputCirculo')

  let data = cirArea(parseFloat(radio.value))
  result3.innerHTML = `${data.toFixed(2)} cm^2`
}

//  TRIANGULO ISÓSCELES
// ---------------------------------------------------------------------------
const btn = document.getElementById('btn-TrIcBase')

btn.addEventListener('click', function alturaISO() {

  const result4 = document.getElementById('main__figuras-result-trIso')

  const ladoA = document.getElementById('inputTrIcA')
  const ladoB = document.getElementById('inputTrIcB')
  const ladoC = document.getElementById('inputTrIcBase')

  const data = alturaIsoceles(parseFloat(ladoA.value), parseFloat(ladoB.value), parseFloat(ladoC.value))
  
  data >= 0
    ? result4.innerHTML = `${data} cm`
    : alert(data)
})