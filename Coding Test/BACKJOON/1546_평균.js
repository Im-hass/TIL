const filePath = process.platform === 'linux' ? '/dev/stdin' : 'ex/1546_평균.txt';
const [n, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');
let input = arr[0].split(' ').map(Number);

console.log(solution(n, input));

function solution(n, arr) {
  let avg = 0;
  let max = 0;

  arr.map(v => { if (max <= v) max = v; });

  for (let i = 0; i < n; i++) {
    avg += arr[i] / max * 100;
  }

  return avg / n;
}