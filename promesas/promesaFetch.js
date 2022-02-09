'use strict'

fetch('https://pokeapi.co/api/v2/pokemon/5')
.then(response => response.json())
.then(data => {
  let titulo = document.getElementById('titulo');
  let templateTitulo = `
  <h1>${data.name}</h1>
  <img src=${data.sprites.front_default}>
  `

  titulo.innerHTML = templateTitulo;

  let tabla = document.getElementById('tablaP');
  let templateTabla = ``;

  data.abilities.forEach(info => {
    templateTabla += `<tr><td>${info.ability.name}</td></tr>`
  });

  tabla.innerHTML = templateTabla;

  console.log('data ', data);
}).catch(error => {
  console.log('error ', error.message);
  return error.message
});