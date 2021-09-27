# Array(배열)

> **여러 개체(Entity) 값을 순차적으로 나열한 자료 구조**이다.

- **다양한 종류의 데이터를 관리**하는데 최적화된 자료 구조이다.
- **메모리가** 연속적인 밀집 배열(dense array)가 아닌 **비 연속적인 희소 배열(sparse array)이다.**
- **요소(Element) : 배열**에 들어있는 **값**
- **인덱스(index) :** 배열의 **요소에 접근**할 때 사용되는 값
<br>

## 12-1. 선언/접근/실체

### 선언

- `new Array()`, `new Array(size)`, `[]`, `[value, ...]`

```jsx
let arr = new Array();
let arr1 = new Array(10);
let arr2 = [];
let fruits = ["apple", "orange", "melon"];

console.log(arr); // []
console.log(arr1); // [ <10 empty items> ]
console.log(arr2); // []
console.log(fruits); // [ 'apple', 'orange', 'melon' ]
```

### 접근

- `Array[index]`

    ```jsx
    let fruits = ["apple", "orange", "melon"];

    console.log(fruits); // [ 'apple', 'orange', 'melon' ]
    console.log(fruits[0]); // apple
    console.log(fruits[1]); // orange
    console.log(fruits[2]); // melon

    fruits[1] = "kiwi";
    console.log(fruits); // [ 'apple', 'kiwi', 'melon' ]
    ```

- 다양한 반복문을 사용해 value에 접근할 수 있다.
    - `for(Array.length)` **: index로 접근**
    - `for ... of` **: element로 접근**
    - `for ... in` **: key로 접근**

    ```jsx
    let fruits = ["apple", "orange", "melon"];

    // 1. for (index)
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]); // apple\norange\nmelon
    }

    // 2. for ... of (element) 
    for (let fruit of fruits) {
      console.log(fruit); // apple\norange\nmelon
    }

    // 3. for ... in (key) 
    for (let key in fruits) {
      console.log(fruits[key]);// apple\norange\nmelon
    }
    ```

### 실체

- JavaScript에서 배열은 **Hash기반(key:value)의 객체**이다. **메모리가 연속되어 있지 않다.**

```jsx
let nums = [];

nums.push("one");
nums.push("two");

console.log(nums.length); // 2
console.log(nums); // [ 'one', 'two' ]

nums["once"] = "1111";
nums["twice"] = "2222";
nums[2] = "three";

console.log(nums.length); // 3
console.log(nums); // [ 'one', 'two', 'three', once: '1111', twice: '2222' ]

console.log(Object.getOwnPropertyDescriptors(nums));
/*
{
  '0': {
    value: 'one',
    writable: true,
    enumerable: true,
    configurable: true
  },
  '1': {
    value: 'two',
    writable: true,
    enumerable: true,
    configurable: true
  },
  '2': {
    value: 'three',
    writable: true,
    enumerable: true,
    configurable: true
  },
  length: { value: 3, writable: true, enumerable: false, configurable: false }, 
  once: {
    value: '1111',
    writable: true,
    enumerable: true,
    configurable: true
  },
  twice: {
    value: '2222',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
```
<br>

## 12-2. 대표 속성/메서드

### 크기 확인

- `Array.lenght`

```jsx
let fruits = ["apple", "orange", "melon"];

console.log(fruits); // [ 'apple', 'orange', 'melon' ]
console.log(fruits.length); // 3
```

### 타입 확인

- `Array.isArray(value)`

```jsx
let num = 123.456;
let str = "Here I am!";
let fruits = ["apple", "orange", "melon"];

console.log(Array.isArray(num)); // false
console.log(Array.isArray(str)); // false
console.log(Array.isArray(fruits)); // true
```

### 삽입/삭제

- **후입선출(LIFO, Last In First Out) 구조**이다.
- **배열의 뒤쪽에서 조작**
    - **삽입 :** `Array.push(element)`
    - **삭제 :** `Array.pop()`

    ```jsx
    let fruits = ["apple", "orange", "melon"];

    console.log(fruits.push("watermelon")); // 4
    console.log(fruits); // [ 'apple', 'orange', 'melon', 'watermelon' ]

    console.log(fruits.pop()); // watermelon
    console.log(fruits); // [ 'apple', 'orange', 'melon' ]
    ```

- **배열의 앞쪽에서 조작**
    - **삽입 :** `Array.unshift(element)`
    - **삭제 :** `Array.shift()`

    ```jsx
    let fruits = ["apple", "orange", "melon"];

    console.log(fruits.unshift("watermelon")); // 4
    console.log(fruits); // [ 'watermelon', 'apple', 'orange', 'melon' ]

    console.log(fruits.shift()); // watermelon
    console.log(fruits); // [ 'apple', 'orange', 'melon' ]
    ```

- **삭제 :** `delete Array[index]`

    삭제 해도 빈 공간이 남기 때문에 거의 사용하지 않는다.

    ```jsx
    let fruits = ["apple", "orange", "melon"];

    console.log(fruits); // [ 'apple', 'orange', 'melon' ]
    console.log(fruits.length); // 3

    delete fruits[1];

    console.log(fruits); // [ 'apple', <1 empty item>, 'melon' ]
    console.log(fruits.length); // 3
    ```

### 삭제/변경/병합

- **삭제 :** `Array.slice(start[, end])`
    - **원본이 유지**된다.
    - 해당 **index(**`start`**)부터 개수(**`end`**)만큼 잘린 부분을 반환**한다.
    - **하나의 매개 변수(**`start`**)만 넣을 경우,** 해당 index(`start`)부터 배열의 **끝까지** 잘라서 반환한다.
    - **음수를 넣을 경우 뒤부터** 해당 값(개수)만큼 자른다.

    ```jsx
    let fruits = ["apple", "orange", "melon"];

    console.log(fruits.slice(1));
    // [ 'orange', 'melon' ]

    console.log(fruits.slice(1, 2)); // [ 'orange' ]
    console.log(fruits.slice(-1)); // [ 'melon' ]

    console.log(fruits);
    // [ 'apple', 'orange', 'melon' ]
    ```

- **삭제/변경 :** `Array.splice(index, deleteCount, elem1, ..., elemN)`
    - 삭제는 `Array.slice()`와 동일하다. 단, `splice()`**는 원본 객체가 변형**된다.
    - 변경은 **3개 이상의 매개 변수를 넣어줄 경우, 해당** `index`**부터** 개수(`deleteCount`)만큼 **자르고 그 자리에** `elem1, ..., elemN`**이 들어간다.**

    ```jsx
    let fruits = ["apple", "orange", "melon"];

    console.log(fruits.splice(1)); // [ 'orange', 'melon' ]
    console.log(fruits); // [ 'apple' ]

    fruits = ["apple", "orange", "melon", "strawberry"];

    console.log(fruits.splice(1, 1)); // [ 'orange' ]
    console.log(fruits); // [ 'apple', 'melon', 'strawberry' ]

    console.log(fruits.splice(1, 1, "mango", "kiwi")); // [ 'melon' ]
    console.log(fruits); // [ 'apple', 'mango', 'kiwi', 'strawberry' ]
    ```

- **(다중) 배열 병합 :** `Array.concat(arg1, arg2, ..., argN)`
    - **원본이 유지**된다.
    - 매개 변수 값이 들어간 **새로운 배열을 반환**한다.

    ```jsx
    let fruits = ["apple", "orange" ];

    console.log(fruits.concat("melon")); 
    // [ 'apple', 'orange', 'melon' ]

    console.log(fruits.concat(["cherry", "banana"])); 
    // [ 'apple', 'orange', 'cherry', 'banana' ]

    console.log(fruits.concat(["cherry", "banana"], "mango")); 
    // [ 'apple', 'orange', 'cherry', 'banana', 'mango' ]

    console.log(fruits);
    // [ 'apple', 'orange' ]
    ```

### 탐색

- `index`**를 반환**한다.
- **앞(**`from`**)에서부터 탐색 :** `Array.indexOf(item[, from])`
- **뒤(**`from`**)에서부터 탐색 :** `Array.lastIndexOf(item[, from])`
- **값 포함 여부 확인 :** `Array.includes(item[, from])`
- `item` **값에 대해** `from`**(index)부터 탐색**한다.
- **없을 경우** `-1`**을 반환**한다.

```jsx
let fruits = ["apple", "orange", "banana", "orange", "melon"];
// +from : 0 1 2 3 4
// -from : -5 -4 -3 -2 -1

console.log(fruits.indexOf("apple")); // 0
console.log(fruits.indexOf("apple", 0)); // 0
console.log(fruits.indexOf("apple", 1)); // -1

console.log("========");

console.log(fruits.indexOf("orange")); // 1
console.log(fruits.indexOf("OOrange")); // -1
console.log(fruits.indexOf("orange", 0)); // 1
console.log(fruits.indexOf("orange", 1)); // 1
console.log(fruits.indexOf("orange", 2)); // 3
console.log(fruits.indexOf("orange", 3)); // 3
console.log(fruits.indexOf("orange", 4)); // -1

console.log("========");

console.log(fruits.lastIndexOf("orange")); // 3
console.log(fruits.lastIndexOf("OOrange")); // -1
console.log(fruits.lastIndexOf("orange", -4)); // 1
console.log(fruits.lastIndexOf("orange", -3)); // 1
console.log(fruits.lastIndexOf("orange", -2)); // 3
console.log(fruits.lastIndexOf("orange", -1)); // 3
console.log(fruits.lastIndexOf("orange", 0)); // -1

console.log("========");

console.log(fruits.lastIndexOf("melon")); // 4
console.log(fruits.lastIndexOf("melon", 0)); // -1
console.log(fruits.lastIndexOf("melon", -1)); // 4

console.log("========");

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("banana", 2)); // true
console.log(fruits.includes("Banana")); // false
console.log(fruits.includes(0)); // false
```

### 정렬/반전/문자열로 변환

- **정렬 :** `Array.sort()`
- **반전 :** `Array.reverse()`

    ```jsx
    let nums = [1, -1, 4, 5, 2, 0];

    console.log(nums.sort()); // [ -1, 0, 1, 2, 4, 5 ]
    console.log(nums.reverse()); // [ 5, 4, 2, 1, 0, -1 ]

    let fruits = ["apple", "orange", "banana", "melon"];

    console.log(fruits.sort()); // [ 'apple', 'banana', 'melon', 'orange' ]
    console.log(fruits.reverse()); // [ 'orange', 'melon', 'banana', 'apple' ]
    ```

- **배열 → 문자열 변환 :** `Array.join(separator)`
- **문자열 → 배열 변환 :** `String.split(separator, limit)`

    ```jsx
    let fruits = ["apple", "orange", "banana", "melon"];

    let str = fruits.join();
    console.log(str); // apple,orange,banana,melon

    let str2 = fruits.join(", ");
    console.log(str2); // apple, orange, banana, melon

    let str_separator = fruits.join(";");
    console.log(str_separator); // apple;orange;banana;melon

    let result = str_separator.split(";");
    console.log(result); // [ 'apple', 'orange', 'banana', 'melon' ]
    ```
<br>

## 12-3. N차원 Array

> **배열(Array) 안에 N개 만큼의 또 다른 배열이 존재**하는 객체이다.

- 2, 3차원 지도 정보, RGB를 저장하는 2차원 사진 파일 등을 표현할 때 자주 활용된다.
- `Array[N][M]`
    - 2차원 배열, **M개의 열에 각각 N개의 요소**들이 있다.
    - **2번의 참조로 값에 접근**할 수 있다.

### 2차원 배열 예제

- 각각의 **요소들은** `Array[N][M]`**을 사용해 접근**한다.
- **배열 전체를 push(), pop() 가능**하다.

```jsx
let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

console.log(array);
// [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]

console.log(array[0]); // [ 101, 102, 103 ]
console.log(array[1][0]); // 201
console.log(array[2][2]); // 303

let arr_2 = array.pop();

console.log(array.length); // 2
console.log(arr_2); // [ 301, 302, 303 ]
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]

let array_num = array.push([401, 402, 403]);

console.log(array.length); // 3
console.log(array_num); // 3

console.log(array);
// [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]
```

### 2차원 배열 반복문 예제

```jsx
let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);
  }
}
// 101
// 102
// ...
// 302
// 303

let fruits = [
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
];

for (let i = 0; i < array.length; i++) {
  console.log(`fruit: ${fruits[i][0]}, amount: ${fruits[i][1]}`);
}
/*
fruit: strawberry, amount: 50
fruit: banana, amount: 100
fruit: ice, amount: 150
*/
```
<br>
