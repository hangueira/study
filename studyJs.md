# js 정리

---

## html 에 js 넣기

```js
<script src="js/main.js"></script>
```

---

## js 공식사이트(mdn)

[mdn 공식사이트](https://developer.mozilla.org/ko/)

---

## defer vs async(중요)

### 1. html head에 js 넣을경우

#### - pasing html -> fetching js -> excute js-> parsing html

#### \* 인터넷이 느린경우 사용자가 보는시간이 오래걸림

#### \* script 를 head에 넣는거 좋지 않음

### 2. html body에 js 넣을경우

#### - pasing html -> fetching js -> excute js

#### \* user가 webpage를 빨리 본다는 장점

#### \* 그러나 동작하지 않을수 있음

### 3. html head에 js 넣으며 async option

#### - pasing html -> fetching js(parsing 병렬) -> excute js(이때는 html block)-> parsing html

#### \* javascript가 무거울경우 사용자가 보는게 늦어짐

#### \* javascript가 순서가 중요하다면 사용해선 안됨

### 4. html head에 js 넣으며 defer option

#### - pasing html -> fetching js(parsing 병렬) -> parsing html -> excute js

#### \* 제일 좋다 이거 쓰자...ㅋㅋ

```js
<script src="js/main.js" defer></script>
```

---

## cont vs let (es6)

- let : value 변경가능 (mutable)
- const : value 변경불가능 (imutable)
- var는 사용하지 말자!!(변수 선언하기전에 값을 넣어도 됨)
- hoisting : 어디에서 선언하던 제일 위로 올려서 선언됨
- var hosting 도 위와 같은 이유로 사용이 가능
- block level 에서 선언해도 var는 전역에서 사용가능
- babel 사용해서 es6-> es 5,4 로 낮추어 사용 가능

---

## use strict

- javascript 비상식적인 못쓰게 막는다
- 변수 정의도 하지 않고 쓴다거나.. 하는경우
- vanilla js 에서는 제일 위에 선언하고 쓰자!

---

## variable types

- primitive : number, string, boolean, null, undefiend, symbol
- objective : function, first-class function

## log 찍어보자

```js
const count = 17;
const size = 1.7;
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);
```

```js
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

Infinity - Infinity;
NaN;
```
