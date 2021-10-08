# 큐(Queue)

> 먼저 넣은 데이터가 먼저 나오는 **선입선출(First In First Out) 구조의 선형 자료 구조**이다.

- **dequeue, [Queue], enqueue**로 구성된다.
- **대표적인 메서드**
    - **생성**
        
        `function Queue(array)`
        
    - **전체 데이터 불러오기, 비어 있는지 확인**
        
        `Queue.getBuffer()`, `Queue.isEmpty()`
        
    - **데이터 추가, 삭제**
        
        `Queue.enqueue()`, `Queue.dequeue()`
        
    - **첫 번째 데이터 조회, 크기 확인, 전체 삭제**
        
        `Queue.front()`, `Queue.size()`, `Queue.clear()`
<br>

## 4-1. 큐 대표적인 메서드

### **생성**

`function Queue(array)`

```jsx
// Queue() : 생성자 함수로 초기 데이터 설정
function Queue(array) {
  this.array = array ? array : [];
}

let queue = new Queue([1, 2, 3]);
console.log(queue); // Queue { array: [ 1, 2, 3 ] }
```

### **전체 데이터 불러오기, 비어 있는지 확인**

`Queue.getBuffer()`, `Queue.isEmpty()`

```jsx
// getBuffer() : 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function() {
  return this.array.slice();
};

// isEmpty() : 객체 내 데이터 존재 유무
Queue.prototype.isEmpty = function() {
  return this.array.length === 0;
}

let queue = new Queue([1, 2, 3]);
console.log(queue); // Queue { array: [ 1, 2, 3 ] }

let data = queue.getBuffer();
console.log(data); // [ 1, 2, 3 ]
console.log(data === queue.array); // false

console.log(queue.isEmpty()); // false

console.log(Object.getOwnPropertyDescriptors(Queue.prototype));
/*
{
  constructor: {
    value: [Function: Queue],
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

### **데이터 추가, 삭제**

`Queue.enqueue()`, `Queue.dequeue()`

```jsx
// enqueue() : 데이터 추가
Queue.prototype.enqueue = function(element) {
  return this.array.push(element);
}

// dequeue() : 데이터 삭제
Queue.prototype.dequeue = function() {
  return this.array.shift();
}

let queue = new Queue([1, 2]);
console.log(queue); // Queue { array: [ 1, 2 ] }

queue.enqueue(3);
queue.enqueue(4);
console.log(queue); // Queue { array: [ 1, 2, 3, 4 ] }

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue); // Queue { array: [ 3, 4 ] }
```

### **첫 번째 데이터 조회, 크기 확인, 전체 삭제**

`Queue.front()`, `Queue.size()`, `Queue.clear()`

```jsx
// front() : 가장 첫 번째 데이터 반환
Queue.prototype.front = function() {
  return this.array.length === 0 ? undefined : this.array[0];
};

// szie() : 큐 내의 데이터 개수 확인
Queue.prototype.size = function() {
  return this.array.length;
};

// clear() : 큐 초기화
Queue.prototype.clear = function() {
  this.array = [];
};

let queue = new Queue([1, 2, 3, 4]);
console.log(queue); // Queue { array: [ 1, 2, 3, 4 ] }

queue.dequeue();
console.log(queue.front()); // 2
console.log(queue); // Queue { array: [ 2, 3, 4 ] }

console.log(queue.size()); // 3

queue.clear();

console.log(queue); // Queue { array: [] }
console.log(queue.size()); // 0
```
<br>

## 4-2. 큐 최적화

- `enqueue`, `dequeue` 방식을 `push`/`shift`에서 `index`로 변경한다.
- 시간 복잡도가 `shift` O(n) → `index` O(1)으로 개선된다.

### 개선

```jsx
function Queue(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0; // 데이터가 추가되는 곳
  this.head = 0; // 데이터가 나가는 곳(꺼내지는 값)
}

Queue.prototype.enqueue = function(element) {
  return (this.array[this.tail++] = element);
};

Queue.prototype.dequeue = function() {
  if(this.tail === this.head) return undefined;
  
  let element = this.array[this.head];
  delete this.array[this.head++];

  return element;
}

let queue = new Queue([1, 2]);
console.log(queue); // Queue { array: [ 1, 2 ], tail: 2, head: 0 }

queue.enqueue(3);
queue.enqueue(4);
console.log(queue); // Queue { array: [ 1, 2, 3, 4 ], tail: 4, head: 0 }

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue); // Queue { array: [ <2 empty items>, 3, 4 ], tail: 4, head: 2 }
```

### 성능 측정(benchmark)

```jsx
let q1 = new Queue1();
let q2 = new Queue2();
const count = 100000;

function benchmark(queue, fun) {
  let start = Date.now();
  for (let i = 0; i < count; i++) {
    fun ? queue.enqueue() : queue.dequeue();
  }
  return Date.now() - start;
}

console.log("enqueue q1 : " + benchmark(q1, 1) + "ms");
// enqueue q1 : 32ms
console.log("enqueue q2 : " + benchmark(q2, 1) + "ms");
// enqueue q2 : 6ms

console.log("dequeue q1 : " + benchmark(q1, 0) + "ms");
// dequeue q1 : 6607ms
console.log("dequeue q2 : " + benchmark(q2, 0) + "ms"); 
// dequeue q2 : 11ms
```
<br>
