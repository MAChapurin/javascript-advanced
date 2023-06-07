'use strict';

const Person = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Person.prototype.say = function () {
  console.log(`${this.language} ${this.name}`);
};

const Ork = function (name, language, weapon) {
  const ork = new Person('Орк', name, language);
  ork.weapon = weapon;
  return ork;
};

Ork.prototype = Person.prototype;

Ork.prototype.attack = function () {
  console.log(`${this.race} ${this.name} наносит удар оружием ${this.weapon}`);
};

const Elf = function (name, language, magic) {
  const elf = new Person('Эльф', name, language);
  elf.magic = magic;
  return elf;
};

Elf.prototype = Person.prototype;

Elf.prototype.cast = function () {
  console.log(`${this.race} ${this.name} кастует заклинание ${this.magic}`);
};

const ork = new Ork('Урук Хай', 'Орочье наречие', 'Меч');
const elf = new Elf('Леголас', 'Эльфийское наречие', 'Огненная стрела');

ork.say();
ork.attack();
elf.say();
elf.cast();

// console.log(elf instanceof Elf);
// console.log(ork instanceof Ork);
