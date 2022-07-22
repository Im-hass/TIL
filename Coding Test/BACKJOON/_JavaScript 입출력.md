# 백준 Node.js(JavaScript) 입출력 방법

> Node.js의 모듈을 사용하여 입출력 받는다.

- 2가지 방법이 있다.
    - `readline` 모듈
    - `fs` 모듈
- `readline` 모듈로 시간 초과가 나올 경우, `fs` 모듈을 사용한다.
<br>

## 1. `readline` 모듈

> Readable Stream에서 한 번에 한 줄 씩 데이터를 읽기 위한 인터페이스를 제공하는 모듈이다.

### 기본 구조

```jsx
const readline = require('readline'); // 모듈 불러오기

const rl = readline.createInterface({ // 인터페이스 생성
  input: process.stdin,
  output: process.stdout
});

rl.on('이벤트명', callback(매개변수){
  // 입력을 처리하는 곳
}).on('close', callback() {
  // 입력 종료 후를 처리하는 곳
  process.exit();
});
```

### 한 줄 입력 받기

- "`line`" 이벤트가 발생할 때마다 input 스트림을 받는다. 즉, "`rl`" 객체는 event-driven으로 동작한다.
- 입력의 마지막은 `\n`, `\r` 또는 `\r\n`으로 구분한다.
- 매개변수 `line`에 할당되는 것이 입력 값이고, 타입은 문자열이므로 따로 처리가 필요하지 않다.

```jsx
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line){
  console.log("line : ", line); // 입력 받은 한 줄 출력
  rl.close(); // 이 라인이 없을 경우 무한으로 입력을 받으므로 주의해야 한다.
}).on('close', function() {
  process.exit();
});
```

### 한 줄, 공백 구분 여러 개 입력 받기

```jsx
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line){
  console.log("line : ", line.split(' ')); // 한 줄을 공백으로 구분하여 배열에 담아 출력
  rl.close(); // 이 라인이 없을 경우 무한으로 입력을 받으므로 주의
}).on('close', function() {
  process.exit();
});
```

### 여러 줄 입력 받기

```jsx
let input = [];

rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    console.log(input);
    process.exit();
});
```

**※ 예제 코드에서 `rl.close();`가 필요한 이유 : 콘솔에서는 interactive shell이 계속 열려있기 때문에 자동으로 close가 호출되지 않는다.** 콘솔에서 실행하면 키보드로부터 입력을 받기 때문에 계속해서 입력 이벤트를 대기하게 되지만, 파일을 받게 되는 경우에는 파일의 데이터가 끝이나면 자동으로 EOF(end of file)에 걸려 close되어 코드가 끝나는 것이다.

**※ 콘솔에서 close하고 싶은 경우, `ctrl`+`D`를 입력한다.**

<br>

## 2. `fs` 모듈

> 파일 처리와 관련된 모듈이다.

- 사이트마다 경로가 다르기 때문에 보편적으로 사용할 수 없다.
- 백준을 풀기 위해서라면 `'/dev/stdin'` 경로를 사용하면 된다(아래 예제는 백준을 풀기 위한 입출력 예제이다).
- `fs.readFileSync()`는 `object` 타입을 반환하기 때문에 문자열로 변환할 필요가 있다.

### 한 줄이 입력된 파일 받기

```jsx
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim(); // 문자열로 변환, 앞뒤 공백 제거

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

### 공백으로 구분된 한 줄이 입력된 파일 받기

```jsx
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); // 문자열 변환, 앞뒤 공백 제거, 사이 공백으로 구분하여 입력 받기

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

### 여러 줄이 입력된 파일 받기

```jsx
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 엔터로 구분하여 입력 받기

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}

for (let i = 0; i < numbers.length; i++){
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);

  console.log(num1 + num2);
}
```
### 백준이 아닌 곳에서 예시 파일을 입력 받을 경우

- `process.platform`을 확인하여 `'linux'`일 경우, 백준이므로 `/dev/stdin` 경로를 아닐 경우 예제가 있는 상대경로를 입력해준다.

```jsx
const filepath = process.platform === 'linux' ? '/dev/stdin' : '예제 파일이 있는 상대경로';
const [N, ...arr] = require('fs').readFileSync(filepath).toString().trim().split('\n'); // 첫 번째줄에 1개, 이후 공백으로 구분된 여러 줄 입력 예시
```


<br>

## 3. 참고

[readline 참고1](https://nodejs.org/api/readline.html)

[readline 참고2](https://wooooooak.github.io/node.js/2018/09/26/Node.js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0/)

[fs 참고](https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80Node.js-Node.js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0)
