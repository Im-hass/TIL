# String : 원시 자료형

> **길이 상관없이 문자열 형태로 저장**되는 자료형이다. **페이지 인코딩 방식과 상관없이 항상 UTF-16 형식**을 따른다.

- JavaScript에서는 **문자 자료형(**`char`**)이 없다.**

### 정의

- **문자열 :** `" ... "`, `' ... '`, `String(...)`
- **문자열, 변수 혼합 :** `` ... ${변수} ``

```jsx
let str_1 = "hello_1";
let str_2 = 'hello_2';
let str_3 = String("hello_3");
let str_4 = `hello_4 ${str_1}`;

console.log(str_1); // hello_1
console.log(str_2); // hello_2
console.log(str_3); // hello_3
console.log(str_4); // hello_4 hello_1
```

### 표기

```jsx
console.log("line\nfeed"); // line <newline> feed
console.log("carriage\rreturn"); // carriage <newline> return
console.log("backslash \\"); // backslash \
console.log("tab\ttab"); // tab     tab
console.log("heart: \u{1F60D}"); // heart: 😍
```

### 길이

- **문자열 길이 확인 :** `String.lenght`

```jsx
let str = `
  hello
  world
  !!!
`;
let newline_string = "hello\nworld\n!!!";

console.log(str.length); // 15
console.log(newline_string.length); // 15
```

### 접근

- **문자열 내 개별 문자에 접근 :** 0부터 시작한다.
    - **문자 반환 :** `String.charAt(index)`, `String[index]`
    - **아스키 코드 반환 :** `String.charCodeAt(index)`

```jsx
let str = "ABC";
console.log(str.charAt(0)); // A
console.log(str.charAt(1)); // B
console.log(str[1]); // B
console.log(str.charCodeAt(1)); // 66
```

### 검색

- **문자열 위치 확인(인덱스 반환) :** `String.indexOf(substr, pos)`, `String.lastIndexOf(substr, pos)`
- **문자열 여부 확인(boolean 반환) :** `String.includes(substr, pos)`, `String.startsWith(substr, pos)`, `String.endsWith(substr, pos)`
- **첫 번째 매개 변수(**`substr`**) :** 찾을 String(문자, 문자열), Number
- **두 번째 매개 변수(**`pos`**) :** 몇 번째부터 찾을지, 0부터 시작.
- **없을 경우** `-1`**을 반환**한다.

```jsx
let text = "ABC DA67 9-1"; // 0~10

console.log(text.indexOf("A")); // 0
console.log(text.indexOf(" ")); // 3
console.log(text.indexOf("BC")); // 1
console.log(text.indexOf(6)); // 6
console.log(text.indexOf("F")); // -1
console.log(text.indexOf("-1")); // 10

console.log("=========");

console.log(text.indexOf("A", 2)); // 5
console.log(text.indexOf("B", 5)); // -1

console.log("=========");

console.log(text.lastIndexOf("A")); // 5
console.log(text.lastIndexOf(" ")); // 8

console.log("=========");

console.log(text.includes("AC ")); // false
console.log(text.includes("BC ")); // true

console.log("=========");

console.log(text.startsWith("C D")); // false, 앞에서부터 A로 시작해야함.
console.log(text.endsWith(" 9-1")); // true, 뒤에서부터 1로 시작해야함.
```

### 변환

- **대소문자 변환 :** `String.toUpperCase()`, `String.toLowerCase()`

```jsx
let str = "HeLlO!!";
console.log(str.toUpperCase()); // HELLO!!
console.log(str.toLowerCase()); // hello!!
```

### 치환

- 어떤 패턴에 일치하는 일부 또는 모든 부분이 **교체된 새로운 문자열을 반환**한다. 원본 문자열은 변경되지 않는다.
- **문자열 치환 :** `String.replace(regexp|substr, newSubstr|function)`
- **정규 표현식을 활용한 문자열 치환 :** `/치환문자열/gi`
    - `g` : 전체
    - `i` : 대소문자 구분 X
- `String` **: 원본 문자열**
- **첫 번째 매개 변수(**`regexp|substr`**) : 바꾸려는(대체될) 값.** 정규표현식 또는 문자, 문자열.
- **두 번째 매개 변수(**`newSubstr|function`**) : 바뀌는(대체할) 값.** 문자, 문자열 또는 함수

```jsx
let text = "helLo, world!!";
let changed_text = text.replace("world", "earth");

console.log(text); // helLo, world!!
console.log(changed_text); // helLo, earth!!

console.log(text.replace("!", "?")); // helLo, world?!
console.log(text.replace("l", "i")); // heiLo, world!!
console.log(text.replace(/l/g, "i")); // heiLo, worid!!
console.log(text.replace(/l/gi, "i")); // heiio, worid!!
```

### 추출

- **위치 기반 추출(시작, 끝 위치 지정) :** `String.slice(start, end)`, `String.substring(start, end)`
    - 결과 값은 동일하나 **start 보다 end 값이 클 때,** `slice()`**는 동작하지 않고,** `substring()`**은 내부적으로 end와 start를 바꿔서 계산**해준다.
- **길이 기반 추출(시작 위치, 길이 지정) :** `String.substr(start, lenght)`

```jsx
let text = "hello, world!!!";

console.log(text.slice(0, 5)); // hello
console.log(text.slice(4, 5)); // o
console.log(text.slice(4)); // o, world!!!
console.log(text.slice(-4)); // d!!!

console.log("======");

console.log(text.slice(2, 6)); // llo,
console.log(text.slice(6, 2)); //
console.log(text.substring(2, 6)); // llo,
console.log(text.substring(6, 2)); // llo,

console.log("======");

console.log(text.substr(2, 6)); // llo, w
console.log(text.substr(-5, 3)); // ld!
```

### 분할

- **배열로 분할 :** `String.split(separator, limit)`
- **첫 번째 매개 변수(**`separator`**) :** **분할의 기준.** `""`으로 매개 변수를 주지 않으면 자동으로 한 문자씩 자른다.
- **두 번째 매개 변수(**`limit`**) :** **분할할 개수.** 생략 가능.

```jsx
let fruits = "apple banana melon";
result = fruits.split(" ");
console.log(result); // [ 'apple', 'banana', 'melon' ]
console.log(result[0]); // apple
console.log(result[1]); // banana
console.log(result[2]); // melon

console.log("======");

let text = "hello";
result = text.split("");
console.log(result); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(result[0]); // h

console.log("======");

result = text.split("", 3);
console.log(result); // [ 'h', 'e', 'l' ]
```
