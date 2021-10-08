# 3. 스택(Stack)

> 나중에 넣은 데이터가 먼저 나오는 LIFO(Last In First Out) 기반의 선형 자료 구조.

- 선입후출(First In Last Out) 또는 후입선출(Last In First Out) 구조이다.
- 삽입, 삭제의 두 핵심적인 함수로 구성된다.
- **오버플로(Overflow) :** 수용할 수 있는 데이터 크기를 이미 가득 찬 상태에서 삽입 연산을 수행할 때 발생.
- **언더플로(Underflow) :** 데이터가 전혀 들어 있지 않은 상태에서 삭제 연산을 수행할 때 발생.
- **대표적인 메서드**
    - **생성**
        
        `function Stack(array)`
        
    - **전체 데이터 불러오기, 비어 있는지 확인**
        
        `Stack.getBuffer()`, `Stack.isEmpty()`
        
    - **데이터 추가, 삭제, 마지막 데이터 조회, 크기 확인**
        
        `Stack.push(data)`, `Stack.pop()`, `Stack.peek()`, `Stack.size()`
        
    - **데이터 위치, 존재 여부 확인**
        
        `Stack.indexOf(data[, position])`, `Stack.includes(data[, position])`
        

### **생성**

- `function Stack(array)`

```jsx
// Stack() : 생성자 함수
function Stack(array) {
  this.array = array ? array : [];
}
```

### **전체 데이터 불러오기, 비어 있는지 확인**

- `Stack.getBuffer()`
- `Stack.isEmpty()`

```jsx
// getBuffer() : 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function() {
  return this.array.slice();
}

// isEmpty() : 객체 내 비어있는지, 아닌지
Stack.prototype.isEmpty = function() {
  return this.array.length === 0;
}

let stack = new Stack([1, 2, 3]);
console.log(stack); // Stack { array: [ 1, 2, 3 ] }

let data = stack.getBuffer();
console.log(data); // [ 1, 2, 3 ]
console.log(data === stack.array); // false
console.log(stack.isEmpty()); // false

console.log(Object.getOwnPropertyDescriptors(Stack.prototype));
/*
{
  constructor: {
    value: [Function: Stack],
    writable: true,
    enumerable: false,
    configurable: true
  },
  getBuffer: {
    value: [Function],
    writable: true,
    enumerable: true,
    configurable: true
  },
  isEmpty: {
    value: [Function],
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
```

### **데이터 추가, 삭제, 마지막 데이터 조회, 크기 확인**

- `Stack.push(data)`
- `Stack.pop()`
- `Stack.peek()`
- `Stack.size()`

```jsx
// push() : 데이터 추가
Stack.prototype.push = function(element) {
  return this.array.push(element);
}

// pop() : 데이터 삭제
Stack.prototype.pop = function() {
  return this.array.pop();
}

// peek() : 가장 마지막(위) 데이터 반환
Stack.prototype.peek = function() {
  return this.array[this.array.length - 1];
}

// size() : 스택 내 데이터 개수 확인
Stack.prototype.size = function() {
  return this.array.length;
}

let stack = new Stack([1, 2]);
console.log(stack); // Stack { array: [ 1, 2 ] }

stack.push(1);
stack.push(4);
stack.push(3);
console.log(stack); // Stack { array: [ 1, 2, 1, 4, 3 ] }

console.log(stack.pop()); // 3
console.log(stack.peek()); // 4
console.log(stack); // Stack { array: [ 1, 2, 1, 4 ] }

console.log(stack.pop()); // 4
console.log(stack.peek()); // 1
console.log(stack); // Stack { array: [ 1, 2, 1 ] }

stack.push(2);
console.log(stack.size()); // 4
```

### **데이터 위치, 존재 여부 확인**

- `Stack.indexOf(data[, position])`
- `Stack.includes(data[, position])`

```jsx
// indexOf(data) : position부터 데이터 위치 확인
Stack.prototype.indexOf = function(element, position = 0) {
  for(let i = position; i < this.array.length; i++) {
    if(element === this.array[i]) return i;
  }

  return -1;

  // 또는 array의 기존 메서드를 사용하여 구현
  // return this.array.indexOf(element, position);
}

// includes() : 데이터 존재 여부
Stack.prototype.includes = function(element, position = 0) {
  for(let i = position; i < this.array.length; i++) {
    if(element === this.array[i]) return true;
  }

  return false;

  // 또는 array의 기존 메서드를 사용하여 구현
  // return this.array.includes(element);
}

let stack = new Stack([1, 2, 3]);
console.log(stack); // Stack { array: [ 1, 2, 3 ] }

console.log(stack.indexOf(1)); // 0
console.log(stack.indexOf(1, 2)); // -1

console.log(stack.includes(1)); // true
console.log(stack.includes(1, 2)); // false
console.log(stack.includes(5)); // false
```
