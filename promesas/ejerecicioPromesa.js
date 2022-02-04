'use strict'
const axios = require('axios');

axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(pokemons => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons.data.results[5].name}`)
      .then(pokemon => {
        const objetoResult = {
          name: pokemon.data.name,
          abilities: pokemon.data.abilities.map(abilitie => ({
            nombre: abilitie.ability.name,
          })),
          types: pokemon.data.types.map(type => ({
            ...type,
            type: {
              nombre: type.type.name
            }
          }))
        };

        console.log(objetoResult);
        return objetoResult;
      }).catch(error => {
        console.log('error ', error);
      });
  }).catch(error => {
    console.log('error ', error);
  });




axios.get(`https://pokeapi.co/api/v2/pokemon/charizard`)
  .then(pokemon => {
    const arregloResponse = pokemon.data.types.map(type => type.type.name);
    console.log(arregloResponse);
  }).catch(error => {
    console.log('error ', error);
  });
