# Scope(범위)

> **변수, 상수에 접근할 수 있는 범위**이다.

- 스코프가 다르다면, 동일한 변수명을 사용할 수 있다.
- 전역 스코프, 지역 스코프로 나뉜다.
  - **전역 스코프(Gobal Scope) :** 전역에 선언되어 어디서든 접근 가능.
  - **지역 스코프(Local Scope) :** 특정 지역에 선언되어, 해당 지역 내에서만 접근 가능. 함수, for문, if문 등의 내부에 선언된다.
- 스코프를 벗어나면 **GC**(Garbage Collector)에 의해 자동 소멸된다.

```jsx
// gobal scope
let x = 1;
let y = 2;
console.log("gobal x : " + x); // 1
console.log("gobal y : " + y); // 2

{
  // local scope
  let x = 3;
  let y = 4;
  console.log("local x : " + x); // 3
  console.log("local y : " + y); // 4
}

function scope() {
  // local scope
  let c = 5;
  let d = 6;

  for(let i = 0; i < 3; i++) {
    // local scope
    console.log("local i : " + i); // 0, 1, 2
  }

  console.log("local c : " + c); // 5
  console.log("local d : " + d); // 6
  // console.log("local i : " + i); // Error
}

scope();
console.log("gobal x : " + x); // 1
console.log("gobal y : " + y); // 2
// console.log("local c : " + c); // Error
// console.log("local d : " + d); // Error
```
<br>
