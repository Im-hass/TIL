# Number : 원시 자료형

> **64비트 형식의 IEEE-754 표준 기반** 형태로 저장되는 **숫자 자료형**이다.

- **10진수 외에도 2진수, 8진수, 16진수** 등을 사용할 수 있다.
- **지수 또는 진법으로 표기**할 수 있다.

### 대표 상수 값

- `MAX_VALUE`, `MIN_VALUE` : **지수**로 표기되는 **양수 최대/최소 값**
- `MAX_SAFE_INTEGER`, `MIN_SAFE_INTEGER` : **안전**하게 표기되는 **최대/최소 값**
- `POSITIVE_INFINITY`, `NEGATIVE_INFINITY` : **무한대 양수/음수** 값
- `NaN` : 부동 소수점 산술에서 **정의되지 않거나 표현할 수 없는 값**으로 해석되는 숫자 데이터 유형

```jsx
// 지수로 표기되는 양수 최대/최소 값
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

// 안전하게 표기되는 최대/최소 값
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// 무한대 양수/음수 값
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

// 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값으로 해석되는 숫자 데이터 유형
console.log(Number.NaN); // NaN
```

### 대표 메서드

- `Number.toString()` **: 문자열로** 형변환
- `Number.toFixed()`, `Number.toPrecision()` **: 자리 수 제한**
- `Number.isNaN()`, `Number.isFinite()` **: 타입 확인**

```jsx
// 형변환(Type casting)
// 1. Number -> String
let num = 123;
// 1-1. Number.toString();
num.toString();
// 1-2. String(Number);
String(num);
// 1-3. Number + "";
(num + "");

// 2. Number -> 정수형 Number : Number.parseInt()
console.log(Number.parseInt("125px")); // 125
console.log(Number.parseInt("1.25em")); // 1
console.log(Number.parseInt("t123")); // NaN
console.log(Number.parseInt("0f", 16)); // 15

// 3. Number -> 실수형 Number : Number.parseFloat()
console.log(Number.parseFloat("1.25em")); // 1.25

// 자리 수 제한
let num2 = 1.543999999999997;
// 소수의 자리 수 길이 제한 : Number.toFixed(pos);
console.log(num2.toFixed(3)); // 1.544
// 정수 + 소수 자리 수 길이 제한 : Number.toPrecision(pos);
console.log(num2.toPrecision(3)); // 1.54

// 자료형 확인
// NaN인지 확인 : Number.isNaN(Number)
console.log(!Number.isNaN(0.123)); // true
console.log(!Number.isNaN(123 / "hello")); // false
// 정상적인 유한수인지 확인 : Number.isFinite(Number)
console.log(Number.isFinite(-123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("hello")); // false
```

### 지수 표기법(Exponential notation)

> **아주 큰 숫자**나 **아주 작은 숫자**를 표기하기 위한 표기법. **e로 0의 개수를 대체**하여 표기한다.

```jsx
let billion1 = 1000000000; // 10억
let billion2 = 1e9; // 1 + 0 9개, 10억
let us = 1e-6; // micro sec, 왼쪽으로 6번 소수점 이동

console.log(billion1); // 1000000000
console.log(billion2); // 1000000000
console.log(us); // 0.000001
```

### 진법 표기

> **2진수, 8진수, 16진수**를 표기할 수 있다. 출력 시 10진수로 변환되어 출력 된다.

- **2진수 :** `0b...`
- **8진수 :** `0o...`
- **16진수 :** `0x...`

```jsx
/* N 진법 표기 */
console.log(0b0101); // 5(10), 2진법
console.log(0o12); // 10(10), 8진법
console.log(0xf5); // 245(10), 16진법
```
<br>
