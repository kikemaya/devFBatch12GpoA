'use strict'
const axios = require('axios');

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
.then(pokemon => {
  console.log('pokemon ', pokemon);

  pokemon.data.stats.forEach((stat, index) => {
    stat.base_stat += 1;
    stat.nuevoDato = `dato numero ${index}`;
  });
  
  console.log('pokemon ', pokemon.data.stats);
  return pokemon.data.stats
}).catch(error => {
  console.log('error ', error.message);
  return error.message
});

