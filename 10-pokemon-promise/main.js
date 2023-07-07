'use strict';

function getPokemonEffect(name) {
  const URL = 'https://pokeapi.co/api/v2/pokemon/';
  fetch(`${URL}${name}`)
    .then((res) => res.json())
    .then((data) => {
      const { abilities } = data;
      return fetch(abilities[0].ability.url);
    })
    .then((res) => res.json())
    .then((data) => data.effect_entries[1].effect)
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));
}

getPokemonEffect('bulbasaur');
getPokemonEffect('pikachu');
getPokemonEffect('ditto');
