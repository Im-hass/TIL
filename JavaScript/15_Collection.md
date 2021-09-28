# Collection 객체

> **구조 또는 비구조화 형태로 값을 담을 수 있는 공간**이다.

- **요소 접근 방법에 따라 Indexed Collection, keyed Collection** 두 종류로 나누어진다.

### Indexed Collection

> **index를 통해 요소에 접근** 가능한 객체.
> 
- `Array` : **배열**을 생성할 때 사용하는 **리스트 형태의 객체.**
- `TypedArray` : **이진 데이터 버퍼**를 바탕으로 하는 **리스트 형태의 객체.**

### keyed Collection

> **문자열 또는 특정 타입을 통해 요소에 접근** 가능한 객체.
> 
- `Object` : **Strings형의 key**를 사용한다. key:value 형태로 이루어졌다. 자세한 내용은 [여기](https://www.notion.so/JavaScript-d9a36205d2b64f9895b156ceb6b0bff9) 참조.
- `Map` : **다양한 자료형의 key**를 허용하고, **key:value 형태**로 이루어진 자료형을 저장할 수 있다.
- `WeakMap` : `Object`**만을 key로** 허용한다.
- `Set` : **값들의 집합**이다. **중복 값을 허용하지 않는다.**
- `WeakSet` : `Object`**만 저장**할 수 있는 `Object`의 집합이다.
<br>

## 15-1. Map

> **다양한 자료형의 key를 허용**하고, **key:value 형태**로 이루어진 자료형을 저장하는 Collection 객체이다.

### `Object` **vs** `Map`

- `Object`에 비해 `Map`은 더 다양한 형태의 key값을 허용한다.
- `Map` 값의 **추가/삭제는 메서드를 통해 수행**해야 한다.
- **실행 시까지 키를 알 수 없고, 모든 키가 동일한 type이며 모든 값들이 동일한 type일 경우** `Map`**을 쓴다.**
- **각 개별 요소에 대해 적용해야 하는 로직이 있을 경우** `Object`**를 쓴다.**
- [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Keyed_collections#object%EC%99%80_map_%EB%B9%84%EA%B5%90)

### 생성자

> 요소를 생성한다.

- `new Map()`

```jsx
let map = new Map();
```

### 요소 추가/접근/개수/삭제/존재 여부

- **추가 :** `Map.set(key, value)`
    - `Map`**이 반환되므로 체이닝**(chaining, 반환값으로 메서드/속성 연속 사용)**이 가능**하다.
- **접근 :** `Map.get(key)`
- **요소 개수 :** `Map.size`
- **삭제 :** `Map.delete(key)`
- **요소 전체 삭제 :** `Map.clear()`
- **존재 여부 :** `Map.has(key)`

```jsx
let map = new Map();

// 요소 추가
map.set("name", "john"); // string key
map.set(123, 456); // number key
map.set(true, "bool_type"); // boolean key

console.log(map);
// Map(3) { 'name' => 'john', 123 => 456, true => 'bool_type' }

// 요소 접근
console.log(map.get(123)); // 456
console.log(map.get("name")); // john

// 요소 개수
console.log(map.size); // 3

// 요소 삭제
map.delete(123);
console.log(map); // Map { 'name' => 'john', true => 'bool_type' }

// 요소 존재 여부
console.log(map.has(123)); // false
console.log(map.has("name")); // true

// 요소 전체 삭제
map.clear();
console.log(map); // Map(0) {}

// chaining(체이닝)
map.set("name", "alice").set(123, 789).set(false, "bool_type");
console.log(map);
// Map(3) { 'name' => 'alice', 123 => 789, false => 'bool_type' }
```

### 그 외

> `Map`에 **반복문을 수행**할 때 사용한다.
> 
- `Map.keys()` : 각 요소의 `key`**에 대해 새로운 iterator 객체를 반환**한다.
- `Map.values()` : 각 요소의 `value`**에 대해 새로운 iterator 객체를 반환**한다.
- `Map.entires()` : 각 요소의 `[key, value]` **배열에 대해 새로운 iterator 객체를 반환**한다.

### 반복

- `for ... of`**문을 이용하여 반복** 수행 가능.

```jsx
let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

for (let entity of recipe_juice) console.log(entity);
// [ 'strawberry', 50 ]
// [ 'banana', 100 ]
// [ 'ice', 150 ]

for (let item of recipe_juice.keys()) console.log(item);
// strawberry
// banana
// ice

for (let amount of recipe_juice.values()) console.log(amount);
// 50
// 100
// 150

console.log(recipe_juice);
// Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }

console.log(recipe_juice.entries());
/*
[Map Entries] {
  [ 'strawberry', 50 ],
  [ 'banana', 100 ],
  [ 'ice', 150 ]
}
*/
```

### 형변환(Map <-> Object)

**Object → Map 변환 :** `Object.entries(Object)`

**Map → Object 변환 :** `Object.fromEntries(Map)`

```jsx
let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

let recipe_juice_obj = Object.fromEntries(recipe_juice);
let recipe_juice_kv = Object.entries(recipe_juice_obj); // [key, value]
let recipe_juice_map = new Map(recipe_juice_kv);

// Map(원본)
console.log(recipe_juice);
// Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }

// Object
console.log(recipe_juice_obj);
// { strawberry: 50, banana: 100, ice: 150 }

// Array
console.log(recipe_juice_kv);
// [ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]

// Map
console.log(recipe_juice_map);
// Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
```
<br>

## 15-2. Set

> **값(value)만을 저장**하며, **중복을 허용하지 않는 Collection 객체**이다.

### 생성자

> 요소를 생성한다.
> 
- `new Set()`

```jsx
let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("Hello!");

console.log(set); // Set {}
console.log(num); // Set { 1, 2, 3, 4, 5 }
console.log(str); // Set { 'H', 'e', 'l', 'o', '!' }
```

### 요소 추가/개수/삭제/존재 여부

- **추가 :** `Set.add(value)`
- **요소 개수 :** `Set.size`
- **삭제 :** `Set.delete(value)`
- **요소 전체 삭제 :** `Set.clear()`
- **존재 여부 :** `Set.has(value)`

```jsx
let set = new Set();

// 요소 추가
set.add(1);
set.add(2);
set.add(3);
set.add(3);

console.log(set); // Set { 1, 2, 3 }

// 요소 개수
console.log(set.size); // 3

// 요소 삭제
set.delete(3); // 삭제 성공 시 true 반환
set.delete(-1); // 없는 값은 무반응, false 반환

console.log(set); // Set { 1, 2 }

// 요소 존재 여부
console.log(set.has(1)); // true
console.log(set.has(3)); // false

// 요소 전체 삭제
set.clear();

console.log(set); // Set { }

// chaining(체이닝)
set.add(3).add(3).add(10).add(20);
console.log(set); // Set { 1, 2, 3, 10, 20 }
```

### 그 외

> `Set`에 **반복문을 수행**할 때 사용한다.
> 
- `Set.keys()` : 각 요소의 `key`(=`value`)**에 대해 새로운 iterator 객체를 반환**한다.
- `Set.values()` : 각 요소의 `value`**에 대해 새로운 iterator 객체를 반환**한다.
- `Set.entires()` : 각 요소의 `[key, value]` **배열에 대해 새로운 iterator 객체를 반환**한다.
    - `Map`**과의 호환성**을 위해 `[ key, value ]` 배열의 포맷으로 출력 된다. (`key = value`)

### 반복

- `for ... of`**문을 이용**하여 반복 수행 가능.
- `Set`, `Set.keys()`, `Set.values()` **모두 같은 결과가 출력** 된다.

```jsx
let str = new Set("Hello!");
console.log(str); // Set { 'H', 'e', 'l', 'o', '!' }

for (let item of str) console.log(item);
// H
// e
// l
// o
// !

for (let item of str.keys()) console.log(item);
// H
// e
// l
// o
// !

for (let item of str.values()) console.log(item);
// H
// e
// l
// o
// !

for (let item of str.entries()) console.log(item); 
// [ 'H', 'H' ]
// [ 'e', 'e' ]
// [ 'l', 'l' ]
// [ 'o', 'o' ]
// [ '!', '!' ]

console.log(str.keys()); // [value]
console.log(str.entries()); // [value, value] : Map과의 호환성을 위해 존재
```
<br>
