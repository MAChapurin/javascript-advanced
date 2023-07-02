'use strict';

class Person {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }
  say() {
    console.log(`${this.language} ${this.name}`);
  }
}

class Ork extends Person {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  say() {
    console.log('Время людей прошло, наступило время орков');
  }

  attack() {
    console.log(
      `${this.race} ${this.name} наносит удар оружием ${this.weapon}`
    );
  }
}

class Elf extends Person {
  constructor(race, name, language, magic) {
    super(race, name, language);
    this.magic = magic;
  }

  say() {
    console.log('С тобой мой лук!');
  }

  cast() {
    console.log(`${this.race} ${this.name} кастует заклинание ${this.magic}`);
  }
}

const ork = new Ork('Орк', 'Урук Хай', 'Орочье наречие', 'Ржавый меч');
const elf = new Elf('Эльф', 'Леголас', 'Эльфийское наречие', 'Огненная стрела');

ork.say();
ork.attack();
elf.say();
elf.cast();
