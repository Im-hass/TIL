# 5. 데크(Deque)

> **삽입과 삭제가 양쪽 끝에서 모두 발생**할 수 있는 선형 자료 구조이다.

- **Double-Ended Queue**의 약자이다.
- 스택이나 큐, 두 가지 모두를 쓸 수 있다.
- **대표적인 메서드**
    - **생성**
        
        `function Deque(array)`
        
    - **전체 데이터 불러오기, 비어 있는지 확인**
        
        `Deque.getBuffer()`, `Deque.isEmpty()`
        
    - **앞에서 데이터 추가, 앞에서 데이터 삭제, 뒤에서 데이터 추가, 뒤에서 데이터 삭제**
        
        `Deque.pushFront(data)`, `Deque.popFront()`, `Deque.pushBack(data)`, `Deque.popBack()`
        
    - **첫 번째 데이터 반환, 마지막 데이터 반환, 전체 크기, 전체 삭제**
        
        `Deque.front()`, `Deque.back()`, `Deque.size()`, `Deque.clear()`
        

### **생성**

`function Deque(array)`

```jsx
// Deque(array) : 초기 속성값 설정을 위한 생성자 함수
function Deque(array = []) {
  this.array = array;
}

let dq = new Deque([1, 2, 3]);
console.log(dq); // Deque { array: [ 1, 2, 3 ] }

console.log(Object.getOwnPropertyDescriptors(Deque.prototype));
/*
{
  constructor: {
    value: [Function: Deque],
    writable: true,
    enumerable: false,
    configurable: true
  }
}
*/
```

### **전체 데이터 불러오기, 비어 있는지 확인**

`Deque.getBuffer()`, `Deque.isEmpty()`

```jsx
// getBuffer() : 객체 내 데이터 셋 반환
Deque.prototype.getBuffer = function() {
  return this.array.slice();
}

// isEmpty() : 데이터가 비어 있는지 확인
Deque.prototype.isEmpty = function() {
  return this.array.length === 0;
}

let dq = new Deque([1, 2, 3]);
console.log(dq); // Deque { array: [ 1, 2, 3 ] }

let data = dq.getBuffer();
console.log(data); // [ 1, 2, 3 ]
console.log(data === dq.array); // false

console.log(dq.isEmpty()); // false
```

### **앞에서 데이터 추가, 앞에서 데이터 삭제, 뒤에서 데이터 추가, 뒤에서 데이터 삭제**

`Deque.pushFront(data)`, `Deque.popFront()`, `Deque.pushBack(data)`, `Deque.popBack()`

```jsx
// pushFront(data) : 앞쪽에 데이터 추가
Deque.prototype.pushFront = function(element) {
  return this.array.unshift(element);
};

// popFront() : 앞쪽 데이터 삭제
Deque.prototype.popFront = function() {
  return this.array.shift();
};

// pushBack(data) : 뒤쪽에 데이터 추가
Deque.prototype.pushBack = function(element) {
  return this.array.push(element);
};

// popBack() : 뒤쪽 데이터 삭제
Deque.prototype.popBack = function() {
  return this.array.pop();
};

let dq = new Deque([1, 2, 3]);
console.log(dq); // Deque { array: [ 1, 2, 3 ] }

dq.pushFront(0);
dq.pushBack(4);
console.log(dq); // Deque { array: [ 0, 1, 2, 3, 4 ] }

console.log(dq.popFront()); // 0
console.log(dq.popBack()); // 4
console.log(dq); // Deque { array: [ 1, 2, 3 ] }
```

### **첫 번째 데이터 반환, 마지막 데이터 반환, 전체 크기, 전체 삭제**

`Deque.front()`, `Deque.back()`, `Deque.size()`, `Deque.clear()`

```jsx
// front() : 가장 첫 번째 데이터 반환
Deque.prototype.front = function() {
  return this.array.length === 0 ? undefined : this.array[0];
}

// back() : 가장 마지막 데이터 반환
Deque.prototype.back = function() {
  return this.array.length === 0 ? undefined : this.array[this.array.length - 1];
}

// size() : 큐 내의 데이터 개수 반환
Deque.prototype.size = function() {
  return this.array.length;
}

// clear() : 큐 초기화
Deque.prototype.clear = function() {
  this.array = [];
}

let dq = new Deque([1, 2, 3]);
console.log(dq); // Deque { array: [ 1, 2, 3 ] }

console.log(dq.front()); // 1
console.log(dq.back()); // 3
console.log(dq.size()); // 3

dq.clear();
console.log(dq); // Deque { array: [] }
```
