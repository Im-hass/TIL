const [n, ...arr] = require('fs').readFileSync('Coding Test/SWExpertAcademy/ex/2072_홀수만더하기.txt').toString().trim().split('\n');

solution(n, arr);

function solution(n, arr) {
  for (let i = 0; i < n; i++) {
    let nums = arr[i].trim().split(' ');
    let sum = 0;
    nums.forEach(v => v % 2 !== 0 ? sum += parseInt(v) : '');
    console.log('#' + (i + 1) + ' ' + sum);
  }
}

// OUTPUT
// #1 200
// #2 208
// #3 121