'use strict';

class Car {
  #mark;
  #model;
  #milliage;
  constructor(mark, model, milliage) {
    this.#mark = mark;
    this.#model = model;
    this.#milliage = milliage;
  }

  get milliage() {
    return this.#milliage;
  }

  set milliage(miles) {
    if (typeof miles === 'number' && miles >= 0) {
      this.#milliage = miles;
    }
  }

  info() {
    console.log(`${this.#mark} ${this.#model} - ${this.#milliage} miles`);
  }
}

const kia = new Car('Kia', 'Rio', 50000);
kia.info();
kia.milliage = 1000;
kia.info();

const hyundai = new Car('Hyundai', 'Greta', 200000);
hyundai.info();
hyundai.milliage = 0;
hyundai.info();
