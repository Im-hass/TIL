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

