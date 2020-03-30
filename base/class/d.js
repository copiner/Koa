class Animals { 
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let objs = new Animals();
objs.speak(); // Animals {}
let speaks = objs.speak;
speaks(); // undefined

Animals.eat() // class Animals
let eats = Animals.eat;
eats(); // undefined

/*tradition*/

function Animal() { }

Animal.prototype.speak = function() {
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
speak(); // global object

let eat = Animal.eat;
eat(); // global object
