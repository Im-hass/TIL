const filepath = process.platform === 'linux' ? '/dev/stdin' : 'Coding Test/BACKJOON/ex/2908_상수.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split(' ');

console.log(solution(input[0], input[1]));

function solution(n1, n2) {
  let result = 0;
  let temp1 = '';
  let temp2 = '';

  for (let i = 0; i < 3; i++) {
    temp1 += n1%10;
    n1 = parseInt(n1 / 10);

    temp2 += n2%10;
    n2 = parseInt(n2 / 10);
  }

  temp1 > temp2 ? result = temp1 : result = temp2;

  return result;
}

//////////////////////////////////////////////
// // 다른 풀이(
// https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80Node.js-2908%EB%B2%88-%EC%83%81%EC%88%98
// https://gurtn.tistory.com/71
// )
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// let num1 = Number(input[0].split('').reverse().join(''));
// let num2 = Number(input[1].split('').reverse().join(''));
// // const [num1, num2] = input.map(v => [...v].reverse().join(''));

// console.log(num1 > num2 ? num1 : num2);