'use strict'
const axios = require('axios');

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
.then(pokemon => {
  axios.get('http://openlibrary.org/search.json?author=asimov')
  .then(libros => {
    const objetoRespuesta = {
      pokemon: pokemon.data.name,
      publisher: libros.data.docs[0].publisher[0]
    };

    console.log('objetoRespuesta ', objetoRespuesta);
    return objetoRespuesta;
  }).catch(error => {
    console.log('Error libro', error.message);
    console.log(error.message);
    return {
      status: 500,
      mensaje: error.message
    };
  });
}).catch(error => {
  console.log('Error pokemon', error.message);
  return {
    status: 500,
    mensaje: error.message
  };
});

// EJERCICIO 1
// Obtener todos los datos de un pokemon y mostrar con un console.log
// los nombres de los types sobre un arreglo
// RESULTADO ['roca', 'hada']

// EJERCICIO 2
// Obtener la informacion del pokemon numero 5 de la lista de pokemons 
// Mostrar con un console.log un objeto con el nombre del pokemon, las habilidades (Solo los nombres)
// y tambien los types

/*
RESULTADO 
{ 
  nombre: 'diancie', 
  abilities: [{
    nombre: limber
  }],
  types: [{
    "type": {
      "name": "normal",
    }
  }]
}
*/
