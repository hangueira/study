'use strict'

// class : template
// object : instance of a class
// introduced in ES6

// class declarations
class Person {
  // constructor(생성자)
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name}:hello`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  // set은 값을 정해야 하기 때문에 value가 필요하다
  set age(value) {
    // if(value < 0) {
    //   throw Error('age can not be nagative')
    // }
    this._age = value < 0 ? 0 : value;
  }
}
// 중요 !! 30 Line this.age -> get age()
// age -> set age(value) 를 가리키게 된다
// 37 Line value는 this.age가 아닌 
// 36 Line set 을 호출하게 됨 
// 그래서 getter와 setter 안에 쓰는 변수를
// this._age 로 변경하여 사용한다


// 객체지향적 관점에 사람의 나이가 -1이 될수가 없다
// 이런것을 넓은 관점에서 보완해주는것이 getter, setter
const user1 = new User('Steve', 'Job' , -1);
console.log(user1.age);

// 상속과 다형성

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drowing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    // 부모의 draw를 그리면서 따로 그릴수도 있음
    super.draw();
    console.log('triange!!!!');
  }
  getArea() {
    return this.width * this.height / 2;
  }
}

const retangle = new Rectangle(20, 20, 'blue');
retangle.draw();
console.log(retangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// checking class instanceOf
console.log(retangle instanceof Rectangle);

//java script mdn object