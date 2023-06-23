'use strict';

class Billing {
  constructor(amount = 0) {
    this.amount = amount;
  }

  calculateTotal() {
    return this.amount;
  }
}

class FixBilling extends Billing {}

class HourBilling extends Billing {
  calculateTotal(hours) {
    return this.amount * hours;
  }
}

class ItemBilling extends Billing {
  calculateTotal(elements) {
    return this.amount * elements.length;
  }
}

const simpleBill = new FixBilling();
console.log(simpleBill.calculateTotal());
const hourBill = new HourBilling(30);
console.log(hourBill.calculateTotal(3));
const itemsBill = new ItemBilling(10);
console.log(itemsBill.calculateTotal(['good1', 'good2', 'good3']));
