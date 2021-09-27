# 메서드(method)

> **객체에 저장된 함수**를 메서드(method)라고 부른다.

- **배열의 요소, 객체의 속성으로 함수를 정의**하여 저장할 수 있다.
- **주소값을 저장**한다.

```jsx
// 배열의 요소
let list = [
  "List",
  25,
  function hello_func() {
    console.log("hello");
  },
];

// 객체의 속성
let obj = {
  name: "Object",
  age: 24,
  hello_func() {
    console.log("hello");
  },
};

// 일반 선언
function hello_func() {
  console.log("hello");
}

hello_func(); // hello => 일반 선언(함수)
obj.hello_func(); // hello => 객체의 속성(메소드)
list[2](); // hello => 배열의 요소(메소드)

console.log(typeof hello_func); // function
console.log(typeof obj.hello_func); // function
console.log(typeof list[2]); // function

console.log(Object.getOwnPropertyDescriptors(list));
/*
{
  '0': {
    value: 'List',
    writable: true,
    enumerable: true,
    configurable: true
  },
  '1': { value: 25, writable: true, enumerable: true, configurable: true },
  '2': {
    value: [Function: hello_func],
    writable: true,
    enumerable: true,
    configurable: true
  },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

console.log(Object.getOwnPropertyDescriptors(obj));
/*
{
  name: {
    value: 'Object',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { 
		value: 24, 
		writable: true, 
		enumerable: true, 
		configurable: true
	},
  hello_func: {
    value: [Function: hello_func],
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
```
<br>

## this

> **메소드에서 객체 내부의 속성(property)값에 접근할 수 있는 지시자**이다.

- 함수 선언 방식에 따라 접근하는 값이 다를 수 있다. ([참고]())

```jsx
// 예제1
let obj = {
  name: "john",
  age: 27,
  hello_func() {
    console.log("hello " + this.name); // "hello john"
  },
};

obj.hello_func();

// 예제2
let user = { name: "john" };
let admin = { name: "admin" };

// hello_func 내 this 값은 런타임에 결정
function hello_func() {
  console.log("hello " + this.name);
}

// user.func 수행할 때, (this == user.name)
user.func = hello_func;
// admin.func 수행할 때, (this == admin.name)
admin.func = hello_func;

user.func(); // hello john
admin.func(); // hello admin
```
<br>
