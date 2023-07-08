'use strict';
const POKEMON_EFFECT_URL = 'https://pokeapi.co/api/v2/pokemon/';

function log(...args) {
  console.log(...args);
}

function getPokemonEffect(pokemonName, effectUrl) {
  return fetch(`${effectUrl}${pokemonName}`)
    .then((res) => res.json())
    .then((data) => {
      const { abilities } = data;
      return fetch(abilities[0].ability.url);
    })
    .then((res) => res.json())
    .then((data) => data.effect_entries[1].effect)
    .catch((error) => console.log(error.message));
}

getPokemonEffect('bulbasaur', POKEMON_EFFECT_URL).then(log);
getPokemonEffect('pikachu', POKEMON_EFFECT_URL).then(log);
getPokemonEffect('ditto', POKEMON_EFFECT_URL).then(log);
