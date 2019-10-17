/*
Mix-ins
*/

var calculatorMixin = Base => class extends Base {
  calc() { }
};

var randomizerMixin = Base => class extends Base {
  randomize() { }
};

//mix-ins

class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
