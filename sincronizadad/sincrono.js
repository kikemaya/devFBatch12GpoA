'use strict'

// Obtiene todos los valores exportados de un archivo
// const usuarios = require('./usuarios');
// const usuario = usuarios.usuariosSinc();
// console.log('Este es el console log de usuario ', usuario);

//Obtiene un valor especifico del archio exportado
const { usuariosSinc } = require('./usuarios');

console.log('Inicio de programa');
console.time('inicio')

const usuario1 = usuariosSinc(1);
console.log('Usuario 1', usuario1);

const usuario2 = usuariosSinc(2);
console.log('Usuario 2', usuario2);

console.log('Fin del programa');
console.timeEnd('inicio')