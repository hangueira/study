'use strict'
// function
// function IS object

function printHello() {
  console.log('Hello');
}

printHello();

function log(message) {
  console.log(message);
}
log('Hello!!!');

function changeName (obj) {
  obj.name = 'coder'
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie.name);

// defalut parameters added in es6
function showMassage(message, from = 'han') {
  console.log(`${message} by ${from}`);
}
showMassage('hi!');

// rest parameters added in es6
function printAll(...args) {
  for(let i = 0; i < args.length; i++ ) {
    console.log(args[i]); 
  }
  for(const i of args) {
    console.log(i);
  }
  args.forEach((i) => console.log(i));
}
printAll('a','b','c');

// return a value
function sum(a, b) {
  return a + b
}
const result = sum(1, 2);
console.log(result);

// early return 하는것이 좋다
// function 은 변수에, 파라미터, 리턴값으로 사용할수 있따!!
const print = function() { // 함수의 이름이 없는것을 annoymous funcion
  console.log('print');
}
print();


// callback function
// 함수를 전달해서 원한면 함수를 불러 -> callback function
function randomQuiz (answer, printYes, printNo) {
  if(answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// annoymous function
const printYes = function() {
  console.log('yes!');
}
const printNo = function() {
  console.log('no!');
}
randomQuiz('love you', printYes, printNo);

// Arrow function
// 항상 이름이 없는 annoymous function

const simplePrint = function () {
  console.log('simplePrint!!!');
}
simplePrint();

const simplePrintNew = () => console.log('simplePrintNew!!!');
simplePrintNew();

const add = (a, b) => a + b;
console.log(`${add(1,2)}`);

// IIFE(함수 즉시 실행)
(function hello() {
  console.log('IIFE');
})();