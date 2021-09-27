# 함수

## 8-1. 함수

> 다수의 명령문을 코드 블록으로 감싸서 하나의 실행 단위로 만든 **코드의 집합**이다.

- **유사한 동작**을 하는 코드를 하나로 묶는다.
- **범용성**을 확대시킨다.
- **정의, 호출** 부분으로 구성된다.
- 가급적 한 가지 일만 하는 것이 좋다.
- 매개 변수는 최대 3개 이내로 작성하는 것을 권장한다.

```jsx
// 함수 정의
function 함수명(매개변수, ...) {
	expression;
	return result; // 반환 결과, 없으면 생략 가능
}

// 함수 호출
함수명(인자, ...);
```

### 정의

- **함수 선언식, 함수 표현식, 화살표 함수** 3가지 방법으로 정의할 수 있다.
    - **함수 선언식 :** 코드가 실행되기 전에 로드된다. 즉, 호이스팅([참고](https://github.com/Im-hass/TIL/blob/master/JavaScript/03_%EB%B3%80%EC%88%98%2C%20%EC%83%81%EC%88%98.md#3-3-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85hosting)) 된다.
    - **함수 표현식 :** 인터프리터가 해당 코드 줄에 도달 할 때만 로드된다. 변수 이름으로 호출할 수 있다.
    - **화살표 함수 :** 함수 표현식의 단축 표현이다. ES6부터 추가되었다.

```jsx
// 함수 선언식(Function Declarations)
function func (arg1, arg2, ...argN) {
  expression;
}

function add(x, y) {
  return x + y;
}

// 함수 표현식(Function Expressions)
const func = function (arg1, arg2, ...argN) {
  expression;
};

const add = function (x, y) {
  return x + y;
};

// 화살표 함수 (Arrow Function)
const func = (arg1, arg2, ...argN) => expression;

const add = (x, y) => x + y;
```

### 호출

- JavaScript는 **매개 변수와 인수의 개수가 일치하는지 확인하지 않**기 때문에 에러가 발생하지 않는다.
- ES6부터 undefined 변수가 들어올 경우 **초기값을 지정**할 수 있다.
- 매개 변수를 선언하지 않아도(dynamic parameters) **내부 변수** `arguments[]`**를 통해 인자에 접근**할 수 있다. ( 단, 화살표 함수에는 `arguments`가 없다 )
- 일반적으로 매개 변수를 선언하여(default value) 사용한다.

```jsx
// 1. default value
function print_add(x, y = 10) {
  console.log(x + y);
}

print_add(10, 20, 30); // 30
print_add(10, 20); // 30
print_add(10); // 20
print_add(); // NaN

// 2. dynamic parameters
function print_min() {
  // console.log(arguments); // { '0': 10, '1': 20 }
  console.log(arguments[0] - arguments[1]);
}

print_min(10, 20, 30); // -10
print_min(10, 20); // -10
print_min(10); // NaN
print_min(); // NaN
```

### 반환

- return 후의 코드는 수행되지 않는다.
- `break`의 역할을 하기도 한다.
- **기본값은 undefined를 반환**한다.

```jsx
function add(x, y) {
  return x + y;
  console.log("hello!"); // 실행하지 않음
}

function dummy() {}
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(add(10, 20)); // 30
console.log(dummy()); // undefined
console.log(checkAge(14)); // false
console.log(checkAge(20)); // true
```
<br>

## 8-2. 재귀 함수

> **함수 스스로 자신을 호출**하여 계속적으로 반복되는 함수이다.

- 특정 조건이 됐을 때 종료하는 **exit code가 반드시 필요**하다.
- **stack 자료구조**를 사용하여 함수의 호출을 관리한다.

```jsx
// 1. basic recursive function
function recursive(num) {
  if (num == 0) return 0;
  return num + recursive(num - 1); // 3 + (2 + (1 + 0)))
}

console.log(recursive(3)); // 6

// 2. factorial function
function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}

const num = 3;
let result = factorial(num);
console.log(`The factorial of ${num} is ${result}`); // The factorial of 3 is 6
```
<br>

## 8-3. 콜백 함수, 고차 함수

### 콜백 함수(Callback Function)

> **다른 함수에 매개 변수로 전달**되어 수행되는 함수이다.

### 고차 함수(Higher-order Function)

> **매개 변수를 통해 함수를 받아 호출하는 함수**. 즉, **콜백 함수를 실행하는 함수**이다.

- 매개 변수로 **콜백 함수의 주소값이 들어간다.**
- 자세한 설명은 [여기](https://github.com/Im-hass/TIL/blob/master/JavaScript/13_%EA%B3%A0%EC%B0%A8%20%ED%95%A8%EC%88%98.md) 참고.

```jsx
// 콜백 함수 add
function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

// 고차 함수 calculator
function calculator(callback, x, y) {
  return callback(x, y);
}

console.log(calculator(add, 7, 3)); // 10
console.log(calculator(sub, 7, 3)); // 4
console.log(calculator(mul, 7, 3)); // 21
console.log(calculator(div, 7, 3)); // 2.33333...
```
<br>

## 8-4. call by value, call by reference

### call by value

> **값에 대한 복사**이다.

- 함수 내에서 매개 변수의 값을 변경 시켜도 **원본에 영향을 끼치지 않는다.**
- **원시 타입(primituve type)을 매개 변수로 넘겼을 때 발생**한다.

```jsx
let a = 1;
let add = function (b) {
  b = b + 1;
  console.log(b); // 2
};

add(a);
console.log(a); // 1
```

### call by reference

> **주소에 대한 복사**이다.

- 함수 내에서 매개 변수의 값을 변경 시키면 **원본에도 영향을 끼친다.**
- **객체 타입(object type)을 매개 변수로 넘겼을 때 발생**한다.

```jsx
var a = { 
  v: 1,
};

var add = function (b) {
  b.v = b.v + 1;
  console.log(b.v); // 2
};

add(a);
console.log(a.v); // 2
```
<br>

## 8-5. `Object.getOwnPropertyDescriptors()`

> **객체에 대한 정보**를 자세히 볼 수 있다.

```jsx
function add_1(x, y) {
	return x + y;
}

console.log(Object.getOwnPropertyDescriptors(add_1));
/*
{
  length: { value: 2, writable: false, enumerable: false, configurable: true },
  name: {
    value: 'add_1',
    writable: false,
    enumerable: false,
    configurable: true
  },
  arguments: {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
  },
  caller: {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
  },
  prototype: {
    value: add_1 {},
    writable: true,
    enumerable: false,
    configurable: false
  }
}
*/
```
<br>
