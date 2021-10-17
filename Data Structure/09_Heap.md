# 힙(Heap)

> **완전 이진 트리 형태**로 연산을 수행하는 자료 구조이다.

- 최댓값, 최솟값을 빠르게 찾을 수 있다.
- **종류**
    - **최소 힙(Min Heap) :** 부모 노드의 값이 자식 노드의 값보다 작거나 같다. **루트 노드가 가장 작은 값이 된다.**
    - **최대 힙(Max Heap) :** 부모 노드의 값이 자식 노드의 값보다 크거나 같다. **루트 노드가 가장 큰 값이 된다.**
- **대표적인 속성**
    - **형태 :** 완전 이진 트리(complete binary tree)
    - **정렬 :** 각 노드의 값은 자식 노드 값보다 작거나, 큰 순서대로 정렬
- **구현**
    - **1차원 배열**을 이용해 구현한다.
    - **현재 노드 :** N
    - **부모 노드 :** (N - 1) / 2
    - **왼쪽 자식 노드 :** (N * 2) + 1
    - **오른쪽 자식 노드 :** (N * 2) + 2
- **대표적인 메서드**
    - **생성 :** `function Heap()`
    - **요소 위치 변경 :** `Heap.swap(index1, index2)`
    - **노드 위치  계산 :** `Heap.parentIndex(index)`, `Heap.leftChildIndex(index)`, `Heap.rightChildIndex(index)`
    - **노드 값 확인 :** `Heap.parent(index)`, `Heap.leftChild(index)`, `Heap.rightChild(index)`
    - **루트 요소 반환, 크기 반환 :** `Heap.peek()`, `Heap.size()`
    - **최소힙/최대힙 - 노드 추가/정렬, 삭제/추출 :** `Heap.insert()`, `Heap.bubbleUp()`, `Heap.extract()`, `Heap.bubbleDown()`

## 10-1. 힙 구현

### 생성

- `function Heap()`

```jsx
// Heap() : 배열 내 요소를 저장하는 생성자
function Heap() {
  this.items = [];
}
```

### 요소 위치 변경

- `Heap.swap(index1, index2)`

```jsx
// swap(index1, index2) : 배열 내 두 요소의 위치 변경
Heap.prototype.swap = function(index1, index2) {
  let temp = this.items[index1];
  this.items[index1] = this.items[index2];
  this.items[index2] = temp;
};
```

### 노드 위치  계산

- `Heap.parentIndex(index)`
- `Heap.leftChildIndex(index)`
- `Heap.rightChildIndex(index)`

```jsx
// parentIndex(index) : 부모 노드의 위치 반환
Heap.prototype.parentIndex = function(index) {
  return Math.floor((index - 1) / 2);
};

// leftChildIndex(index) : 왼쪽 자식 노드의 위치 반환
Heap.prototype.leftChildIndex = function(index) {
  return index * 2 + 1;
};

// rightChildIndex(index) : 오른쪽 자식 노드의 위치 반환
Heap.prototype.rightChildIndex = function(index) {
  return index * 2 + 2;
};
```

### 노드 값 확인

- `Heap.parent(index)`
- `Heap.leftChild(index)`
- `Heap.rightChild(index)`

```jsx
// parent(index) : 부모 노드의 값 반환
Heap.prototype.parent = function(index) {
  return this.items[this.parentIndex(index)];
};

// leftChild(index) : 왼쪽 자식 노드의 값 반환
Heap.prototype.leftChild = function(index) {
  return this.items[this.leftChildIndex(index)];
};

// rightChild(index) : 오른쪽 자식 노드의 값 반환
Heap.prototype.rightChild = function(index) {
  return this.items[this.rightChildIndex(index)];
};
```

### 루트 요소 반환, 크기 반환

- `Heap.peek()`
- `Heap.size()`

```jsx
// peek() : 정렬된 최소/최대 요소 값 반환
Heap.prototype.peek = function() {
  return this.items[0];
};

// size() : 크기 반환
Heap.prototype.size = function() {
  return this.items.length;
};
```

### 최소힙 - 노드 추가/정렬, 삭제/추출

> 최소힙/최대힙은 `Heap.bubbleUp()`, `Heap.bubbleDown()`메서드의 부등호만 반대로 변경하면 쉽게 구현 가능.
> 
- `Heap.bubbleUp()`
- `Heap.insert()`
- `Heap.bubbleDown()`
- `Heap.extract()`

```jsx
// insert() : 새로운 노드 추가
Heap.prototype.insert = function(item) {
  this.items[this.size()] = item;
  this.bubbleUp();
};

// bubbleUp() : 추가된 노드 위치 정렬
Heap.prototype.bubbleUp = function() {
  let index = this.size() - 1;
  
  while(this.parent(index) && this.parent(index) > this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
};

// extract() : root 노드 반환, 삭제
Heap.prototype.extract = function() {
  let item = this.items[0];

  this.items[0] = this.items[this.size() - 1];
  this.items.pop();
  this.bubbleDown();

  return item;
};

// bubbleDown() : 대체된 root 노드 위치 정렬
Heap.prototype.bubbleDown = function() {
  let index = 0;

  while(
    (this.leftChild(index)) &&
    (this.leftChild(index) < this.items[index]) ||
    (this.rightChild(index) < this.items[index])
  ) {
    let childIndex = this.leftChildIndex(index);

    if(
      (this.rightChild(index)) &&
      (this.rightChild(index) < this.items[childIndex])
    ) {
      childIndex = this.rightChildIndex(index);
    }

    this.swap(childIndex, index);
    index = childIndex;
  }
}

let minHeap = new Heap();

minHeap.insert(90);
minHeap.insert(15);
minHeap.insert(10);
minHeap.insert(7);
minHeap.insert(12);
minHeap.insert(2);
minHeap.insert(8);
minHeap.insert(3);

console.log(minHeap);
/*
Heap { 
  items: [
    2,  3, 7, 10,
    12, 15, 8, 90
  ]
}
*/

console.log("최소힙");
console.log(minHeap.extract()); // 2
console.log(minHeap.extract()); // 3
console.log(minHeap.extract()); // 7
console.log(minHeap.extract()); // 8
console.log(minHeap.extract()); // 10
console.log(minHeap.extract()); // 12
console.log(minHeap.extract()); // 15
console.log(minHeap.extract()); // 90
```

### 최대힙 - 노드 추가/정렬, 삭제/추출

> 최소힙/최대힙은 `Heap.bubbleUp()`, `Heap.bubbleDown()`메서드의 부등호만 반대로 변경하면 쉽게 구현 가능.
> 
- `Heap.bubbleUp()`
- `Heap.insert()`
- `Heap.bubbleDown()`
- `Heap.extract()`

```jsx
// 최대힙
// bubbleUp() : 추가된 노드 위치 정렬
Heap.prototype.bubbleUp = function() {
  let index = this.size() - 1;

  while(
    (this.parent(index)) &&
    (this.parent(index) < this.items[index])
  ) {
    // changed from > to <
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
};

// bubbleDown() : 대체된 root 노드 위치 정렬
Heap.prototype.bubbleDown = function() {
  let index = 0;

  while(
    // change form < to >
    (this.leftChild(index)) &&
    (this.leftChild(index) > this.items[index] || this.rightChild(index) > this.items[index])
  ) {
    let childIndex = this.leftChildIndex(index);

    if(
      this.rightChild(index) &&
      this.rightChild(index) > this.items[childIndex]
    ) {
      childIndex = this.rightChildIndex(index);
    }

    this.swap(childIndex, index);
    index = childIndex;
  }
}

let maxHeap = new Heap();

maxHeap.insert(90);
maxHeap.insert(15);
maxHeap.insert(10);
maxHeap.insert(7);
maxHeap.insert(12);
maxHeap.insert(2);
maxHeap.insert(8);
maxHeap.insert(3);

console.log();
console.log(maxHeap);
/*
Heap {
  items: [
    90, 15, 10, 7,
    12,  2,  8, 3
  ]
}
*/

console.log("최대힙");
console.log(maxHeap.extract()); // 90
console.log(maxHeap.extract()); // 3
console.log(maxHeap.extract()); // 8
console.log(maxHeap.extract()); // 2
console.log(maxHeap.extract()); // 12
console.log(maxHeap.extract()); // 10
console.log(maxHeap.extract()); // 15
console.log(maxHeap.extract()); // 7
```
