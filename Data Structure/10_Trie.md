# 트라이(Trie)

> **문자열, 연관 배열**을 저장하는 **탐색 트리 자료 구조**의 일종이다.

- **특징**
    - 문자열 검색에 특화되어 있다.
    - 문자열 길이가 M일 경우, O(M)의 시간 복잡도로 검색이 가능하다.
    - 문자열의 중복을 막아준다.
    - 문자열의 순서를 보장한다.
    - 단어의 끝을 마킹을 해준다.
    - 마킹의 개수를 보면 단어의 개수를 알 수 있다.
- **대표적인 메서드**
    - **생성 :** `function TrieNode()`, `function Tire()`
    - **데이터 추가 :** `Trie.insert(word)`
    - **데이터 존재 여부 :** `Trie.search(word)`
    - **데이터 삭제 :** `Trie.delete(word, current, index)`

## 1. 트라이 구현

### 생성

- `function TrieNode()`
- `function Tire()`

```jsx
// TrieNode() : 문자값과 단어 여부 저장을 위한 생성자
function TrieNode() {
  this.children = {}; // key : 문자, value : TrieNode
  this.endOfWord = false;
}

// Tire() : 루트 노드 저장을 위한 생성자
function Trie() {
  this.root = new TrieNode();
}

let trie = new Trie();
console.log(trie); // Trie { root: TrieNode { children: {}, endOfWord: false } }
```

### 데이터 추가

- `Trie.insert(word)`

```jsx
// insert(word) : 문자열 추가
Trie.prototype.insert = function(word) {
  let current = this.root;

  for(let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];

    if(node === undefined) {
      node = new TrieNode();
      current.children[ch] = node;
    }

    current = node;
  }

  current.endOfWord = true;
};

let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");
trie.insert("dd");

console.log(trie.root);
/*
TrieNode {
  children: {
    b: TrieNode { children: [Object], endOfWord: false },
    c: TrieNode { children: [Object], endOfWord: false },
    d: TrieNode { children: [Object], endOfWord: false }
  },
  endOfWord: false
}
*/
```

### 데이터 **존재 여부**

- `Trie.search(word)`

```jsx
// search(word) : 문자열 검색
Trie.prototype.search = function(word) {
  let current = this.root;

  for(let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];

    if(node === undefined) {
      return false;
    }

    current = node;
  }

  return current.endOfWord;
}

console.log(trie.search("bear")); // false
console.log(trie.search("b")); // false
console.log(trie.search("bee")); // true
```

### 데이터 삭제

- `Trie.delete(word, current, index)`

```jsx
// delete(word, current, index) : 문자열 삭제
Trie.prototype.delete = function(word, current = this.root, index = 0) {
	// 재귀 종료 조건
  if(index === word.length) {
    if(!current.endOfWord) return false;

    current.endOfWord = false;

    return Object.keys(current.children).length === 0;
  }

	// 로직
  let ch = word[index];
  let node = current.children[ch];

  if(node === undefined) return false;

  let isDeleteNode = this.delete(word, node, index + 1) && !node.endOfWord; // 재귀

  if(isDeleteNode) {
    delete current.children[ch];
    return Object.keys(current.children).length === 0;
  }

  return false;
};

console.log(trie.search("bee")); // true

trie.delete("bear");
console.log(trie.search("bee")); // true

trie.delete("b");
console.log(trie.search("bee")); // true

trie.delete("bee");
console.log(trie.search("bee")); // false

console.log(trie.root.children);
/*
{
  b: TrieNode { children: { e: [TrieNode] }, endOfWord: false },
  c: TrieNode {
    children: { a: [TrieNode], d: [TrieNode] },
    endOfWord: false
  },
  d: TrieNode { children: { d: [TrieNode] }, endOfWord: false }
}
*/

console.log(trie.root.children["b"]);
/*
TrieNode {
  children: { e: TrieNode { children: {}, endOfWord: true } },
  endOfWord: false
}
*/

console.log(trie.root.children["b"].children["e"]); // TrieNode { children: {}, endOfWord: true }
```
