# 딕셔너리(Dictionary)

> **key-value 형태로 다양한 자료형의 개체를 저장**하는 자료 구조이다.

- Map과 비슷하다.
- **대표적인 메서드**
    - **생성**
        
        `function Dictionary(items)`
        
    - **개체 하나 불러오기, 전체 개체 불러오기, 크기 반환**
        
        `Dictionary.get(key)`, `Dictionary.getBuffer()`, `Dictionary.size()`
        
    - **개체 추가, 삭제, 비어 있는지 확인**
        
        `Dictionary.set(key, value)`, `Dictionary.remove(key)`, `Dictionary.has(key)`
        
    - **전체 삭제, key 배열 반환, value 배열 반환, 고차함수**
        
        `Dictionary.keys()`, `Dictionary.values()`, `Dictionary.each(func)`
        

### **생성**

`function Dictionary(items)`

```jsx
// Dcitionary(items) : 개체를 저장할 생성자
function Dcitionary(items = {}) {
  this.items = items;
}

let dict = new Dcitionary({age : 19, name : "alice"});
console.log(dict); // Dcitionary { items: { age: 19, name: 'alice' } }
```

### 존재 여부 확인, **개체 하나 불러오기, 전체 개체 불러오기, 크기 반환**

`Dictionary.has(key)`, `Dictionary.get(key)`, `Dictionary.getBuffer()`, `Dictionary.size()`

```jsx
// has(key) : 개체 존재 여부 확인(key 정보를 배열로 반환함)
Dcitionary.prototype.has = function(key) {
  // return value in this.items;
  return this.items.hasOwnProperty(key);
}

// get(key) : 개체의 value 반환
Dcitionary.prototype.get = function(key) {
  return this.has(key) ? this.items[key] : undefined;
}

// getBuffer() : 모든 개체 반환
Dcitionary.prototype.getBuffer = function() {
  return { ...this.items };
};

// size() : 크기 반환
Dcitionary.prototype.size = function() {
  return Object.keys(this.items).length;
}

let dict = new Dcitionary({age : 19, name : "alice", heigth : "170"});
console.log(dict); // Dcitionary { items: { age: 19, name: 'alice', heigth: '170' } }

console.log(dict.has("age")); // true
console.log(dict.has("phone")); // false

console.log(dict.get("age")); // 19
console.log(dict.getBuffer()); // { age: 19, name: 'alice', heigth: '170' }
console.log(dict.size()); // 3

console.log(dict); // Dcitionary { items: { age: 19, name: 'alice', heigth: '170' } }
```

### **개체 추가, 삭제**

`Dictionary.set(key, value)`, `Dictionary.remove(key)`

```jsx
// set(key, value) : 개체 추가
Dcitionary.prototype.set = function(key, value) {
  this.items[key] = value;
}

// remove(key) : 개체 삭제
Dcitionary.prototype.remove = function(key) {
  if(this.has(key)) {
    delete this.items[key];
    return true;
  }

  return false;
}

let dict = new Dcitionary();

dict.set("age", 19);
dict.set("name", "alice");
dict.set("height", 170);
console.log(dict); // Dcitionary { items: { age: 19, name: 'alice', height: 170 } }

dict.remove("age");
console.log(dict); // Dcitionary { items: { name: 'alice', height: 170 } }
```

### **전체 삭제, key 배열 반환, value 배열 반환, 고차함수**

`Dictionary.keys()`, `Dictionary.values()`, `Dictionary.each(func)`

```jsx
// keys() : 모든 key 값을 배열 형태로 반환
Dcitionary.prototype.keys = function() {
  return Object.keys(this.items);
};

// values() : 모든 value 값을 배열 형태로 반환
Dcitionary.prototype.values = function() {
  // let values = [];
  // for(let key in this.items) {
  //   values.push(this.items[key]);
  // }
  // return values;

  return Object.values(this.items);
}

// each(func) : 모든 개체 요소에 대해 callback 함수를 수행(:=foreach)
Dcitionary.prototype.each = function(func) {
  for(let key in this.items) {
    func(key, this.items[key]);
  }
}

// printDictionary() : 개체 출력 콜백 함수
function printDictionary(key, value) {
  console.log(`key : ${key}`);
  console.log(`value : ${value}`);
}

let dict = new Dcitionary();

dict.set("age", 19);
dict.set("name", "alice");
dict.set("height", 170);
console.log(dict); // Dcitionary { items: { age: 19, name: 'alice', height: 170 } }

console.log(dict.keys()); // [ 'age', 'name', 'height' ]
console.log(dict.values()); // [ 19, 'alice', 170 ]

dict.each(printDictionary);
/*
key : age
value : 19
key : name
value : alice
key : height
value : 170
*/
```
