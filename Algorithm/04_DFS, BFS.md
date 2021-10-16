# 10. DFS, BFS

## 10-1. 트리 vs 그래프
|속성|트리|그래프|
|-|-|-|
|방향성|방향|방향 혹은 무방향|
|순환성|순환|순환 혹은 비순환|
|루트 노드|있음|없음|
|노드간 관계|부모-자식|없음|
|모델의 종류|계층 모델|네트워크 모델|
|구현 방법||인접 행렬, 인접 리스트|


## 10-2. DFS(Depth First Search)

> 트리나 그래프에서 **깊이를 우선하여 탐색**하는 기법이다.

- 인접한 후보 노드만 기억되므로 **메모리 소모가 적다.**
- 노드가 **깊은 곳**에 있을 경우 **빠르게 정답을 산출**한다.
- 선택한 경로가 답이 아닐 경우 **불필요한 탐색**을 할 수 있다.
- **최단 경로**를 구할 시 찾은 해가 **정답이 아닐 수 있다.**
- **대표적인 메서드**
    - **그래프 메서드를 일부 재사용 :** `Graph()`, `addVertex()`, `addEdge()`, `print()`
    - **생성 :** `dfs(startVertex)`, `_dfsRecursiveVisit(vertex)`
    - **재귀를 이용한 탐색 :** `Graph._dfsRecursiveVisit()`
    - **스택을 이용한 탐색 :** `Graph._dfsLoopVisit()`

### 그래프 일부 재사용

- `Graph()`
- `addVertex()`
- `addEdge()`
- `print()`

```jsx
function Graph() {
  this.edge = {};
  this.visited = {};
}

Graph.prototype.addVertex = function(v) {
  this.edge[v] = [];
  this.visited[v] = false;
}

Graph.prototype.addEdge = function(v1, v2) {
  this.edge[v1].push(v2);
}

Graph.prototype.print = function() {
  for(let v in this.edge) {
    let neighbors = this.edge[v];

    if (neighbors.length == 0) continue;

    process.stdout.write(`${v} -> `);

    for(let j = 0; j < neighbors.length; j++) {
      process.stdout.write(`${neighbors[j]} `);
    }

    console.log();
  }
};
```

### 탐색

- `dfs(startVertex)` **: 생성**
- `Graph._dfsRecursiveVisit()` **: 재귀를 이용한 탐색**
- `Graph._dfsLoopVisit()` **: 스택을 이용한 탐색**

```jsx
Graph.prototype.dfs = function (startVertex) {
  // this._dfsRecursiveVisit(startVertex); // 재귀
  this.dfsLoopVisit(startVertex); // 스택
};

Graph.prototype._dfsRecursiveVisit = function (vertex) {
  if(this.visited[vertex]) {
    return;
  }

  this.visited[vertex] = true;
  console.log(`visit "${vertex}"`);

  let neighbors = this.edge[vertex];

  for(let i = 0; i < neighbors.length; i++) {
    this._dfsRecursiveVisit(neighbors[i]);
  }
};

Graph.prototype.dfsLoopVisit = function(vertex) {
  let stack = new Stack();
  stack.push(vertex);

  while(!stack.isEmpty()) {
    let vertex = stack.pop();

    if(this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];

    for(let i = neighbors.length - 1; i >= 0; i--) {
      stack.push(neighbors[i]);
    }
  }
}

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for(let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

graph.print();
/*
A -> B C D 
B -> E F 
C -> G 
D -> G H 
E -> I 
*/
/*
A -> B C D 
B -> E F 
C -> G 
D -> G H 
E -> I 
*/
console.log();

graph.dfs("A");
/*
visit "A"
visit "B"
visit "E"
visit "I"
visit "F"
visit "C"
visit "G"
visit "D"
visit "H"
*/
/*
visit "A"
visit "B"
visit "E"
visit "I"
visit "F"
visit "C"
visit "G"
visit "D"
visit "H"
*/
```
<br>

## 10-3. BFS(Breadth First Search)

> 트리나 그래프 등에서 **인접한 노드를 우선 방문**하는 탐색 기법이다.
> 
- 트리의 LevelOrder과 유사하게 작동한다.
- **최단 경로 탐색**에서 구한 해가 **정답**임을 보장한다.
- **경로가 매우 길어질 경우**, 탐색 범위가 증가하며 DFS보다 **많은 기억 공간**이 필요해진다.
- **대표적인 메서드**
    - **Queue 메서드 재사용 :** `Queue.dequeue()`, `Queue.isEmpty()`, `Queue.enqueue()`
    - **그래프 메서드를 일부 재사용 :** `Graph()`, `addVertex()`, `addEdge()`, `print()`
    - **생성 :** `Graph.bfs(startVertex)`, `Graph.bfsLoopVisit(vertex)`
    - **최단 경로 탐색 :** `Graph._bfsShortestPath(vertex)`, `Graph._from_to_path(pre_visit, from, to)`, `Graph.shortestPath(startVertex)`

### 그래프 재사용

```jsx
const Queue = require("../05_큐/1_구현");

function Graph() {
  this.edge = {};
  this.visited = {};
}

Graph.prototype.addVertex = function(v) {
  this.edge[v] = [];
  this.visited[v] = false;
}

Graph.prototype.addEdge = function(v1, v2) {
  this.edge[v1].push(v2);
}

Graph.prototype.print = function() {
  for(let v in this.edge) {
    let neighbors = this.edge[v];

    if (neighbors.length == 0) continue;

    process.stdout.write(`${v} -> `);

    for(let j = 0; j < neighbors.length; j++) {
      process.stdout.write(`${neighbors[j]} `);
    }

    console.log();
  }
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for(let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

graph.print();
console.log();
/*
A -> B C D 
B -> E F 
C -> G 
D -> G H 
E -> I 
*/
```

### 생성

- `Graph.bfs(startVertex)`
- `Graph.bfsLoopVisit(vertex)`

```jsx
// bfs(startVertex) : BFS 탐색
Graph.prototype.bfs = function(startVerext) {
  this._bfsLoopVisit(startVerext);
};

// _bfsLoopVisit(vertex) : 큐를 이용한 BFS 탐색
Graph.prototype._bfsLoopVisit = function(vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  while(!queue.isEmpty()) {
    let vertex = queue.dequeue();

    if(this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visit : ${vertex}`);

    let neighbors = this.edge[vertex];
    
    for(let i = 0; i < neighbors.length; i++) {
      queue.enqueue(neighbors[i]);
    }
  }
};

graph.bfs("A");
/*
visit : A
visit : B
visit : C
visit : D
visit : E
visit : F
visit : G
visit : H
visit : I
*/
```

### 최단 경로 탐색

- `Graph._bfsShortestPath(vertex)` : 다른 정점 간 최단 경로 비용 산출
- `Graph._from_to_path(pre_visit, from, to)` : from 정점에서 to 정점으로 최단 경로 산출
- `Graph.shortestPath(startVertex)` : 다른 정점 간 최단 경로 탐색

```jsx
// _bfsShortestPath(vertex) : 다른 정점 간 최단 경로 비용 산출
Graph.prototype._bfsShortestPath = function(vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  let distance = {};
  let pre_visit = {};

  for(let vertex in this.edge) {
    distance[vertex] = 0;
    pre_visit[vertex] = null;
  }

  while(!queue.isEmpty()) {
    let vertex = queue.dequeue();

    this.visited[vertex] = true;
    console.log(`visit ${vertex}`);

    let neighbors = this.edge[vertex];

    for(let i = 0; i < neighbors.length; i++)  {
      if(!this.visited[neighbors[i]]) {
        distance[neighbors[i]] = distance[vertex] + 1;
        pre_visit[neighbors[i]] = vertex;
        queue.enqueue(neighbors[i]);
      }
    }
  }

  return { distance, pre_visit };
}

graph.print();
console.log();
/*
A -> B C D 
B -> E F 
C -> G 
D -> G H 
E -> I
*/

console.log(graph._bfsShortestPath("A"));
/*
visit A
visit B
visit C
visit D
visit E
visit F
visit G
visit G
visit H
visit I
{
  distance: { A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 },
  pre_visit: {
    A: null,
    B: 'A',
    C: 'A',
    D: 'A',
    E: 'B',
    F: 'B',
    G: 'D',
    H: 'D',
    I: 'E'
  }
}
*/
```

```jsx
const Stack = require("../04_스택/1_구현");

// _from_to_path(pre_visit, from, to) : from 정점에서 to 정점으로 최단 경로 산출
Graph.prototype._from_to_path = function(pre_visit, from, to) {
  let stack = new Stack();

  // 스택을 통해 역순으로 넣어줌
	// First In Last Out
  // I, E, B, A -> OUT
  for(let v = to; v !== from; v = pre_visit[v]) {
    stack.push(v);
  }

  stack.push(from);

  while(!stack.isEmpty()) {
    let v = stack.pop();
    process.stdout.write(`${v} -> `);
  }

  console.log("end");
};

// shortestPath(startVertex) : 다른 정점 간 최단 경로 탐색
Graph.prototype.shortestPath = function(startVertex) {
  let result = this._bfsShortestPath(startVertex);
  /*
  visit A
  visit B
  visit C
  visit D
  visit E
  visit F
  visit G
  visit G
  visit H
  visit I
  */

  console.log(result.distance); // { A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 }
  
  console.log(result.pre_visit);
  /*
  {
    A: null,
    B: 'A',
    C: 'A',
    D: 'A',
    E: 'B',
    F: 'B',
    G: 'D',
    H: 'D',
    I: 'E'
  }
  */

  for(let vertex in this.edge) {
    if (vertex === startVertex) continue;
    this._from_to_path(result.pre_visit, startVertex, vertex);
  }
};

graph.shortestPath("A");
/*
A -> B -> end
A -> C -> end
A -> D -> end
A -> B -> E -> end
A -> B -> F -> end
A -> D -> G -> end
A -> D -> H -> end
A -> B -> E -> I -> end
*/
```
<br>

## 10-4. DFS vs BFS
||DFS|BFS|
|-|-|-|
|동작 원리|스택|큐|
|구현 방법|재귀 함수|큐 자료구조|

<br>

