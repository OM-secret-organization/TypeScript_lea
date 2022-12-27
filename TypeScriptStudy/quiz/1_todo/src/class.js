// ES2015 (ES6)

class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성 되었음');
    this.name = name;
    this.age = age;
  }
}

let Lea = new Person('레아', 31);
console.log(lea);

function Person2(name, age) {
  this.name = name;
  this.age = age;
}
