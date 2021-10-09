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

## 4-3. 우선순위 큐(Priority Queue)

> 우선순위를 고려하여 먼저 넣은 데이터가 먼저 나오는 선입선출(FIFO, First In First Out) 기반의 선형 자료 구조이다.
> 
- `dequeue`, `{Priority Queue}`, `enqueue`로 구성된다.
- **우선순위를 정렬하는 방식 :** 배열 기반, 연결리스트 기반, 힙(Heap) 기반 등에서 값이 낮거나 높은 순으로 정렬한다.
- 프로세스가 프로그램들을 처리할 때 사용되기도 한다.
- **대표적인 메서드**
    - **생성**
        
        `function Element(data, priority)`
        
        `function PriorityQueue()`
        
    - **전체 데이터 불러오기, 비어 있는지 확인**
        
        `PriorityQueue.getBuffer()`, `PriorityQueue.isEmpty()`
        
    - **데이터 추가, 삭제**
        
        `PriorityQueue.enqueue()`, `PriorityQueue.dequeue()`
        
    - **첫 번째 데이터 조회, 크기 확인, 전체 삭제**
        
        `PriorityQueue.front()`, `PriorityQueue.size()`, `PriorityQueue.clear()`
        

### **생성**

- `function Element(data, priority)`
- `function PriorityQueue()`

```jsx
// Element() : 데이터와 우선순위를 저장하는 생성자 함수
function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

// PriorityQueue() : Element 관리를 위한 생성자 함수
function PriorityQueue() {
  this.array = [];
}

let pq = new PriorityQueue();
console.log(pq); // PriorityQueue { array: [] }

console.log(Object.getOwnPropertyDescriptors(Element.prototype));
/*
{
  constructor: {
    value: [Function: Element],
    writable: true,
    enumerable: false,
    configurable: true
  }
}
*/

console.log(Object.getOwnPropertyDescriptors(PriorityQueue.prototype));
/*
{
  constructor: {
    value: [Function: PriorityQueue],
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

### **전체 데이터 불러오기, 비어 있는지 확인**

- `PriorityQueue.getBuffer()`
- `PriorityQueue.isEmpty()`

```jsx
// getBuffer() : 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function() {
  return this.array.map((element) => element.data);
};

// isEmpty() : 객체 내 데이터 존재 여부
PriorityQueue.prototype.isEmpty = function() {
  return this.array.length === 0;
};

let pq = new PriorityQueue();

pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
pq.enqueue("Tom", 1);

console.log(pq.getBuffer()); // [ 'Alice', 'Tom', 'Bob' ]
console.log(pq.isEmpty()); // false
```

### **데이터 추가, 삭제**

- `PriorityQueue.enqueue(data, priority)`
- `PriorityQueue.dequeue()`

```jsx
// enqueue() : 데이터 추가
// 변수 added를 사용해 어느 위치에 들어갈지 선정
PriorityQueue.prototype.enqueue = function(data, priority) {
  let element = new Element(data, priority);
  let added = false;

  for(let i = 0; i < this.array.length; i++) {
    // 새로 들어온 데이터의 우선순위 vs 기존에 있던 데이터의 우선순위
    if(element.priority < this.array[i].priority) {
      // 2번째 매개 변수로 0을 주면 데이터가 삭제되지 않고 뒤에 추가됨
      this.array.splice(i, 0, element);
      added = true;
      break;
    }
  }

  if(!added) {
    this.array.push(element);
  }

  return this.array.length;
}

// dequeue() : 데이터 삭제
PriorityQueue.prototype.dequeue = function() {
  return this.array.shift();
}

let pq = new PriorityQueue();

pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
console.log(pq);
/*
PriorityQueue {
  array: [
    Element { data: 'Alice', priority: 1 },
    Element { data: 'Bob', priority: 2 }
  ]
}
*/

pq.enqueue("Tom", 1);
pq.enqueue("John", 3);
console.log(pq);
/*
PriorityQueue {
  array: [
    Element { data: 'Alice', priority: 1 },
    Element { data: 'Tom', priority: 1 },
    Element { data: 'Bob', priority: 2 },
    Element { data: 'John', priority: 3 }
  ]
}
*/

console.log(pq.dequeue()); // Element { data: 'Alice', priority: 1 }
console.log(pq.dequeue()); // Element { data: 'Tom', priority: 1 }

console.log(pq);
/*
PriorityQueue {
  array: [
    Element { data: 'Bob', priority: 2 },
    Element { data: 'John', priority: 3 }
  ]
}
*/
```

### **첫 번째 데이터 조회, 크기 확인, 전체 삭제**

- `PriorityQueue.front()`
- `PriorityQueue.size()`
- `PriorityQueue.clear()`

```jsx
// front() : 가장 첫 데이터 반환
PriorityQueue.prototype.front = function() {
  return this.array.length === 0 ? undefined :this.array[0].data;
};

// size() : 큐 내의 데이터 개수 확인
PriorityQueue.prototype.size = function() {
  return this.array.length;
}

// clear() : 큐 초기화
PriorityQueue.prototype.clear = function() {
  this.array = [];
}

let pq = new PriorityQueue();

pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
pq.enqueue("Tom", 1);
pq.enqueue("John", 3);

console.log(pq.getBuffer()); // [ 'Alice', 'Tom', 'Bob', 'John' ]

console.log(pq.dequeue()); // Element { data: 'Alice', priority: 1 }
console.log(pq.dequeue()); // Element { data: 'Tom', priority: 1 }

console.log(pq);
/*
PriorityQueue {
  array: [
    Element { data: 'Bob', priority: 2 },
    Element { data: 'John', priority: 3 }
  ]
}
*/

console.log(pq.front()); // Bob
console.log(pq.size()); // 2

pq.clear();
console.log(pq); // PriorityQueue { array: [] }
```
<br>

## 4-4. 원형 큐(Circular Queue)

> 원형 형태를 가진 큐, FIFO 기반의 선형 자료 구조이다.
> 
- `head`, `[Circular Queue]`, `tail`, `size`, `length`로 구성된다.
- `head`와 `tail`이 같은 위치에 있을 때, 큐가 비어있다.
- `size`보다 많은 값이 들어오면, 값은 버려진다.
- 모듈러(`%`) 연산을 사용하여 size 값이 최대보다 커지지 않도록 유지한다.
- **대표적인 메서드**
    - **생성**
        
        `function CircularQueue(array, size)`
        
    - **비어 있는지 확인, 차 있는지 확인**
        
        `CircularQueue.isEmpty()`, `CircularQueue.isFull()`
        
    - **데이터 추가, 삭제, 반환**
        
        `CircularQueue.enqueue(data)`, `CircularQueue.dequeue()`, `CircularQueue.getBuffer()`
        
    - **첫 번째 데이터 조회, 크기 확인, 전체 삭제**
        
        `CircularQueue.front()`, `CircularQueue.dataSize()`, `CircularQueue.clear(size)`
        

### **생성**

- `function CircularQueue(array, size)`

```jsx
// CircularQueue() : 초기 속성값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = 5) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

let cq = new CircularQueue([1, 2, 3]);
console.log(cq);
/*
CircularQueue {
  array: [ 1, 2, 3 ],
  size: 5,
  length: 3,
  head: 0,
  tail: 3
}
*/
```

### **비어 있는지 확인, 차 있는지 확인**

`CircularQueue.isEmpty()`, `CircularQueue.isFull()`

```jsx
// isEmpty() : 데이터가 비어있는지 확인
CircularQueue.prototype.isEmpty = function() {
  return this.array.length == 0;
}

// isFull() : 데이터가 꽉 차있는지 확인
CircularQueue.prototype.isFull = function() {
  return this.length == this.size;
}

let cq = new CircularQueue([1, 2, 3]);
console.log(cq);
/*
CircularQueue {
  array: [ 1, 2, 3 ],
  size: 5,
  length: 3,
  head: 0,
  tail: 3
}
*/

console.log(cq.isEmpty()); // false
console.log(cq.isFull()); // false

console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));
/*
{
  constructor: {
    value: [Function: CircularQueue],
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
  },
  isFull: {
    value: [Function],
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
```

### **데이터 추가, 삭제, 반환**

`CircularQueue.enqueue(data)`, `CircularQueue.dequeue()`, `CircularQueue.getBuffer()`

```jsx
// enqueue() : 데이터 추가
CircularQueue.prototype.enqueue = function(element) {
  if(this.isFull()) return false;
  
  // tail이 초기화될 수 있도록 개선
  // this.array[this.tail % this.size] = element;
  // this.tail++;
  this.array[this.tail] = element;
  this.tail = (this.tail + 1) % this.size;
  this.length++;

  return true;
}

// dequeue() : 데이터 삭제
CircularQueue.prototype.dequeue = function() {
  if(this.isEmpty()) return undefined;

  // head가 초기화될 수 있도록 개선
  // let element = this.array[this.head % this.size];
  // delete this.array[this.head % this.size];
  // this.head++;
  let element = this.array[this.head];
  delete this.array[this.head];
  this.head = (this.head + 1) % this.size;
  this.length--;

  return element;
}

// getBuffer() : 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function() {
  return this.array.slice();
}

let cq = new CircularQueue([1, 2, 3, 4]);
console.log(cq);
/*
CircularQueue {
  array: [ 1, 2, 3, 4 ],
  size: 5,
  length: 4,
  head: 0,
  tail: 4
}
*/

cq.enqueue(5);
cq.enqueue(6);
console.log(cq.getBuffer()); // [ 1, 2, 3, 4, 5 ]

console.log(cq.dequeue()); // 1
console.log(cq.dequeue()); // 2
console.log(cq.getBuffer()); // [ <2 empty items>, 3, 4, 5 ]

cq.enqueue(6);
console.log(cq.getBuffer()); // [ 6, <1 empty item>, 3, 4, 5 ]

console.log(cq.enqueue(7)); // true
console.log(cq.enqueue(8)); // false
console.log(cq.getBuffer()); // [ 6, 7, 3, 4, 5 ]
```

### **첫 번째 데이터 조회, 크기 확인, 전체 삭제**

`CircularQueue.front()`, `CircularQueue.dataSize()`, `CircularQueue.clear(size)`

```jsx
const DEFAULT_SIZE = 5;

// front() : 가장 첫 번째 데이터 반환
CircularQueue.prototype.front = function() {
  return this.length == 0 ? undefined : this.array[this.head];
};

// dataSize() : 큐 내의 데이터 개수 확인
CircularQueue.prototype.dataSize = function() {
  return this.length;
}

// clear() : 큐 초기화
CircularQueue.prototype.clear = function(size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
}

let cq = new CircularQueue([1, 2, 3, 4]);
console.log(cq);
/*
CircularQueue {
  array: [ 1, 2, 3, 4 ],
  size: 5,
  length: 4,
  head: 0,
  tail: 4
}
*/

cq.enqueue(5);
cq.enqueue(6);

console.log(cq.dequeue()); // 1
console.log(cq.dequeue()); // 2

console.log(cq);
/*
CircularQueue {
  array: [ <2 empty items>, 3, 4, 5 ],
  size: 5,
  length: 3,
  head: 2,
  tail: 0
}
*/

cq.enqueue(6);
console.log(cq);
/*
CircularQueue {
  array: [ 6, <1 empty item>, 3, 4, 5 ],
  size: 5,
  length: 4,
  head: 2,
  tail: 1
}
*/

console.log(cq.front()); // 3
console.log(cq.dataSize()); // 4

cq.clear(10);
console.log(cq); // CircularQueue { array: [], size: 10, length: 0, head: 0, tail: 0 }
```
<br>
