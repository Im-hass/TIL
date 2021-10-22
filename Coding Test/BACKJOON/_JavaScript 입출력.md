# 백준 Node.js(JavaScript) 입출력 방법

> Node.js의 모듈을 사용하여 입출력 받는다.
> 
- 2가지 방법이 있다.
    - `readline` 모듈
    - `fs` 모듈
- `readline` 모듈로 시간 초과가 나올 경우, `fs` 모듈을 사용한다.
<br>

## 1. `readline` 모듈

### 기본 형태

```jsx
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
```

### 한 줄 입력 받기

- "`line`" 이벤트가 발생할 때마다 input 스트림을 받는다.
- 입력의 마지막은 `\n`, `\r` 또는 `\r\n`으로 구분한다.
- 매개변수에 할당되는 것이 입력 값이고, 문자열로 들어온다.

```jsx
/*
rl.on('이벤트명', callback(매개변수){ 
	// 입력 처리
}).on('close', callback() {
	process.exit();
});
*/

rl.on('line', function(line){ 
	console.log("line : ", line);
	rl.close(); // 없을 경우 무한으로 입력을 받는다.
}).on('close', function() {
pro	cess.exit();
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

**※ 콘솔에서는 interactive shell이 계속 열려있기 때문에 자동으로 close가 호출되지 않는다.** 콘솔에서 실행하면 키보드로부터 입력을 받기 때문에 계속해서 입력 이벤트를 대기하게 되지만, 파일을 받게 되는 경우에는 파일의 데이터가 끝이나면 자동으로 EOF(end of file)에 걸려 close되어 코드가 끝나는 것이다.

**※ 콘솔에서 close하고 싶은 경우**, `ctrl`+`D`를 입력한다.

<br>

## 2. `fs` 모듈

> 파일 처리와 관련된 모듈이다.
> 
- 사이트마다 경로가 다르기 때문에 보편적으로 사용할 수 없다.

### 한 줄, 여러 개 입력 받기

```jsx
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' '); // 공백으로 구분하여 받기

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

### 여러 줄 입력 받기

```jsx
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 엔터로 구분하여 받기

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
<br>

## 3. 참고

[readline 참고1](https://nodejs.org/api/readline.html)

[readline 참고2](https://wooooooak.github.io/node.js/2018/09/26/Node.js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0/)

[fs 참고](https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80Node.js-Node.js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0)
