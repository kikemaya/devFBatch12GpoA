// sloppy mode
'use strict'

const arr1 = ['unos', 'dos', 100, [], false]
const arr2 = arr1
console.log(arr2);

//metodos para trabajar arreglos
arreglo.push("Elemento a anhadir al final") -> añade un elemento al final de la lista
.pop() -> eliminar un elemento al final de la lista
.unshift("Elemento a anhadir al principio") -> añade un elemento al principio de la lista
.shift() -> eliminar un elemento al principio de la lista

arr1[2] = 200
console.log(arr2);
console.log(arr1)

arr1[100] = "este es el numero 100"

//metodo que nos permite iterar por cada elemento de un arreglo y aplicarle lógica
arr1.forEach((element, index) => {
    console.log(index, element)
})

const arr1Clone = arr1.map((element) => {
    console.log(element);
})
