'use strict'

const URL = 'https://pokeapi.co/api/v2/';

let xhr = new XMLHttpRequest();
xhr.open('GET', `${URL}pokemon/ditto`);
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
  const newXhr = new XMLHttpRequest();
  const abilityURL = xhr.response.abilities[0].ability.url;
  newXhr.open('GET', abilityURL);
  newXhr.responseType = 'json';
  newXhr.send();
  newXhr.onload = function() {
    console.log(newXhr.response.effect_entries[1].effect);
  }
};

