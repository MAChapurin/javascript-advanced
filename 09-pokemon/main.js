'use strict';

async function getPokemonEffect(pokemon, cb) {

  const URL = 'https://pokeapi.co/api/v2/pokemon/';

  let xhr = new XMLHttpRequest();
  xhr.open('GET', `${URL}${pokemon}`);
  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = function () {
    const newXhr = new XMLHttpRequest();
    const abilityURL = xhr.response.abilities[0].ability.url;
    newXhr.open('GET', abilityURL);
    newXhr.responseType = 'json';
    newXhr.send();
    newXhr.onload = function () {
      const effect = newXhr.response.effect_entries[1].effect;
      cb(effect)
    };
  };
}

function log(data) {
  console.log(data);
}

getPokemonEffect('ditto', log);
getPokemonEffect('pikachu', log);
getPokemonEffect('bulbasaur', log);
