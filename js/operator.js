'use strict'

console.log('my' + 'cat');
console.log('1' + 2);

const strSum = '1' + 2;
console.log(strSum);
console.log(typeof strSum);

console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);   // 1
console.log(2**3);  // 8

let counter = 2;
let preIncrement = ++counter;
console.log(preIncrement);

preIncrement = counter++;
console.log(preIncrement);
console.log(counter);

preIncrement += preIncrement;
console.log(preIncrement);


// && 모두 true => ture
// || 하나라도 ture -> true
// 심플한 value를 맨 앞으로 하고 복잡한 함수같은것은 뒤로!!
// ! (not)
// == 랑 ===는 차이가 많음 

const name = 'han'
console.log(name === 'han' ? 'yes' : 'no');

switch(name) {
  case 'min':
    console.log('i love min');
    break;
  case 'min2':
    console.log('i love min2');
    break;
  default:
    console.log('my name is han');
    break;
}

let i = 3;

while(i > 0) {
  console.log(`while ${i}`);
  i--;
}

i = 3;
do {
  console.log(`while ${i}`);
  i--;
} while(i > 0);

for(i = 3; i > 0; i-- ) {
  console.log(`while ${i}`);
}

