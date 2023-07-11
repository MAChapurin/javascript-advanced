'use strict';
const POKEMON_EFFECT_URL = 'https://pokeapi.co/api/v2/pokemon/';

function log(...args) {
  console.log(...args);
}

function getPokemonEffect(pokemonName) {
  return fetch(`${POKEMON_EFFECT_URL}${pokemonName}`)
    .then((res) => res.json())
    .then((data) => {
      const { abilities } = data;
      return fetch(abilities[0].ability.url);
    })
    .then((res) => res.json())
    .then((data) => data.effect_entries[1].effect)
    .catch((error) => console.log(error.message));
}

getPokemonEffect('bulbasaur').then(log);
getPokemonEffect('pikachu').then(log);
getPokemonEffect('ditto').then(log);
