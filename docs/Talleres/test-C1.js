// 1. Responde las siguientes preguntas

// Es un espacion en memoria que sirve para almacenar datos.
// Al declarar le decimos al SO que debe reservar un espacion en memoria, mientras que al inicializar estamos almacenando un valor en dicha variable.
// Sumar numeros es una operacion matematica, mientras que concatenar strings no es mas que unir dos o mas cadenas de texto para forma una frase.
// Se utiliza el operador de +

// 2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

// firstName = string
// lastName = string
// platziUsername =string
// age = number
// mail = string
// isAdult = boolean
// savedMoney = number
// debts = number

// 3. 

let name = 'Montgomery'
let lastname = 'Burns'
let platziUsername = '@mrBurns'
let age = 104
let email = 'mr.burns@thesimpsons.com'
let isAdult = true
let savedMoney = 16800000000
let debts = 50000
let realMoney = savedMoney - debts

console.log('Nombre completo : ' + firstName + ' ' + lastName);
console.log('Dinero real : ' + realMoney);

// Funciones:

// 1. Responde las siguientes preguntas en la sección de comentarios:

// Instrucciones de programacion encapsuladas o agrupadas en un bloque de codigo que permiten por medio de una o varias entradas obtener una salida. 
// Cuando tenemos instrucciones que se repiten a menudo a lo largo de nuestro codigo.
// Un parametro es el valor que una funcion espera, mientras que un argumento es el valor que se le pasa a una funcion al llamarla.

// 2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

function saludar(name, lastname, nickname) {
  const completeName = name + ' ' + lastname;
  console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

saludar('Montgomery', 'Burns', '@mrBurns')

// Condicionales

// 1. Responde las siguientes preguntas en la sección de comentarios:

// Instrucciones que evaluan si se cumple cierta condicion para ejecutar alguna accion
// Tenemos if, switch, operadores ternarios
// el if evalua si se cumple una condicion.Si el resultado es verdadero ejecuta un codigo, de lo contrario ejecuta otro.
// el switch recibe como parametro el valor a evaluar, y realiza una comparacion con los distintos casos que tiene definidos para llevar a cabo la accion que corresponde.
// Los ternerios funcionan de forma similar al if solo que su sintaxis es diferente.
// Si

// 2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

function planPlatzi(plan = "Basic") {
  tipoDeSuscripcion = plan.toUpperCase()
  if (tipoDeSuscripcion === "FREE") {
    console.log("Solo puedes tomar los cursos gratis");
  }else if (tipoDeSuscripcion === "BASIC") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  }else if (tipoDeSuscripcion === "EXPERT") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  }
}

planPlatzi('EXPERT')

// 3. BONUS

let planes = [
  {name: 'FREE', desc: 'Solo puedes tomar los cursos gratis'},
  {name: 'BASIC', desc: 'Puedes tomar casi todos los cursos de Platzi durante un mes'},
  {name: 'EXPERT', desc: 'Puedes tomar casi todos los cursos de Platzi durante un año'}
]

const planPlatzi = (plan) => {
  var tipoDeSuscripcion = planes.find((element) => element.name === plan.toUpperCase())
  
  if (tipoDeSuscripcion) {
    console.log(tipoDeSuscripcion.desc)
  }
}

planPlatzi('basic')

// Ciclos

// 1. Responde las siguientes preguntas en la sección de comentarios:

// Estructura de codigo que repite instrucciones hasta cumplir con una condicion.
// Estan el for, while, do while, foreach, for in.
// Es un ciclo se se repite indefinidamente.Es un problema debido a que puede causar un mal funcionamiento en el rendimiento de un sitio web.
// Si


// 2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

let i = 0
while (i<5) {
  console.log("El valor de i es: " + i);
  i++
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}

let i = 10
while (i>=2) {
  console.log("El valor de i es: " + i);
  i--
}

// 3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
// Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

function dosMasDos() {
  const num = 2
  const SOLUTION = 4
  let result = 0
  
  do {
    result = prompt('¿Sabes cuanto es ' + num + ' + ' + num + '?')
    if (result != SOLUTION) {
      alert('Ooops, Inténtalo otra vez! 😜')
    } else {
      alert('Excelente, tu respuesta es la correcta! 🎉')
    }
  } while (result != SOLUTION)
}

dosMasDos()

// Listas

// 1. Responde las siguientes preguntas en la sección de comentarios:

// Estructura de datos que permite almecenar valores en una lista de elementos, a los cuales podemos acceder por medio de un indice asignado a la posicion que este ocupa en dicha lista.
// Conjunto de datos relacionados entre si por una clave y su valor.
// Varia de las necesidades de la tarea a realizar.
// Si, a esto le conozco como un arreglo de objetos.

// 2. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function firstElement(elements) {
  console.log(elements[0]);
}

firstElement(['Banana', 'Mango', 'Fresa'])

// 3. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function allElement(fruits) {
  fruits.forEach(element => {
    console.log(element);
  });
}

allElement(['Banana', 'Mango', 'Fresa'])

// 4. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let character = {
  name: 'Rick Sánchez',
  age: 70,
  species: 'Human',
  origin: 'Earth (C-137)'
}

function showCharacter(character) {
  for (const i in character) {
    if (Object.hasOwnProperty.call(character, i)) {
      const element = character[i];
      console.log(i + ': ' + element);
    }
  }
}

showCharacter(character)
