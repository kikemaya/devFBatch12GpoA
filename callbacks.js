'use strict'

//Funcion A
function suma(num1, num2) {
    return num1 + num2
}
//Funcion B/ de orden superior
function calcularSuma(n1, n2, callback) {
    //Se genero un callback
    return callback(n1, n2)
}

console.log(calcularSuma(4, 7, suma))


function nombre(name) {
    return `Hola, ${name}!`
}

function saludar(nombre, callback) {
    return callback(nombre)    
}

console.log(saludar('Paola', nombre))

console.log('Hola')

setTimeout(() => {
    console.log('Esto se ejecuta una vez')
}, 3000)

console.log('Mundo')

let count = 0
setInterval(() => {
    console.log('Esto se ejecuta cada segundo', count++)
}, 1000)


//Un callback, no siempre es una funcion asincrona
// Cuando pasamos un callback solo pasamos la definición de la función y no la ejecutamos en el parámetro. Así, la función contenedora elige cuándo ejecutar el callback.