'use strict'

const { usuariosAsinc } = require('./usuarios');

console.log('Inicio de programa');
console.time('inicio');

usuariosAsinc(1, (usuario) => {
  console.log('Usuario 1', usuario);
});

usuariosAsinc(2, (usuario) => {
  console.log('Usuario 2', usuario);
  console.timeEnd('inicio');
});

console.log('Fin de programa');