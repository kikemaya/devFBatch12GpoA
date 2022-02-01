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

console.log(calcularSuma(6, 56, suma))