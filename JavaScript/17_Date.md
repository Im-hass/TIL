# 25. Date

---

> **날짜와 시간을 위한 속성값과 메서드를 제공**하는 객체이다.
> 
- **표준 내장 객체**이다.
- **1970년 1월 1일 UTC(협정 세계시) 자정**과의 **시간 차이를 밀리초 단위로 나타내는 정수값**으로 표현된다.

### 생성자

- `new Date()` **: Date 객체 생성**
    - **출력 형식 :** `YYYY-MM-DDTHH:mm:ss.sssZ`
- `Date()` **: 현재 시간 기준 Date 문자열 생성**
    - **출력 형식**
        - `요일 월 DD YYYY HH:mm:ss GMT+0900 (GMT+09:00)`
        - `요일`, `월` 영문 3자로 표현
        - 대한민국 표준시
- **파라미터에 따라 Date 객체 생성**
    - `new Date(milliseconds)`
    - `new Date(datestring)`
    - `new Date(year[, month, date, hours, minutes, seconds, ms])`
        - `month` 값의 범위는 **1월(0) ~ 12월(11)**이다.
        - `입력한 인자 - 9시간` 기준으로 출력 된다.
        - `Date.UTC(year[, month, date, hours, minutes, seconds, ms])` **메서드**를 사용하여 인자 값을 받으면 **고정값으로 출력된다.**

```jsx
// Date 객체
let date_now = new Date();
console.log(date_now);// 2021-09-26T18:18:34.418Z
console.log(typeof date_now);// object

console.log("==========");

// Date 문자열 (대한민국 표준시)
let date_now_str = Date();
console.log(date_now_str);// Mon Sep 27 2021 03:18:34 GMT+0900 (GMT+09:00)
console.log(typeof date_now_str);// string

console.log("==========");

// Data(milliseconds)
let date_ms = new Date(0);
let date_ms_next_day = new Date(24 * 3600 * 1000);
console.log(date_ms);// 1970-01-01T00:00:00.000Z
console.log(date_ms_next_day);// 1970-01-02T00:00:00.000Z

console.log("==========");

// Date(datestring)
let date_str = new Date("2020-01-01");
console.log(date_str); // 2020-01-01T00:00:00.000Z

console.log("==========");

// new Date(year, month, date, hours, minutes, seconds, ms)
// -9시간 기준으로 출력된다.
let date_params = new Date(2013);
console.log("obj -> str date : " + date_params);
// obj -> str date : Thu Jan 01 1970 09:00:02 GMT+0900 (GMT+09:00)

let date_params1 = new Date(2013);
console.log(date_params1); // 1970-01-01T00:00:02.013Z

date_params1 = new Date(2021, 3);
console.log(date_params1); // 2021-03-31T15:00:00.000Z

date_params1 = new Date(2021, 3, 2);
console.log(date_params1); // 2021-04-01T15:00:00.000Z

date_params1 = new Date(2021, 3, 2, 11);
console.log(date_params1); // 2021-04-02T02:00:00.000Z

date_params1 = new Date(2021, 3, 2, 11, 11);
console.log(date_params1); // 2021-04-02T02:11:00.000Z

date_params1 = new Date(2021, 3, 2, 11, 11, 11);
console.log(date_params1); // 2021-04-02T02:11:11.000Z

date_params1 = new Date(2021, 3, 2, 11, 11, 11, 11);
console.log(date_params1); // 2021-04-02T02:11:11.011Z

console.log("==========");

let date_params2 = new Date(Date.UTC(2013));
console.log(date_params2); // 2021-01-01T06:12:18.024Z

date_params2 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params2); // 2021-01-01T00:00:00.000Z

date_params2 = new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24));
console.log(date_params2); // 2021-01-01T06:12:18.024Z
```

### 날짜 정보 얻기 : 년/월/일/요일

- **년 :** `Date.getFullYear()`
- **월 :** `Date.getMonth()`, **(0~11)**
- **일 :** `Date.getDate()`
- **요일 :** `Date.getDay()`, **(0(sun) ~ 6(sat))**

```jsx
let date = new Date();
console.log(date); // 2021-09-26T18:52:20.561Z

// year, month(0~11), day, week(0(sun) ~ 6(sat))
console.log(date.getFullYear()); // 2021
console.log(date.getMonth()); // 8
console.log(date.getDate()); // 27
console.log(date.getDay()); // 1
```

### 날짜 정보 얻기 : 시/분/초/시간차

- **시 :** `Date.getHours()`, `Date.getUTCHours()`
- **분 :** `Date.getMinutes()`, `Date.getUTCMinutes()`
- **초 :** `Date.getSeconds()`, `Date.getUTCSeconds()`
- **시간차**
    - `Date.getTimezoneOffset()` : `현지 시간 - 표준 시간`을 **min 단위**로 계산해준다.
    - `Date.getTime()` : `주어진 일 시 - 1970-01-01`을 **ms 단위**로 계산해준다.

```jsx
let date = new Date(Date.UTC(2021, 10, 11, 11, 11, 11, 11));
console.log(date); // 2021-11-11T11:11:11.011Z

// hours
console.log(date.getHours()); // 20
console.log(date.getUTCHours()); // 11

// minutes
console.log(date.getMinutes()); // 11
console.log(date.getUTCMinutes()); // 11

// seconds
console.log(date.getSeconds()); // 11
console.log(date.getUTCSeconds()); // 11

// getTime: (now - date(0)) milliseconds
console.log(date.getTime()); // 1636629071011

// getTimezoneOffset: (UTC+0 - currentZone) minutes
console.log(date.getTimezoneOffset()); // -540
```

### 날짜 정보 설정 : 년/월/일

- **년 :** `Date.setFullYear()`
- **월 :** `Date.setMonth()`
- **일 :** `Date.setDate()`

```jsx
let date = new Date();
console.log(date); // 2021-09-26T19:19:46.605Z

// year
let ms_year = date.setFullYear(2020, 3, 15);
console.log(date); // 2020-04-14T19:19:46.605Z
console.log(new Date(ms_year)); // 2020-04-14T19:19:46.605Z

// month
date.setMonth(10, 20);
console.log(date); // 2020-11-19T19:19:46.605Z

// date
date.setDate(1);
console.log(date); // 2020-03-31T19:19:46.605Z

date.setDate(0); // setDate(0) => 이전 달의 마지막 날
console.log(date); // 2020-03-30T19:19:46.605Z
```

### 날짜 정보 설정 : 시/분/초

- **시 :** `Date.setHours()`
- **분 :** `Date.setMinutes()`
- **초 :** `Date.setSeconds()`

```jsx
let date = new Date();
console.log(date); // 2020-03-30T19:23:02.706Z

// hours
date.setHours(date.getHours() + 2);
console.log(date); // 2020-03-30T21:23:02.706Z

// minutes
date.setMinutes(date.getMinutes() + 10);
console.log(date); // 2020-03-30T21:33:02.706Z

// seconds
date.setSeconds(date.getSeconds() + 10);
console.log(date); // 2020-03-30T21:33:12.706Z
```

### 날짜 정보 설정 : 형식 지정

- `Date.parse(YYYY-MM-DDTHH:mm:ss.sssZ)`
    - **문자열 기반 날짜 정보 설정**
    - **ms가 반환** 된다
    - `YYYY-MM-DD` **: 년-월-일**
    - `T` **: 날짜T시간 구분 기호**
    - `HH:mm:ss.sss` **: 시:분:초:밀리초**
    - `Z`**(option) : 미설정 시 현재 로컬 기준 UTC, 설정 시 UTC+0 기준**으로 설정

```jsx
let ms_parse = Date.parse("2020-03-31T00:00:00.000");

console.log(ms_parse); // 1585580400000

console.log(new Date(ms_parse)); // 2020-03-15T00:00:00.000Z

console.log(new Date(Date.parse("2020-03-31T00:00:00.000Z")));
// 2020-03-31T00:00:00.000Z
```

### 응용 : 성능 측정을 위한 시간 측정

- 벤치마크 함수를 만들고, **측정 대상 함수 전, 후 시간을 비교하여 알고리즘의 성능을 측정**한다.

```jsx
// 비교할 함수1
function dateSub(old_date, new_date) {
  return new_date - old_date;
}

// 비교할 함수2
function getTime(old_date, new_date) {
  return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func) {
  let date_1 = new Date("2020-01-01");
  let date_2 = new Date();
  let start = Date.now();
  for (let i = 0; i < 100000; i++) {
    callback_func(date_1, date_2);
  }
  return Date.now() - start;
}

console.log("dateSub: " + benchmark(dateSub) + "ms"); // dateSub: 27ms
console.log("getTime: " + benchmark(getTime) + "ms"); // getTime: 4ms
```
<br>
