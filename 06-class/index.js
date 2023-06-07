'use strict';

class Car {
  #_mark;
  #_model;
  #_milliage;
  constructor(mark, model, milliage) {
    (this.#_mark = mark), (this.#_model = model), (this.#_milliage = milliage);
  }

  get milliage() {
    return this.#_milliage;
  }

  set milliage(miles) {
    if (typeof miles === 'number' && miles >= 0) {
      this.#_milliage = miles;
    }
  }

  twistMilliage(miles) {
    this.milliage = miles ? miles : 0;
  }

  info() {
    console.log(`${this.#_mark} ${this.#_model} - ${this.#_milliage} miles`);
  }
}

const kia = new Car('Kia', 'Rio', 50000);
kia.info();
kia.milliage = 1000;
console.log(kia.milliage);
kia.twistMilliage(10);
console.log(kia.milliage);
kia.info();

const hyundai = new Car('Hyundai', 'Greta', 200000);
hyundai.info();
hyundai.twistMilliage();
hyundai.info();
