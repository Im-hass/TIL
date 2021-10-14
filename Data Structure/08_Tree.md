# 트리(Tree)

> **두 노드 사이에 하나의 간선으로 연결되어 있는 비선형 자료 구조**이다.

- **주요 용어**
    - **노드(node) :** 하나 이상의 값을 갖는 객체 단위
    - **간선(edge) :** 두 노드를 연결하는 선
    - **루트 노드(root node) :** 부모가 없는 최상위 노드(시작 위치)
    - **단말 노드(leaf node) :** 자식이 없는 노드
    - **부모 노드(parent node) :** 특정 sub-tree 내에서의 상위 노드
    - **자식 노드(child node) :** 특정 sub-tree 내에서의 하위 노드
    - **형제(sibling) :** 같은 부모를 가지는 노드
    - **노드 크기(size) :** 자신을 포함한 모든 자손 노드의 개수
    - **노드 깊이(depth) :** 루트에서 특정 노드에 도달하기 위한 간선의 개수
    - **노드 레벨(level) :** 트리의 특정 깊이를 가지는 노드의 집합
    - **노드 차수(degree) :** 노드가 지닌 가지의 수(= 리프 노드 수)
    - **트리 차수(tree degree) :** 트리 내 노드 중 최대 차수
    - **트리 높이(height) :** 루트 노드에서 가장 깊숙이 있는 노드의 깊이
- **특징**
    - 계층적인 모델이다.
    - "최소 연결 트리"라고 불리기도 한다.
    - 방향 비순환 그래프(DAG, Directed Acyclic Graph)의 일종이다.
    - 노드가 N개일 때, 항상 간선의 개수가 N-1개이다.
    - 파일 시스템, 데이터 베이스 시스템과 같이 계층적이고, 정렬된 데이터를 다루기에 적합하다.
    - 큰 데이터를 처리하는 소프트웨어는 대부분 데이터를 트리 자료구조로 저장해서 이진 탐색과 같은 탐색 기법을 이용해 빠르게 탐색이 가능하다.
- **트리 종류**
    
    이진 트리, 이진 탐색 트리, AVL 트리, 힙(Heap)
    
- **예시**
    
    ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/28a8a7d1-38f2-4a59-b6c7-d91dd752c60b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211014T053602Z&X-Amz-Expires=86400&X-Amz-Signature=d47fed934f69677e0d07e2fcf0c32f5aa3f07e881e231f6fd856cd634a75b9be&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)
<br>

## 8-1. 트리 순회

> 트리 구조에서 각각의 **노드를 한 번씩 체계적인 방법으로 방문**하는 과정이다.
> 
- **주요 용어**
    - **N(Node) :** 해당 노드를 방문
    - **L(Left) :** 왼쪽 서브 트리로 이동
    - **R(Right) :** 오른쪽 서브 트리로 이동
- **순회 방식**
    - **전위 순회(Pre-order) :** **N** → L → R
    - **중위 순회(In-order) :** L → **N** → R
    - **후위 순회(Post-order) :** L → R → **N**
    - **층별 순회(Level-order) :** 낮은 Level부터 순차적으로 순회

※ 순회 구현 [참고](https://www.notion.so/8-Tree-5fd2a4787a974ef3ae78542b55111477).

### 전위 순회(Pre-order)

> **N** → L → R
> 
1. 노드를 방문한다.
2. 왼쪽 서브 트리를 전위 순회한다.
3. 오른쪽 서브 트리를 전위 순회한다.

```jsx
// 의사 코드(Pseudo-code)
preorder(node)
  print node.value
  if node.left != null then perorder(node.left)
  if node.right != null then perorder(node.right)
```

### 중위 순회(In-order)

> L → **N** → R
> 
1. 왼쪽 서브 트리를 중위 순회한다.
2. 현재 노드를 방문한다.
3. 오른쪽 서브 트리를 중위 순회한다.

```jsx
// 의사 코드(Pseudo-code)
inorder(node)
	if node.left != null then inorder(node.left)
	print node.value
	if node.right != null then inorder(node.right)
```

### 후위 순회(Post-order)

> L → R → **N**
> 
1. 왼쪽 서브 트리를 후위 순회한다.
2. 오른쪽 서브 트리를 후위 순회한다.
3. 현재 노드를 방문한다.

```jsx
// 의사 코드(Pseudo-code)
postorder(node)
	if node.left != null then postorder(node.left)
	if node.right != null then postorder(node.right)
	print node.value
```

### 층별 순회(Level-order) - BFS

> 낮은 Level부터 순차적으로 순회, 너비 기준 순회.
> 
1. root 노드를 방문한다.
2. Level을 증가시킨다.
3. 왼쪽에서 오른쪽 순으로 방문한다.
- Queue를 이용한다.

```jsx
// 의사 코드(Pseudo-code)
levelorder(root)
	q.enqueue(root)
	while not q.empty do
		node := q.dequeue()
		print node.value
		if node.left != null then q.enqueue(node.left)
		if node.right != null then q.enqueue(node.right)
```
<br>

## 8-2. 이진 트리(Binary Tree)

> 각각의 노드가 **최대 두 개의 자식을 가지는 트리** 자료 구조이다.
> 
- 검색과 정렬을 위해 이진 탐색 트리와 이진 힙 구현에 활용된다.
- 허프만 코딩 : 연관 분기 구조를 위한 데이터 표현에 활용된다.
- **이진 트리의 종류**
    - **포화 이진 트리(Perfect binary tree)**
    - **완전 이진 트리(Complete binary tree)**
    - **정 이진 트리(Full binary tree)**
    - **편향 이진 트리(Skewed binary tree)**
    - **균형 이진 트리(Balanced binary tree)**

### 포화 이진 트리(Perfect binary tree)

> 모든 레벨의 노드가 가득 채워진 트리이다.
> 
- Leaf node를 제외한 모든 자식은 2개의 노드를 보유한다.
- **노드의 개수 :** $n = 2^h - 1$

### 완전 이진 트리(Complete binary tree)

> 마지막 레벨 전까지 노드가 가득 차있고, 마지막 레벨은 왼쪽부터 순차적으로 채워진 트리이다.
> 
- 배열을 사용해 효율적인 표현이 가능하다.
- **노드의 개수 :** $n < 2^h - 1$

### 정 이진 트리(Full binary tree)

> 모든 노드가 0개 또는 2개의 자식 노드만 갖는 트리이다.
> 
- proder 또는 plane 이진 트리라고도 불린다.
- **노드의 개수 :** $n ≤ 2^h - 1$

### 편향 이진 트리(Skewed binary tree)

> 왼쪽 또는 오른쪽으로 편향되게 치우쳐 있는 트리이다.
> 
- 각각의 높이에 하나의 노드만 존재한다.
- 오른쪽 편향, 왼쪽 편향으로 만들어질 수 있다.
- **노드의 개수 :** h

### 균형 이진 트리(Balanced binary tree)

> 삽입/삭제가 이루어 질 때, 왼쪽 서브 트리와 오른쪽 서브 트리의 높이 차를 1 이하로 맞추는 이진 탐색 트리이다.
> 
- 왼쪽, 오른쪽 서브 트리 높이의 차이가 항상 1 이하로 유지된다.
- **종류 :** AVL 트리, Red-Black 트리, B 트리, B+ 트리, B* 트리
<br>

## 8-3. 이진 트리 - 순회

> 이진 트리를 순회하는 방법.
> 
- 이진 트리는 Node(`left`, `value`, `right`)로 구성된다.
- `private`임을 의미적으로 명시하기 위해 메서드명 앞에 `_`를 붙여준다.
- Node에 값이 추가되어도, 수정을 최소화 하기 위해 `callback` 함수를 만들어 사용한다.
- `callback` 함수의 위치만 변경하면 전위, 중위, 후위 순회를 구현할 수 있다.
- **대표적인 메서드**
    - **생성자 :** `function Node(value)`, `function BinaryTree()`
    - **노드 추가 :** `BinaryTree._insertNode()`, `BinaryTree.insert()`
    - **전위 순회 :** `BinaryTree._preOrderTraverseNode()`, `BinaryTree.preOrderTraverse()`
    - **중위 순회 :** `BinaryTree._inOrderTraverseNode()`, `BinaryTree.inOrderTraverse()`
    - **후위 순회 :** `BinaryTree._postOrderTraverseNode()`, `BinaryTree.postOrderTraverse()`
    - **층별 순회 :** `BinaryTree.levelOrderTraverse()`

### **생성자**

- `function Node(value)`
- `function BinaryTree()`

```jsx
// Node(value) : value와 left, right node를 저장하는 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// BinaryTree() : 시작 노드를 저장하는 생성자
function BinaryTree() {
  this.root = null;
}

let tree = new BinaryTree();
console.log(tree); // BinaryTree { root: null }
```

### **노드 추가**

- `BinaryTree._insertNode(node, value)`
- `BinaryTree.insert(value)`

```jsx
// _insertNode(node, value) : 재귀로 트리를 순회하며 노드 추가 (private, 내부용)
BinaryTree.prototype._insertNode = function(node, value) {
  // 현재 값과 비교
  if(node === null) { // root 노드
    node = new Node(value);
  } else if(value < node.value) { // 작으면 왼쪽 노드로
    node.left = this._insertNode(node.left, value);
  } else if(value >= node.value) { // 크면 오른쪽 노드로
    node.right = this._insertNode(node.right, value);
  }

  return node;
}

// insert(value) : 노드 추가
BinaryTree.prototype.insert = function(value) {
  this.root = this._insertNode(this.root, value);
}

let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");

console.log(tree);
/*
BinaryTree {
  root: Node {
    value: 'F',
    left: Node { value: 'B', left: [Node], right: [Node] },
    right: null
  }
}
*/
```

### **전위 순회**

- `BinaryTree._preOrderTraverseNode()`
- `BinaryTree.preOrderTraverse()`

```jsx
// _preOrderTraverseNode(node, callback) : 재귀로 트리 전위 순회(private, 내부용)
BinaryTree.prototype._preOrderTraverseNode = function(node, callback) {
  if(node === null) { // 비어있는 트리
    return;
  }

  callback(node); // 현재 노드 방문
  this._preOrderTraverseNode(node.left, callback); // 왼쪽 서브 트리 전위 순회
  this._preOrderTraverseNode(node.right, callback); // 오른쪽 서브 트리 전위 순회
};

// preOrderTraverseNode(callback) : 전위 순회하며 노드 출력
BinaryTree.prototype.preOrderTraverse = function(callback) {
  this._preOrderTraverseNode(this.root, callback);
}

let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);
/*
BinaryTree {
  root: Node {
    value: 'F',
    left: Node { value: 'B', left: [Node], right: [Node] },
    right: Node { value: 'G', left: null, right: [Node] }
  }
}
*/

function printNode(node) { // callback 함수 = 방문
  process.stdout.write(`${node.value} -> `);
}

console.log("========== Pre-Order ==========");
tree.preOrderTraverse(printNode);
console.log("end");
/*
========== Pre-Order ==========
F -> B -> A -> D -> C -> E -> G -> I -> H -> end
*/
```

### **중위 순회**

- `BinaryTree._inOrderTraverseNode()`
- `BinaryTree.inOrderTraverse()`

```jsx
// _inOrderTraverseNode(node, callback) : 재귀로 트리 중위 순회(private, 내부용)
BinaryTree.prototype._inOrderTraverseNode = function(node, callback) {
  if(node === null) { // 비어있는 트리
    return;
  }

  this._inOrderTraverseNode(node.left, callback); // 왼쪽 서브 트리 중위 순회
  callback(node); // 현재 노드 방문
  this._inOrderTraverseNode(node.right, callback); // 오른쪽 서브 트리 중위 순회
};

// inOrderTraverse(callback) : 중위 순회하며 노드 출력
BinaryTree.prototype.inOrderTraverse = function(callback) {
  this._inOrderTraverseNode(this.root, callback);
}

let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

function printNode(node) { // callback 함수 = 방문
  process.stdout.write(`${node.value} -> `);
}

console.log("========== In-Order ==========");
tree.inOrderTraverse(printNode);
console.log("end");
/*
========== In-Order ==========
A -> B -> C -> D -> E -> F -> G -> H -> I -> end
*/
```

### **후위 순회**

- `BinaryTree._postOrderTraverseNode()`
- `BinaryTree.postOrderTraverse()`

```jsx
// _PostOrderTraverseNode(node, callback) : 재귀로 트리 후위 순회(private, 내부용)
BinaryTree.prototype._PostOrderTraverseNode = function(node, callback) {
  if(node === null) { // 비어있는 트리
    return;
  }

  this._PostOrderTraverseNode(node.left, callback); // 왼쪽 서브 트리 후위 순회
  this._PostOrderTraverseNode(node.right, callback); // 오른쪽 서브 트리 후위 순회
  callback(node); // 현재 노드 방문
};

// PostOrderTraverse(callback) : 후위 순회하며 노드 출력
BinaryTree.prototype.PostOrderTraverse = function(callback) {
  this._PostOrderTraverseNode(this.root, callback);
}

let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

function printNode(node) { // callback 함수 = 방문
  process.stdout.write(`${node.value} -> `);
}

console.log("========== Post-Order ==========");
tree.PostOrderTraverse(printNode);
console.log("end");
/*
========== Post-Order ==========
A -> C -> E -> D -> B -> H -> I -> G -> F -> end
*/
```

### **층별 순회**

- `BinaryTree.levelOrderTraverse()`

```jsx
function Queue(array) {
  this.array = array ? array : [];
}

Queue.prototype.isEmpty = function() {
  return this.array.length === 0;
}

Queue.prototype.enqueue = function(element) {
  return this.array.push(element);
}

Queue.prototype.dequeue = function() {
  return this.array.shift();
}

// levelOrderTraverse(callback) : 층별 순회하며 노드 출력
BinaryTree.prototype.levelOrderTraverse = function(callback) {
  let q = new Queue();
  let node;

  q.enqueue(this.root);

  while(!q.isEmpty()) {
    node = q.dequeue();
    callback(node);
    if(node.left !== null) q.enqueue(node.left);
    if(node.right !== null) q.enqueue(node.right);
  }
}

let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

function printNode(node) { // callback 함수 = 방문
  process.stdout.write(`${node.value} -> `);
}

console.log("========== Level-Order ==========");
tree.levelOrderTraverse(printNode);
console.log("end");
/*
========== Level-Order ==========
F -> B -> G -> A -> D -> I -> C -> E -> H -> end
*/
```
<br>

## 8-4. 이진 탐색 트리(Binary Search Tree)

> 이진 탐색이 동작할 수 있도록 고안된, 효율적인 탐색이 가능한 자료구조이다.
> 
- 트리 자료구조 중 가장 간단한 형태이다.
- 이진 트리와 동일한 구조이다.
- 부모 노드를 기준으로 "왼쪽 자식 노드 < 부모 노드 < 오른쪽 자식 노드"가 성립해야 한다.
- 가장 왼쪽에 트리의 최솟값이, 가장 오른쪽에 트리의 최댓값이 위치한다.
- **대표적인 메서드**
    - **생성 :** `function Node(value)`, `function BinarySearchTree()`
    - **노드 추가 :** `BinarySearchTree._insertNode(node, value)`, `BinarySearchTree.insert(value)`
    - **노드 탐색(최댓값) :** `BinarySearchTree._maxNode(node)`, `BinarySearchTree.max()`
    - **노드 탐색(최솟값) :** `BinarySearchTree._minNode(node)`, `BinarySearchTree.min()`
    - **노드 탐색(특정값) :** `BinarySearchTree._searchNode(node, value)`, `BinarySearchTree.search(value)`
    - **노드 삭제 :** `BinarySearchTree._findMinNode(node)`, `BinarySearchTree._removeNode(node, value)`, `BinarySearchTree.remove(value)`

### **생성**

- `function Node(value)`
- `function BinarySearchTree()`
- 구현 [참고](https://www.notion.so/8-Tree-5fd2a4787a974ef3ae78542b55111477).

### **노드 추가**

- `BinaryTree._insertNode(node, value)`
- `BinaryTree.insert(value)`
- 구현 [참고](https://www.notion.so/8-Tree-5fd2a4787a974ef3ae78542b55111477).

```jsx
let tree = new BinarySearchTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}
```

### **노드 탐색(최댓값)**

- `BinarySearchTree._maxNode(node)`
- `BinarySearchTree.max()`

```jsx
// _maxNode(node) : 반복문으로 트리를 순회하며 최댓값 노드 탐색
BinarySearchTree.prototype._maxNode = function(node) {
  if(node === null) {
    return null;
  }

  while(node && node.right !== null) {
    node = node.right;
  }

  return node.value;
};

// max() : 최댓값 노드 탐색
BinarySearchTree.prototype.max = function() {
  return this._maxNode(this.root);
};

console.log(tree.max()); // I
```

### **노드 탐색(최솟값)**

- `BinarySearchTree._minNode(node)`
- `BinarySearchTree.min()`

```jsx
// _minNode(node) : 반복문으로 트리를 순회하며 최댓값 노드 탐색
BinarySearchTree.prototype._minNode = function(node) {
  if(node === null) {
    return null;
  }

  while(node && node.left !== null) {
    node = node.left;
  }

  return node.value;
};

// min() : 최댓값 노드 탐색
BinarySearchTree.prototype.min = function() {
  return this._minNode(this.root);
};

console.log(tree.min()); // A
```

### **노드 탐색(특정값)**

- `BinarySearchTree._searchNode(node, value)`
- `BinarySearchTree.search(value)`

```jsx
// _searchNode(node, value) : 재귀로 트리를 순회하며 값을 만족하는 노드 탐색
BinarySearchTree.prototype._searchNode = function(node, value) {
  if(node === null) {
    return false;
  }

  if(node.value === value) {
    return true;
  } else if(node.value > value) {
    return this._searchNode(node.left, value);
  } else if(node.value < value) {
    return this._searchNode(node.right, value);
  }
}

// search(value) : value 노드 탐색
BinarySearchTree.prototype.search = function(value) {
  return this._searchNode(this.root, value);
}

console.log(tree.root);
/*
Node {
  value: 'F',
  left: Node {
    value: 'B',
    left: Node { value: 'A', left: null, right: null },
    right: Node { value: 'D', left: [Node], right: [Node] }
  },
  right: Node {
    value: 'G',
    left: null,
    right: Node { value: 'I', left: [Node], right: null }
  }
}
*/

console.log(tree.search("J") ? "Found J" : "Not found J"); // Not found J
console.log(tree.search("I") ? "Found I" : "Not found I"); // Found I
```

### **노드 삭제**

- `BinarySearchTree._findMinNode(node)`
- `BinarySearchTree._removeNode(node, value)`
- `BinarySearchTree.remove(value)`

```jsx
// _findMinNode(node) : 반복문으로 트리를 순회하며 최솟값을 가진 노드 탐색
BinarySearchTree.prototype._findMinNode = function(node) {
  while(node && node.left !== null) {
    node = node.left;
  }

  return node;
}

// _removeNode(node, value) : 재귀로 트리를 순회하며 값을 만족하는 노드를 찾아 삭제
BinarySearchTree.prototype._removeNode = function(node, value) {
  if(node === null) {
    return null;
  }

  if(node.value === value) {
    if(node.left === null && node.right === null) { // 자식 노드가 0개일 경우 = 단말 노드일 경우
      node = null;
    } else if(node.left === null) { // 자식 노드가 1개일 경우
      node = node.right;
    } else if(node.right === null) { // 자식 노드가 1개일 경우
      node = node.left;
    } else { // 자식 노드가 2개일 경우
			// 오른쪽 서브트리에서 가장 작은 값을 부모 노드로 지정한다.
      let aux = this._findMinNode(node.right);
      node.value = aux.value;
      node.right = this._removeNode(node.right, aux.value);
    }
  } else if(node.value > value) {
    node.left = this._removeNode(node.left, value);
  } else if(node.value < value) {
    node.right = this._removeNode(node.right, value);
  }
  
  return node;
};

// remove(value) : 노드 삭제
BinarySearchTree.prototype.remove = function(value) {
  root = this._removeNode(this.root, value);
};

tree.inOrderTraverse(printNode); // A -> B -> C -> D -> E -> F -> G -> H -> I -> 
console.log();

tree.remove("H");
tree.inOrderTraverse(printNode); // A -> B -> C -> D -> E -> F -> G -> I ->
console.log();

tree.remove("D");
tree.inOrderTraverse(printNode); // A -> B -> C -> E -> F -> G -> I ->
console.log();

tree.remove("F");
tree.inOrderTraverse(printNode); // A -> B -> C -> E -> G -> I ->
console.log();

console.log(tree.root);
/*
Node {
  value: 'G',
  left: Node {
    value: 'B',
    left: Node { value: 'A', left: null, right: null },
    right: Node { value: 'E', left: [Node], right: null }
  },
  right: Node { value: 'I', left: null, right: null }
}
*/
```
<br>
