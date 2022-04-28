const filepath = process.platform === 'linux' ? '/dev/stdin' : 'Coding Test/BACKJOON/ex/11720_숫자의합.txt';
const [n, str] = require('fs').readFileSync(filepath).toString().trim().split('\n');

console.log(solution(n, str));

function solution(n, str) {
  let result = 0;
  let arr = str.split('');
  
  arr.forEach(v => result += parseInt(v)); // int형 최대 길이 주의

  return result;
}