"use strict";

const Person = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Person.prototype.say = function () {
  console.log(`${this.language} ${this.name}`);
};

const Ork = function (race, name, language, weapon) {
  Person.call(this, race, name, language)
  this.weapon = weapon;
};

Object.setPrototypeOf(Ork.prototype, Person.prototype);

Ork.prototype.attack = function () {
  console.log(`${this.race} ${this.name} наносит удар оружием ${this.weapon}`);
};

const Elf = function (race, name, language, magic) {
  Person.call(this, race, name, language);
  this.magic = magic;
};

Object.setPrototypeOf(Elf.prototype, Person.prototype);

Elf.prototype.cast = function () {
  console.log(`${this.race} ${this.name} кастует заклинание ${this.magic}`);
};

const ork = new Ork("Орк", "Урук Хай", "Орочье наречие", "Меч");
const elf = new Elf("Эльф", "Леголас", "Эльфийское наречие", "Огненная стрела");

ork.say();
ork.attack();
elf.say();
elf.cast();

console.log(elf instanceof Elf);
console.log(ork instanceof Ork);
console.log(ork);
console.log(elf);