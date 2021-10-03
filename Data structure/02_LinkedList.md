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

