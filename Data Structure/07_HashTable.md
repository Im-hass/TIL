# 해시 테이블(HashTable)
## 7-1. 해시 함수(Hash Function)

> 임의의 길이 데이터를 **고정된 길이의 데이터로 매핑**해주는 함수이다.

- 여러 키 데이터들이 있을 때, key가 해시 함수를 거치게 되면 특정 정수 형태의 인덱스를 갖는 해시 값으로 변경된다.
- 암호화, 비밀번호 저장에 자주 사용된다.
- **특성**
    - **압축성 :** 다양한 가변 길이에 대해 고정된 크기의 결과값을 반환하는 성질.
    - **효율성 :** 어떠한 입력에 대해서도 많은 자원과 시간을 소요하지 않고 처리하는 성질.
    - **저항성 :** 결과값을 바탕으로 입력 값을 찾는 것이 불가능한 성질.
<br>

## 7-2. 해시 테이블(Hash Table)

> **해시 함수를 사용하여 특정 값을 신속하게 찾는 자료구조**이다.

- **평균 O(1)의 시간 복잡도**를 가진다.
- **다른 데이터에 대해 같은 해시 값**이 나올 경우 **충돌**이 발생한다.
- **충돌 해결 방법**
    - **해시 함수 변경 :** 더 큰 숫자의 공간과 모듈러 산술 값을 이용해 충돌 최소화.
    - **자료 구조 확장 :** Open Addressing Method(선형 조사법, 이중 해시), Close Addressing Method(체이닝)
- **대표적인 메서드**
    - **생성**
        
        `function Element(key, value)`
        
        `function HashTable()`
        
    - **해시 함수**
        
        `HashTable.hashCode(key)` : loselose 사용
        
    - **데이터 추가, 삭제**
        
        `HashTable.put(key, value)`, `HashTable.remove(key)`
        
    - **하나의 데이터 반환, 전체 데이터 반환, 전체 데이터 출력**
        
        `HashTable.get(key)`, `HashTable.getBuffer()`, `HashTable.print()`
        
    - **초기화, 크기 반환**
        
        `HashTable.clear()`, `HashTable.size()`

### **생성**

- `function Element(key, value)`
- `function HashTable()`

```jsx
const HASH_SIZE = 37;

// Element(key, value) : key, value를 저장하기 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// HashTable() : 생성자
function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

let ht = new HashTable();
console.log(ht); // HashTable { table: [ <37 empty items> ], length: 0 }
```

### **해시 함수**

- `HashTable.hashCode(key)` : loselose 사용

```jsx
// hashCode(key) : loselose 해시 함수
HashTable.prototype.hashCode = function(key) {
  let hash = 0;

  for(let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % HASH_SIZE;
};

let ht = new HashTable();
console.log(ht); // HashTable { table: [ <37 empty items> ], length: 0 }

console.log(ht.hashCode("Ana")); // 13
console.log(ht.hashCode("Alice")); // 34
console.log(ht.hashCode("Sue")); // 5
```

### **데이터 추가, 삭제**

- `HashTable.put(key, value)`
- `HashTable.remove(key)`

```jsx
// put(key, value) : 데이터 추가
HashTable.prototype.put = function(key, value) {
  let index = this.hashCode(key);

  // console.log(`key : ${key} -> index : ${index}`);
  // /*
  //   key : Ana -> index : 13
  //   key : Sue -> index : 5
  //   key : Paul -> index : 32
  // */

  if(this.table[index] !== undefined) { // 있으면
    return false;
  }

  this.table[index] = new Element(key, value);
  this.length++;

  return true;
}

// remove(key) : 데이터 삭제
HashTable.prototype.remove = function(key) {
  let element = this.table[this.hashCode(key)];

  if(element !== undefined) { // 있으면
    delete this.table[this.hashCode(key)];
    this.length--;
  }

  return element;
}

let ht = new HashTable();
console.log(ht); // HashTable { table: [ <37 empty items> ], length: 0 }

ht.put("Ana", 170);
ht.put("Sue", 150);
ht.put("Paul", 180);
console.log(ht);
/*
HashTable {
  table: [
    <5 empty items>,
    Element { key: 'Sue', value: 150 },
    <7 empty items>,
    Element { key: 'Ana', value: 170 },
    <18 empty items>,
    Element { key: 'Paul', value: 180 },
    <4 empty items>
  ],
  length: 3
}
*/

console.log(ht.remove("Paul")); // Element { key: 'Paul', value: 180 }
console.log(ht.remove("Paul")); // undefined
console.log(ht);
/*
HashTable {
  table: [
    <5 empty items>,
    Element { key: 'Sue', value: 150 },
    <7 empty items>,
    Element { key: 'Ana', value: 170 },
    <23 empty items>
  ],
  length: 2
}
*/
```

### **하나의 데이터 반환, 전체 데이터 반환, 전체 데이터 출력**

- `HashTable.get(key)`
- `HashTable.getBuffer()`
- `HashTable.print()`

```jsx
// get(key) : 데이터 조회
HashTable.prototype.get = function(key) {
  return this.table[this.hashCode(key)];
}

// getBuffer() : 전체 데이터 반환
HashTable.prototype.getBuffer = function() {
  let array = [];

  for(let i = 0; i < this.table.length; i++) {
    if(this.table[i]) {
      array.push(this.table[i]);
    }
  }

  return array;
}

// print() : 전체 데이터 출력
HashTable.prototype.print = function() {
  for(let i = 0; i < this.table.length; i++) {
    if(this.table[i]) {
      console.log(`${i} -> ${this.table[i].key} : ${this.table[i].value}`);
    }
  }
}

let ht = new HashTable();

ht.put("Ana", 160);
ht.put("Alice", 150);
ht.put("Paul", 180);

console.log(ht.get("Ana")); // Element { key: 'Ana', value: 160 }
console.log(ht.get("Sue")); // undefined

console.log(ht.getBuffer());
/*
[
  Element { key: 'Ana', value: 160 },
  Element { key: 'Paul', value: 180 },
  Element { key: 'Alice', value: 150 }
]
*/

ht.print();
/*
13 -> Ana : 160
32 -> Paul : 180
34 -> Alice : 150
*/
```

### **초기화, 크기 반환**

- `HashTable.clear()`
- `HashTable.size()`

```jsx
// clear() : 해시 테이블 초기화
HashTable.prototype.clear = function() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// size() : 전체 데이터 크기 반환
HashTable.prototype.size = function() {
  return this.length;
}

let ht = new HashTable();

ht.put("Ana", 160);
ht.put("Alice", 150);
ht.put("Paul", 180);

console.log(ht);
/*
HashTable {
  table: [
    <13 empty items>,
    Element { key: 'Ana', value: 160 },
    <18 empty items>,
    Element { key: 'Paul', value: 180 },
    <1 empty item>,
    Element { key: 'Alice', value: 150 },
    <2 empty items>
  ],
  length: 3
}
*/

console.log(ht.size()); // 3

ht.clear();

console.log(ht); // HashTable { table: [ <37 empty items> ], length: 0 }
```
<br>

## 7-3. **충돌 및 해결 방안 예시**

### 충돌 예시

> loselose hash function 사용 시, index가 동일한 값이 나올 경우 처음으로 들어간 값만 저장된다.
> 

```jsx
const HASH_SIZE = 37;

// hashCode(key) : loselose 해시 함수
HashTable.prototype.hashCode = function(key) {
  let hash = 0;

  for(let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % HASH_SIZE;
};

let ht = new HashTable();

console.log(ht.put("Ana", 150)); // true
console.log(ht.put("Donnie", 170)); // false
console.log(ht.put("Sue", 164)); // true
console.log(ht.put("Jamie", 168)); // false
console.log(ht.put("Paul", 180)); // true
/*
key : Ana -> index : 13
key : Donnie -> index : 13
key : Sue -> index : 5
key : Jamie -> index : 5
key : Paul -> index : 32
*/

console.log(ht.size()); // 3

ht.print();
/*
5 -> Sue : 164
13 -> Ana : 150
32 -> Paul : 180
*/
```

### 해결

> 다른 해시 함수를 사용하거나 자료 구조를 확장하는 선형 조사법, 체이닝 등을 사용한다.
> 
- 여기서는 다른 해시 함수, djb2 hash function을 사용한다.
- 가장 일반적으로 사용하는 해시 함수이다.
- 소수를 사용하면 충돌 확률이 줄어든다.
- 선형 조사법 [참고](#7-4-선형-조사법-해시-테이블Linear-probing-Hash-Table), 체이닝 [참고](#7-5-체이닝-해시-테이블Chaining-Hash-Table)

```jsx
const HASH_SIZE = 1013;

// hashCode(key) : djb2 해시 함수
HashTable.prototype.hashCode = function(key) {
  let hash = 5381; // seed;

  for(let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }

  return hash % HASH_SIZE;
};

let ht = new HashTable();

console.log(ht.put("Ana", 150)); // true
console.log(ht.put("Donnie", 170)); // true
console.log(ht.put("Sue", 164)); // true
console.log(ht.put("Jamie", 168)); // true
console.log(ht.put("Paul", 180)); // true
/*
key : Ana -> index : 925
key : Donnie -> index : 278
key : Sue -> index : 502
key : Jamie -> index : 962
key : Paul -> index : 54
*/

console.log(ht.size()); // 5

ht.print();
/*
54 -> Paul : 180
278 -> Donnie : 170
502 -> Sue : 164
925 -> Ana : 150
962 -> Jamie : 168
*/
```
<br>

## 7-4. 선형 조사법 해시 테이블(Linear probing Hash Table)

> **Hash 충돌이 발생했을 때, 다음 주소를 확인하고 비어 있다면 그 자리에 저장**하는 해시 테이블 기반 자료구조이다.
> 
- **대표적인 메서드 :** `put()`, `remove()`, `get()` 외에 일반 해시 테이블과 동일.
    - **데이터 추가, 하나의 데이터 반환, 삭제**
        
        `HashTable.put(key, value)`, `HashTable.get(key)`, `HashTable.remove(key)`
        

### **데이터 추가**

- `HashTable.put(key, value)`
    1. 값 존재 여부 확인
    2. 비어 있다면 put
    3. 비어 있지 않다면 next index로 이동하여 put
    4. 전체 참조 후 시작 index와 동일해지면 실패.

```jsx
// put(key, value) : 데이터 추가
LinearHashTable.prototype.put = function(key, value) {
  let index = this.hashCode(key);
  let startIndex = index;

  console.log(`key : ${key} -> index : ${index}`);

  do{
    if(this.table[index] === undefined) { // 없으면
      this.table[index] = new Element(key, value);
      this.length++;
      return true;
    }

    index = (index + 1) % HASH_SIZE;
  } while(index !== startIndex);

  return false;
};

let lht = new LinearHashTable();
console.log(lht); // LinearHashTable { table: [ <5 empty items> ], length: 0 }

lht.put("Ana", 160);
lht.put("John", 178);
lht.put("Donnie", 150); // 충돌 : 다음 인덱스
lht.put("Mindy", 160);

console.log(lht.put("Paul", 155)); // true
console.log(lht.put("Sue", 145)); // 충돌 : 인덱스 부족, false
/*
key : Ana -> index : 2
key : John -> index : 4
key : Donnie -> index : 0
key : Mindy -> index : 3
key : Paul -> index : 2
key : Sue -> index : 1
*/

lht.print();
/*
0 -> Donnie : 150
1 -> Paul : 155
2 -> Ana : 160
3 -> Mindy : 160
4 -> John : 178
*/

console.log(lht.getBuffer());
/*
[
  Element { key: 'Donnie', value: 150 },
  Element { key: 'Paul', value: 155 },
  Element { key: 'Ana', value: 160 },
  Element { key: 'Mindy', value: 160 },
  Element { key: 'John', value: 178 }
]
*/

console.log(lht);
/*
LinearHashTable {
  table: [
    Element { key: 'Donnie', value: 150 },
    Element { key: 'Paul', value: 155 },
    Element { key: 'Ana', value: 160 },
    Element { key: 'Mindy', value: 160 },
    Element { key: 'John', value: 178 }
  ],
  length: 5
}
*/

lht.clear();
console.log(lht); // LinearHashTable { table: [ <5 empty items> ], length: 0 }
```

### **하나의 데이터 반환**

- `HashTable.get(key)`
    
    값이 `undefined`가 아니고, `key`가 같다면 `value` 리턴.
    

```jsx
// get(key) : 데이터 조회
LinearHashTable.prototype.get = function(key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do{
    if(this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }

    index = (index + 1) % HASH_SIZE;
  } while(index !== startIndex);

  return undefined;
};

let lht = new LinearHashTable();
console.log(lht); // LinearHashTable { table: [ <5 empty items> ], length: 0 }

lht.put("Ana", 150);
lht.put("John", 155);
lht.put("Donnie", 170);
lht.put("Mindy", 140);
lht.put("Paul", 178); // 충돌 : 다음 인덱스
/*
key : Ana -> index : 2
key : John -> index : 4
key : Donnie -> index : 0
key : Mindy -> index : 3
key : Paul -> index : 2
*/

lht.print();
/*
0 -> Donnie : 170
1 -> Paul : 178
2 -> Ana : 150
3 -> Mindy : 140
4 -> John : 155
*/

console.log(lht.get("Ana")); // 150
console.log(lht.get("Paul")); // 178
console.log(lht.get("Kim")); // undefine
```

### 데이터 삭제

- `HashTable.remove(key)`
    
    값이 `undefined`가 아니고, `key`가 같다면 `element` 리턴.
    

```jsx
// remove(key) : 데이터 삭제
LinearHashTable.prototype.remove = function(key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if(this.table[index] !== undefined && this.table[index].key === key) {
      let element = this.table[index];
      delete this.table[index];
      this.length--;

      return element;
    }

    index = (index + 1) % HASH_SIZE;
  } while(index !== startIndex);

  return undefined;
};

let lht = new LinearHashTable();
console.log(lht); // LinearHashTable { table: [ <5 empty items> ], length: 0 }

lht.put("Ana", 140);
lht.put("John", 130);
lht.put("Donnie", 170);
lht.put("Mindy", 170);
lht.put("Paul", 180); // 충돌 : 다음 인덱스
/*
key : Ana -> index : 2
key : John -> index : 4
key : Donnie -> index : 0
key : Mindy -> index : 3
key : Paul -> index : 2
*/

console.log(lht.remove("Ana")); // Element { key: 'Ana', value: 140 }

console.log(lht.get("Paul")); // 180
console.log(lht.remove("Paul")); // Element { key: 'Paul', value: 180 }
console.log(lht.get("Paul")); // undefined

console.log(lht.remove("Paul")); // undefined

lht.print();
/*
0 -> Donnie : 170
3 -> Mindy : 170
4 -> John : 130
*/

console.log(lht);
/*
LinearHashTable {
  table: [
    Element { key: 'Donnie', value: 170 },
    <2 empty items>,
    Element { key: 'Mindy', value: 170 },
    Element { key: 'John', value: 130 }
  ],
  length: 3
}
*/
```
<br>

## 7-5. 체이닝 해시 테이블(Chaining Hash Table)

> **별도로 연결 리스트를 병합하여 사용**하여 Hash 충돌을 해결한 해시 테이블 기반 자료구조이다.

- Hash 충돌이 일어나면, 해당 인덱스 `node`의 다음 `node`에 연결된다.
- **Linked List 추가하기**
    1. module로 사용하기 위해 파일 확장자를 변경한다.
        
        .js 확장자는 CommonJS 스크립트를 가져오는데, 이것은 '`import from`'을 사용할 수 없다(`require`만 된다).
        
        import 구문의 사용을 위해 파일 확장자를 .mjs로 변경하고 생성자를 export 한다.
        
        `export { LinkedList };`
        
    2. 체이닝 해시 테이블 파일의 확장자도 .mjs로 변경한다. 그리고 Linked List를 import 한다.
        
        `import { LinkedList } from "./4_2_linked_list.mjs";`
        
    - `import` **안 쓸 때는 아래 방법 사용 :**
        - **linked_list.js :** `module.exports = LinkedList;`
        - **chaining_hashtable.js :** `const LinkedList = require("./4_2_linked_list");`
- **대표적인 메서드 :** `put()`, `remove()`, `get()` 외 동일.
    - **데이터 추가**
        
        `ChainingHashTable.put(key, value)`
        
    - **전체 데이터 반환, 전체 데이터 출력**
        
        `ChainingHashTable.getBuffer()`, `ChainingHashTable.print()`
        
    - **하나의 데이터 반환**
        
        `ChainingHashTable.get(key)`
        
    - **데이터 삭제**
        
        `ChainingHashTable.remove(key)`
        

### **데이터 추가**

- `ChainingHashTable.put(key, value)`

```jsx
// put(key, value) : 데이터 추가
ChainingHashTable.prototype.put = function(key, value) {
  let index = this.hashCode(key);

  console.log(`key : ${index} -> index : ${index}`);

  if(this.table[index] === undefined) { // 없다면
    this.table[index] = new LinkedList();
  }

  this.table[index].append(new Element(key, value));
  this.length++;

  return true;
}

let cht = new ChainingHashTable();

cht.put("Ana", 150);
cht.put("Donnie", 155); // 충돌

cht.put("Sue", 140);
cht.put("Jamie", 150); // 충돌

cht.put("Paul", 167);

/*
key : 13 -> index : 13
key : 13 -> index : 13
key : 5 -> index : 5
key : 5 -> index : 5
key : 32 -> index : 32
*/

console.log(cht);
/*
ChainingHashTable {
  table: [
    <5 empty items>,
    LinkedList { head: [Node], length: 2 },
    <7 empty items>,
    LinkedList { head: [Node], length: 2 },
    <18 empty items>,
    LinkedList { head: [Node], length: 1 },
    <4 empty items>
  ],
  length: 5
}
*/
```

### 전체 데이터 반환, 전체 데이터 출력

- `ChainingHashTable.getBuffer()`
- `ChainingHashTable.print()`

```jsx
// getBuffer() : 전체 데이터 반환
ChainingHashTable.prototype.getBuffer = function() {
  let array = [];

  for(let i = 0; i < this.table.length; i++) {
    if(this.table[i]) { // 있다면
      let current = this.table[i].head;
      do {
        array.push(current.data);
        current = current.next;
      } while(current);
    }
  }

  return array;
};

// print() : 전체 데이터 출력
ChainingHashTable.prototype.print = function() {
  for(let i = 0; i < this.table.length; i++) {
    if(this.table[i]) { // 있다면
      let current = this.table[i].head;
      process.stdout.write(`#${i}`);

      do {
        process.stdout.write(` -> ${current.data.key} : ${current.data.value}`);
        current = current.next;
      } while(current);

      console.log(""); // 개행
    }
  }
};

let cht = new ChainingHashTable();

cht.put("Ana", 130);
cht.put("Donnie", 140); // 충돌

cht.put("Sue", 160);
cht.put("Jamie", 150); // 충돌

cht.put("Paul", 170);

/*
key : 13 -> index : 13
key : 13 -> index : 13
key : 5 -> index : 5
key : 5 -> index : 5
key : 32 -> index : 32
*/

console.log(cht);
/*
ChainingHashTable {
  table: [
    <5 empty items>,
    LinkedList { head: [Node], length: 2 },
    <7 empty items>,
    LinkedList { head: [Node], length: 2 },
    <18 empty items>,
    LinkedList { head: [Node], length: 1 },
    <4 empty items>
  ],
  length: 5
}
*/

cht.print();
/*
#5 -> Sue : 160 -> Jamie : 150
#13 -> Ana : 130 -> Donnie : 140
#32 -> Paul : 170
*/

console.log(cht.getBuffer());
/*
[
  Element { key: 'Sue', value: 160 },
  Element { key: 'Jamie', value: 150 },
  Element { key: 'Ana', value: 130 },
  Element { key: 'Donnie', value: 140 },
  Element { key: 'Paul', value: 170 }
]
*/
```

### **하나의 데이터 반환**

- `ChainingHashTable.get(key)`
    1. 배열 요소에 값이 있는지 확인한다.
    2. Linked List 값이 있는지 확인한다.
    3. Linked List를 순회하며 key를 확인한다.

```jsx
// get(key) : 하나의 데이터 반환
ChainingHashTable.prototype.get = function(key) {
  let index = this.hashCode(key);

  if(this.table[index] !== undefined && !this.table[index].isEmpty()) { // 인덱스가 비어있지 않고, LinkedList가 비어있지 않다면
    let current = this.table[index].head;

    do {
      if(current.data.key === key) {
        return current.data.value;
      }

      current = current.next;
    } while(current);
  }

  return undefined;
}

let cht = new ChainingHashTable();

cht.put("Ana", 159);
cht.put("Donnie", 146); // 충돌

cht.put("Sue", 165);
cht.put("Jamie", 136); // 충돌

cht.put("Paul", 185);

/*
key : 13 -> index : 13
key : 13 -> index : 13
key : 5 -> index : 5
key : 5 -> index : 5
key : 32 -> index : 32
*/

console.log(cht.get("Ana")); // 159
console.log(cht.get("Donnie")); // 146
console.log(cht.get("Kim")); // undefined
```

### **데이터 삭제**

- `ChainingHashTable.remove(key)`
    
    Linked List의 remove 메서드를 사용하여 data 삭제.
    
    해당 해시 테이블 인덱스 값이 비어 있으면 Linked List를 삭제.
    

```jsx
// remove(key) : 데이터 삭제
ChainingHashTable.prototype.remove = function(key) {
  let index = this.hashCode(key);
  let element = undefined;

  if(this.table[index] !== undefined) {
    let current = this.table[index].head;

    do {
      if(current.data.key === key) {
        element = current.data;
        this.table[index].remove(current.data); // Linked List의 remove 메서드를 사용하여 data 삭제
        this.length--;

        if(this.table[index].isEmpty()) { // 해당 해시 테이블 인덱스 값이 비어 있으면
          delete this.table[index]; // Linked List를 삭제
        }
      }
      
      current = current.next;
    } while(current);
  }

  return element;
}

let cht = new ChainingHashTable();
cht.put("Ana", 155);
cht.put("Donnie", 164); // 충돌

cht.put("Sue", 135);
cht.put("Jamie", 164); // 충돌

cht.put("Paul", 176);

/*
key : 13 -> index : 13
key : 13 -> index : 13
key : 5 -> index : 5
key : 5 -> index : 5
key : 32 -> index : 32
*/

cht.print();
/*
#5 -> Sue : 135 -> Jamie : 164
#13 -> Ana : 155 -> Donnie : 164
#32 -> Paul : 176
*/

console.log(cht.remove("Sue")); // Element { key: 'Sue', value: 135 }
cht.print();
/*
#5 -> Jamie : 164
#13 -> Ana : 155 -> Donnie : 164
#32 -> Paul : 176
*/

console.log(cht.remove("Jamie")); // Element { key: 'Jamie', value: 164 }
cht.print();
/*
#13 -> Ana : 155 -> Donnie : 164
#32 -> Paul : 176
*/

console.log(cht);
/*
ChainingHashTable {
  table: [
    <13 empty items>,
    LinkedList { head: [Node], length: 2 },
    <18 empty items>,
    LinkedList { head: [Node], length: 1 },
    <4 empty items>
  ],
  length: 3
}
*/
```
