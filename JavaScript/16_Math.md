# Math

> **수학적인 연산을 위한 속성값과 메서드를 제공**하는 객체이다.

- **표준 내장 객체**이다.
- 생성자 함수가 아니며, **모든 속성과 메서드가 정적으로 정의**되어 있으므로 Math.function()으로 언제든 호출 가능하다.

### 오일러 상수/PI(π, 파이)

- **속성값 오일러 상수 :** `Math.E`
- **속성값 파이(π) :** `Math.PI`

```jsx
// 오일러 상수
console.log(Math.E); // 2.718281828459045

// 파이(π)
console.log(Math.PI); // 3.141592653589793
```

### 최대값/최소값

- **최대값 :** `Math.max(...x)`
- **최소값 :** `Math.min(...x)`
- 인수로 배열을 받으려면 `Math.max|min.apply()` 함수를 쓰거나 스프레드 문법을 사용한다.

```jsx
// 최대값
console.log(Math.max(1, -1)); // 1
console.log(Math.max(1, -1, 5, 23, 17, -4)); // 23

// 최소값
console.log(Math.min(1, -1)); // -1
console.log(Math.min(1, -1, 5, 23, 17, -4)); // -4

let nums = [1, -1, 5, 23, 17, -4];

// 배열 인수 : apply()
console.log(`Max: ${Math.max.apply(null, nums)}`); // MAX: 23
console.log(`Min: ${Math.min.apply(null, nums)}`); // MIN: -4

// 배열 인수 : spread
console.log(`Max: ${Math.max(...nums)}`); // MAX: 23
console.log(`Min: ${Math.min(...nums)}`); // MIN: -4
```

### 절대값/랜덤값

- **절대값 :** `Math.abs(x)`
- **랜덤값 :** `Math.random()`
    - 랜덤값이 0~1 사이의 소수로 나오기 때문에, 정수로 바꾸기 위해서는 원하는 자릿수만큼 10을 곱해주어야 한다.

```jsx
// 절대값
console.log(Math.abs(1)); // 1
console.log(Math.abs(-1)); // 1
console.log(Math.abs(-Infinity)); // Infinity

// 랜덤값 : 소수
for (let i = 0; i < 3; i++) {
  console.log(Math.random());
}
/*
0.15322465315219258
0.2735086949071168
0.6906884694141429
*/

// 랜덤값 : 정수
for (let i = 0; i < 3; i++) {
  console.log(Number.parseInt(Math.random() * 10));
}
/*
6
0
7
*/
```

### 제곱/제곱근

- **제곱 :** `Math.pow(x, y)`
- **제곱근 :** `Math.sqrt(x)`

```jsx
// 제곱
console.log(2 ** 3); // 8
console.log(Math.pow(2, 3)); // 8

// 제곱근
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(2)); // 1.4142135623730951
```

### 소수점 처리

- **소수점 이하 올림 :** `Math.ceil(x)`
- **소수점 이하 내림 :** `Math.floor(x)`
- **소수점 이하 반올림 :** `Math.round(x)`

```jsx
// 소수점 이하 올림
console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(-4.7)); // -4
console.log(Math.ceil(-2.5)); // -2
console.log(Math.ceil(2.5)); // 3
console.log(Math.ceil(2.3)); // 3
console.log(Math.ceil(1.0)); // 1

console.log("==========");

// 소수점 이하 내림
console.log(Math.floor(3.7)); // 3
console.log(Math.floor(-2.3)); // -3
console.log(Math.floor(-2.7)); // -3

console.log("==========");

// 소수점 이하 반올림
console.log(Math.round(3.5)); // 4
console.log(Math.round(-2.3)); // -2
console.log(Math.round(-2.7)); // -3
```
<br>
