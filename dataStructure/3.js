class Set {
  constructor() {
    this.items = {};
  }

  add(element) {
    if (!this.items[element]) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.items[element]) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  has(element) {
    return this.items.hasOwnProperty(element);
  }
}

// Exemplo de uso:
const set = new Set();
set.add(1);
set.add(2);
console.log(set.has(1)); // true
set.remove(1);
console.log(set.has(1)); // false
