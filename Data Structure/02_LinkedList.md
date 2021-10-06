# Linked List(연결 리스트)

> **각 노드가 데이터(data)와 포인터(next)를 가지며, 한 줄로 연결되어 있는 방식으로 데이터를 저장**하는 자료 구조이다.

- 포인터는 또 **다음 노드를 가리키는 참조**이다.
- **Head와 Node(data, next), null**로 이루어진다.
- 마지막 노드의 포인터는 null을 가리킨다.
- 노드 삭제를 통해 **아무 곳에서도 참조하지 않는 노드는 GC**(Garbage Collector, 가비지 컬렉터)**가 제거**하게 된다.
- **Node 객체 기본 속성**
    - `data` : 저장할 값, 데이터를 담고 있다.
    - `next` : 다음 노드를 가리키는 참조를 담고 있다.
- **LinkedList 객체 기본 속성**
    - `head` : 제일 앞 노드, 시작 노드를 가리킨다.
    - `length` : 노드의 길이(개수)이다.
- **대표적인 메서드**
    - **생성** : `Node()`, `LinkedList()`
    - **노드 개수, 존재 확인** : `LinkedList.size()`, `LinkedList.isEmpty()`
    - **노드 출력** : `LinkedList.printNode()`
    - **노드 추가, 삽입** : `LinkedList.append()`, `LinkedList.insert()`
    - **노드 삭제**

        **값을 찾아 삭제 :** `LinkedList.remove()`
        
        **위치를 찾아 삭제 :** `LinkedList.removeAt()`
    - **노드 데이터 위치 확인** : `LinkedList.indexOf()`
<br>

## 2-1. 연결 리스트 구현

### 생성

- `Node()`
- `LinkedList()`

```jsx
// Node(): data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

let ll = new LinkedList();
console.log(ll); // LinkedList { head: null, length: 0 }

ll.head = new Node(123);
ll.length++;
console.log(ll); // LinkedList { head: Node { data: 123, next: null }, length: 1 }

// 다음으로 연결
ll.head.next = new Node(456);
ll.length++;
console.log(ll);
/*
LinkedList {
  head: Node { data: 123, next: Node { data: 456, next: null } },
  length: 2
}
*/
```

### **노드 개수, 존재 확인**

- `LinkedList.size()`
- `LinkedList.isEmpty()`

```jsx
// size(): 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let ll = new LinkedList();

console.log(ll.isEmpty()); // true
console.log(ll); // LinkedList { head: null, length: 0 }

ll.head = new Node(123);
ll.length++;
console.log(ll.size()); // 1

ll.head.next = new Node(456);
ll.length++;
console.log(ll.size()); // 2

console.log(ll.isEmpty()); // false
```

### 노드 출력, 추가

- `LinkedList.printNode()`
- `LinkedList.append(value)`

```jsx
// 구현2
// 생성 생략
// printNode(): 노드 출력
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    // stdout.write() : 내장 출력 메서드, 개행 없이 출력
    process.stdout.write(`${node.data} -> `);
  }

  console.log("null");
};

// append(): 연결 리스트 가장 끝에 노드 추가
// ll.head.next.next... 자동으로 계산해줌
LinkedList.prototype.append = function (value) {
  let node = new Node(value);
  let current = this.head;

  // 순차적으로 노드 탐색
  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }

    current.next = node;
  }

  this.length++;
};

let ll = new LinkedList();

ll.append(1);
ll.append(10);
ll.append(100);

ll.printNode(); // // 1 -> 10 -> 100 -> null

console.log(ll.size()); // 3
```

### 노드 삽입

- `LinkedList.insert(value, position = 0)`

```jsx
// insert(): position 위치에 노드 추가
LinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false; // 추가 실패
  }
  
  let node = new Node(value);
  let current = this.head; // 시작 노드
  let index = 0; // 이동한 위치
  let prev; // 이전 노드 값을 저장

  if (position == 0) { // 첫 번째 노드로 넣을 경우
    node.next = current; // 기존 노드를 다음(2번째) 노드로 바꿈
    this.head = node; // head는 새로 들어온 노드가 됨
  } else { // position번째 노드로 넣을 경우
    while (index++ < position) { // position-1번째가 될 때까지 head.next...
      prev = current; // 이전 노드 저장
      current = current.next; // 다음 노드로 이동
    }

    // position번째
    node.next = current;
    prev.next = node; // 삽입한 새로운 노드
  }

  this.length++; // 길이 증가
  return true; // 추가 성공
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);

ll.printNode(); // 100 -> 10 -> 1 -> null

ll.insert(2, 1);
ll.insert(3, 3);

ll.printNode(); // 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(ll.size());
```

### 노드 삭제

- `LinkedList.remove(value)` : 값(data)을 찾아 삭제
- `LinkedList.removeAt(position = 0)` : 위치(index)를 찾아 삭제

```jsx
// remove(): value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
  let current = this.head;
  let prev = current;

  // value 찾기, data가 value가 아니거나 마지막(null)이 아닐 때까지
  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    this.head = current.next;
  } else {
    prev.next = current.next;
  }

  this.length--;
  return current.data;
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);

ll.printNode(); // 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(ll.remove(1000)); // null
ll.printNode(); // 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(ll.remove(1)); // 1
ll.printNode(); // 100 -> 2 -> 10 -> 3 -> null

console.log(ll.remove(2)); // 2
ll.printNode(); // 100 -> 10 -> 3 -> null

console.log(ll.remove(100)); // 100
ll.printNode(); // 10 -> 3 -> null

console.log(ll.size()); // 2
```

```jsx
// removeAt(): position 위치 노드 삭제
LinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head;
  let index = 0;
  let prev;

  if (position == 0) {
    this.head = current.next;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
  }

  this.length--;
  return current.data;
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);

ll.printNode(); // 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(ll.removeAt(1000)); // null
ll.printNode(); // 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(ll.removeAt(4)); // 1
ll.printNode(); // 100 -> 2 -> 10 -> 3 -> null

console.log(ll.removeAt()); // 100
ll.printNode(); // 2 -> 10 -> 3 -> null

console.log(ll.removeAt(1)); // 10
ll.printNode(); // 2 -> 3 -> null

console.log(ll.size()); // 2
```

### 노드 데이터 위치 확인

- `LinkedList.indexOf(value)`
- **활용 :** `removeAt(indexOf(value))`

```jsx
// indexOf(): value 값을 갖는 노드 위치 반환
LinkedList.prototype.indexOf = function (value) {
  let current = this.head;
  let index = 0;

  while (current != null) {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  }

  return -1; // 찾는 값이 없을 때
};

// remove2(): indexOf + removeAt = remove
LinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);

ll.printNode(); // 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(ll.indexOf(1000)); // -1
console.log(ll.indexOf(1)); // 4
console.log(ll.indexOf(100)); // 0
console.log(ll.indexOf(10)); // 2

console.log(ll.remove2(1000)); // null
ll.printNode(); // 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(ll.remove2(1)); // 1
ll.printNode();// 100 -> 2 -> 10 -> 3 -> null

console.log(ll.remove2(2)); // 2
ll.printNode(); // 100 -> 10 -> 3 -> null

console.log(ll.remove2(100)); // 100
ll.printNode(); // 10 -> 3 -> null

console.log(ll.size()); // 2
```
<br>

## 2-2. 이중 연결 리스트 구현(**Double Linked List)**

> 각 노드가 데이터와 포인터를 가지며, 두 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조이다.
> 
- **포인터를 2개** 가지고, 각각 **이전, 이후 노드**를 가리킨다.
- **HEAD와 TAIL, Node(prev, data, next), null**로 이루어진다.
- TAIL을 이용해 뒤에서 부터 접근할 수 있다.
- 기존 LinkedList에서는 이전 값을 참조할 수 없어 `prev`라는 변수에 저장하는 식으로 사용했는데, 이중 연결 리스트는 내장 속성 `prev`을 이용해 이전 값에 접근할 수 있다.
- **Node 객체 기본 속성**
    - `data` : 저장할 값, 데이터를 담고 있다.
    - `next` : 다음 노드를 가리키는 참조를 담고 있다.
    - `prev` : 이전 노드를 가리키는 참조를 담고 있다.
- **Double Linked List 객체 기본 속성**
    - `head` : 제일 앞 노드, 시작 노드를 가리킨다.
    - `tail` : 제일 뒤 노드, 끝 노드를 가리킨다.
    - `length` : 노드의 길이(개수)이다.
- **대표적인 메서드**
    - **LinkedList 기존 메서드**
        
        생성, 노드 개수 확인, 존재 확인, 데이터 위치 확인, 추가, 삭제
        
    - **순차 출력, 역 출력**

### 생성

- `Node()`
- `DoubleLinkedList()`

```jsx
// Node(): data와 point인 next, prev를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}
// LinkedList(): head, tail과 length를 가지고 있는 객체
function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

let dll = new DoubleLinkedList();
let node;

console.log(dll); // DoubleLinkedList { head: null, tail: null, length: 0 }

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);
/*
DoubleLinkedList {
  head: Node { data: 123, next: null, prev: null },
  tail: Node { data: 123, next: null, prev: null },
  length: 1
}
*/

node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length++;
console.log(dll);
/*
DoubleLinkedList {
  head: Node {
    data: 123,
    next: Node { data: 456, next: null, prev: [Circular] },
    prev: null
  },
  tail: Node {
    data: 456,
    next: null,
    prev: Node { data: 123, next: [Circular], prev: null }
  },
  length: 2
}
*/
```

### 노드 개수, 존재 확인

```jsx
// 구현1
// size(): 연결 리스트 내 노드 개수 확인
DoubleLinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
DoubleLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let dll = new DoubleLinkedList();
let node;

console.log(dll.isEmpty()); // true
console.log(dll); // DoubleLinkedList { head: null, tail: null, length: 0 }

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);
/*
DoubleLinkedList {
  head: Node { data: 123, next: null, prev: null },
  tail: Node { data: 123, next: null, prev: null },
  length: 1
}
*/

node = new Node(456);
dll.tail.next = node;
dll.prev = node;
dll.length++;
console.log(dll);
/*
DoubleLinkedList {
  head: Node {
    data: 123,
    next: Node { data: 456, next: null, prev: null },
    prev: null
  },
  tail: Node {
    data: 123,
    next: Node { data: 456, next: null, prev: null },
    prev: null
  },
  length: 2,
  prev: Node { data: 456, next: null, prev: null }
}
*/

console.log(dll.isEmpty()); // false
```

### 노드 출력, 추가

- `DoubleLinkedList.printNode()`
- `DoubleLinkedList.printNodeInverse()`
- `DoubleLinkedList.append(value)`

```jsx
// printNode(): 노드 정방향 출력
DoubleLinkedList.prototype.printNode = function () {
  process.stdout.write("head -> ");

  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }

  console.log("null");
};

//printNodeInverse(): 노드 역방향 출력
DoubleLinkedList.prototype.printNodeInverse = function () {
  let temp = [];
  process.stdout.write("null <- ");

  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data);
  }

  for (let i = temp.length - 1; i >= 0; i--) {
    process.stdout.write(`${temp[i]} <- `);
  }

  console.log("tail");
};

// append(): 연결 리스트 가장 끝에 노드 추가
DoubleLinkedList.prototype.append = function (value) {
  let node = new Node(value);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  this.length++;
};

let dll = new DoubleLinkedList();

dll.append(1);
dll.append(10);
dll.append(100);

dll.printNode(); // head -> 1 -> 10 -> 100 -> null
dll.printNodeInverse(); // null <- 1 <- 10 <- 100 <- tail
```

### 노드 삽입

- `DoubleLinkedList.insert(value, position = 0)`

```jsx
// insert(): position 위치에 노드 추가
DoubleLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = current;
      current.prev = node;
      this.head = node;
    }
  } else if (position === this.length) {
    current = this.tail;
    current.next = node;
    node.prev = current;
    this.tail = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;
    current.prev = node;
    node.prev = prev;
  }

  this.length++;
  return true;
};

let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);

dll.printNode(); // head -> 100 -> 10 -> 1 -> null

dll.insert(2, 1);
dll.insert(3, 3);

dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
```

### 노드 삭제

- `DoubleLinkedList.remove(value)`
- `DoubleLinkedList.removeAt(position = 0)`

```jsx
// remove(): value 데이터를 찾아 노드 삭제
DoubleLinkedList.prototype.remove = function (value) {
  let current = this.head;
  let prev = current;

  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (current === this.tail) {
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;
  return current.data;
};

let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);

dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.remove(1000)); // null
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.remove(1)); // 1
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- tail

console.log(dll.remove(2)); // 2
dll.printNode(); // head -> 100 -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 100 <- 10 <- 3 <- tail

console.log(dll.remove(100)); // 100
dll.printNode(); // head -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 10 <- 3 <- tail
```

```jsx
// removeAt(): position 위치 노드 삭제
DoubleLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head;
  let index = 0;
  let prev;
  
  if (position === 0) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (position === this.length - 1) {
    current = this.tail;
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;
  return current.data;
};

let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);

dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.removeAt(1000)); // null
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.removeAt(4)); // 1
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- tail

console.log(dll.removeAt()); // 100
dll.printNode(); // head -> 2 -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 2 <- 10 <- 3 <- tail

console.log(dll.removeAt(1)); // 10
dll.printNode(); // head -> 2 -> 3 -> null
dll.printNodeInverse(); // null <- 2 <- 3 <- tail
```

### 노드 데이터 위치 확인(LinkedList와 동일)

- `DoubleLinkedList.indexOf(value)`
- 활용 : `removeAt(indexOf(value))`

```jsx
// indexOf(): value 값을 갖는 노드 위치 반환
DoubleLinkedList.prototype.indexOf = function (value) {
  let current = this.head;
  let index = 0;

  while (current != null) {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  }

  return -1;
};

// remove2(): indexOf + removeAt = remove
DoubleLinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);

dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.indexOf(1000)); // -1
console.log(dll.indexOf(1)); // 4
console.log(dll.indexOf(100)); // 0
console.log(dll.indexOf(10)); // 2

console.log(dll.remove(1000)); // null
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.remove(1)); // 1
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- tail

console.log(dll.remove(2)); // 2
dll.printNode(); // head -> 100 -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 100 <- 10 <- 3 <- tail

console.log(dll.remove(100)); // 100
dll.printNode(); // head -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 10 <- 3 <- tail

console.log(dll.size()); // 2
```
<br>

## 2-3. 원형 연결 리스트(Circular Linked List)

> 연결 리스트와 동일하다. 마지막 노드가 `null`이 아니라 `Head`를 가리킨다는 점이 다름.
> 
- **HEAD와 Node(data, next)**로 이루어진다.
- `null` 값으로 두었던 부분을 `head`로 만든다.
- **Node 객체 기본 속성**
    - `data` : 저장할 값, 데이터를 담고 있다.
    - `next` : 다음 노드를 가리키는 참조를 담고 있다.
- **Circular Linked List 객체 기본 속성**
    - `head` : 제일 앞 노드, 시작 노드를 가리킨다.
    - `length` : 노드의 길이(개수)이다.
- **대표적인 메서드**
    - **LinkedList 기존 메서드에서 약간의 코드만 변경된다.**

### 생성

- `Node()`
- `CircularLinkedList()`

```jsx
// Node(): data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// CircularLinkedList(): head와 length를 가지고 있는 객체
function CircularLinkedList() {
  this.head = null;
  this.length = 0;
}

let cll = new CircularLinkedList();
let node;

console.log(cll); // CircularLinkedList { head: null, length: 0 }

node = new Node(123);
cll.head = node;
node.next = cll.head;
cll.length++;
console.log(cll);
/*
CircularLinkedList {
  head: Node { data: 123, next: [Circular] },
  length: 1
}
*/

node = new Node(456);
node.next = cll.head.next;
cll.head.next = node;
cll.length++;
console.log(cll);
/*
CircularLinkedList {
  head: Node { data: 123, next: Node { data: 456, next: [Circular] } },
  length: 2
}
*/
```

### **노드 개수, 존재 확인**

`CircularLinkedList.size()`, `CircularLinkedList.isEmpty()`

```jsx
// size(): 연결 리스트 내 노드 개수 확인
CircularLinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
CircularLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let cll = new CircularLinkedList();
let node;

console.log(cll.isEmpty()); // true
console.log(cll); // CircularLinkedList { head: null, length: 0 }

node = new Node(123);
cll.head = node;
node.next = cll.head;
cll.length++;
console.log(cll);
/*
CircularLinkedList {
  head: Node { data: 123, next: [Circular] },
  length: 1
}
*/
```

### **노드 출력**

`CircularLinkedList.printNode()`

```jsx
// printNode(): 노드 출력
CircularLinkedList.prototype.printNode = function () {
  process.stdout.write("head -> ");

  if (this.length != 0) {
    process.stdout.write(`${this.head.data} -> `);

    for (let node = this.head.next; node != this.head; node = node.next) {
      process.stdout.write(`${node.data} -> `);
    }
  }

  console.log("null"); // null이 아니라 head로 인식하면 됨
};

let cll = new CircularLinkedList();

node = new Node(123);
cll.head = node;
node.next = cll.head;
cll.length++;
cll.printNode(); // head -> 123 -> null

console.log(cll.size()); // 1

node = new Node(456);
cll.head.next = node;
node.next = cll.head;
cll.length++;
cll.printNode(); // head -> 123 -> 456 -> null

console.log(cll.size()); // 2
```

### **노드 추가, 삽입**

`CircularLinkedList.append()`, `CircularLinkedList.insert()`

```jsx
// append(): 연결 리스트 가장 끝에 노드 추가
CircularLinkedList.prototype.append = function (value) {
  let node = new Node(value);
  let current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != this.head) {
      current = current.next;
    }

    current.next = node;
  }

  node.next = this.head;
  this.length++;
};

let cll = new CircularLinkedList();

cll.append(1);
cll.append(10);
cll.append(100);

cll.printNode(); // head -> 1 -> 10 -> 100 -> null

console.log(cll.size()); // 3
```

```jsx
CircularLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }
  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) {
    node.next = current;

    if (this.isEmpty()) {
      current = node;
    } else {
      while (current.next != this.head) {
        current = current.next;
      }
    }

    this.head = node;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;

    if (node.next === null) {
      node.next = this.head;
    }
  }

  this.length++;
  return true;
};

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.printNode(); // head -> 100 -> 10 -> 1 -> null

cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
```

### **노드 삭제**

**값을 찾아 삭제 :** `CircularLinkedList.remove()`

**위치를 찾아 삭제 :** `CircularLinkedList.removeAt()`

```jsx
// remove(): value 데이터를 찾아 노드 삭제
CircularLinkedList.prototype.remove = function (value) {
  let current = this.head;
  let prev = current;
  let data;

  while (current.data != value && current.next != this.head) {
    prev = current;
    current = current.next;
  }
  if (current.data != value) {
    return null;
  }

  data = current.data;

  if (current === this.head) {
    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;
  } else {
    prev.next = current.next;
  }

  this.length--;
  return data;
};

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(cll.remove(1000)); // null
cll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(cll.remove(1)); // 1
cll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> null

console.log(cll.remove(2)); // 2
cll.printNode(); // head -> 100 -> 10 -> 3 -> null

console.log(cll.remove(100)); // 100
cll.printNode(); // head -> 10 -> 3 -> null

console.log(cll.size()); // 2
```

```jsx
// removeAt(): position 위치 노드 삭제
CircularLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head;
  let index = 0;
  let prev;
  let data;

  if (position === 0) {
    data = current.data;

    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    data = current.data;
    prev.next = current.next;
  }

  this.length--;
  return data;
};

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(cll.removeAt(1000)); // null
cll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(cll.removeAt(4)); // 1
cll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> null

console.log(cll.removeAt()); // 100
cll.printNode(); // head -> 2 -> 10 -> 3 -> null

console.log(cll.removeAt(1)); // 10
cll.printNode(); // head -> 2 -> 3 -> null

console.log(cll.size()); // 2
```

### **노드 데이터 위치 확인**

`CircularLinkedList.indexOf()`

```jsx
// indexOf(): value 값을 갖는 노드 위치 반환
CircularLinkedList.prototype.indexOf = function (value) {
  let current = this.head;
  let index = 0;

  do {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  } while (current != this.head);

  return -1;
};

// remove2(): indexOf + removeAt = remove
CircularLinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(cll.indexOf(1000)); // -1
console.log(cll.indexOf(1)); // 4
console.log(cll.indexOf(100)); // 0
console.log(cll.indexOf(10)); // 2
console.log(cll.remove2(1000)); // null

cll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(cll.remove2(1)); // 1
cll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> null

console.log(cll.remove2(2)); // 2
cll.printNode(); // head -> 100 -> 10 -> 3 -> null

console.log(cll.remove2(100)); // 100
cll.printNode(); // head -> 10 -> 3 -> null

console.log(cll.size()); // 2
```
