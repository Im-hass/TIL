const filepath = process.platform === 'linux' ? '/dev/stdin' : 'ex/10818_최소,최대.txt';
const [n, ...arr] = require('fs').readFileSync(filepath).toString().trim().split('\n');
let input = arr[0].split(' ').map(Number);

console.log(solution(n, input));
console.log(solution2(n, input));

function solution(n, arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < n; i++) {
    if (max <= arr[i]) {
      max = arr[i];
    } else if (min >= arr[i]) {
      min = arr[i];
    }
  }

  return min + ' ' + max;
}

function solution2(n, arr) {
  return Math.min(...arr) + ' ' + Math.max(...arr);
}