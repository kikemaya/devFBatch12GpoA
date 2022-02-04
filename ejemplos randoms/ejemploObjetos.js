'use strict'

function modificar1(arreglo) {
  arreglo[1].dato = 'usuario2';
  arreglo[2][0] = 'jajaja';
  return arreglo
}

function modificar2(arreglo) {
  arreglo[0].dato = 'usuario1';
  arreglo[2][1] = 'jejeje';
  return arreglo
}

const arreglo1 = [{ dato: 'dato1' }, { dato: 'dato2' }, ['info1', 'info2']];
const arreglo2 = arreglo1.map(dato => { return { ...dato } });

const respuesta1 = modificar1(arreglo1);
const respuesta2 = modificar2(arreglo2);

console.log('respuesta1 ', respuesta1); //[{dato: 'dato1'}, {dato: 'usuario2'}];
console.log('respuesta2 ', respuesta2); //[{dato: 'usuario1'}, {dato: 'dato2'}];


