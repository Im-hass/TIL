const filepath = process.platform === 'linux' ? '/dev/stdin' : 'Coding Test/BACKJOON/ex/2675_문자열반복.txt';
const [n, ...arr] = require('fs').readFileSync(filepath).toString().trim().split('\n');

solution(n, arr);

function solution(n, arr) {
  for (let i = 0; i < n; i++) {
    let str = arr[i].trim().split(' ');
    let p = '';
    let r = str[0];
    let s = str[1];
    
    for (let j = 0; j < s.length; j++) {
      for (let k = 0; k < r; k++) {
        p += s[j];
      }
    }

    console.log(p);
  }
}

//////////////////////////////////////////////
// 다른 풀이(https://laycoder.tistory.com/192)
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const input = [];

// rl.on('line', function (line) {
//     input.push(line);
// }).on('close', function () {
//     // T :  테스트 케이스의 개수
//     const T = +input[0];

//     for (let i = 0; i < T; i++) {
//         let result = '';
//         // R : 문자열 반복 수
//         const R = +input[i + 1].split(' ')[0];
//         // S : 문자열
//         const S = input[i + 1].split(' ')[1];
//         for (let j = 0; j < S.length; j++) {
//             // repeat() : 문자열을 n번 반복
//             result += S.split('')[j].repeat(R);
//         }
//         console.log(result);
//     }

//     process.exit();
// });
//////////////////////////////////////////////