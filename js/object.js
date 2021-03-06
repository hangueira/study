'use strict'

// object 는 key 와 value의 집합체이다
const name = 'han';
const age = 4;

const han = { name: 'han', age: 4 };

// object 만드는 방법

const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor

// 동일한 내용임
console.log(han.name);
console.log(han['name']);

han['style'] = 'good';
console.log(han['style']);

function printValue(obj , key) {
  console.log(obj[key]);
}

printValue(han, 'name');
printValue(han, 'age');

// constructor function

const person1 = new Person('han',37);

function Person(name, age) {
  this.name = name;
  this.age = age;
} 

console.log(person1.age);

//object 안에 키가 있는지 확인
console.log('age' in han);



// for in , for of
console.log(han);
for (let key in han) {
  console.log(key);
}

const array = [1,2,3,4,5]
for (let key of array) {
  console.log(key);
}

