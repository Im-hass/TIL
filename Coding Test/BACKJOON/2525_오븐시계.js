let input = require('fs').readFileSync('ex/2525_오븐시계.txt').toString().split('\n');
let now = input[0].split(" ");
let h = Number(now[0]);
let m = Number(now[1].slice(0, 2));
let time = Number(input[1]);
let answer = [0, 0];

answer[0] = h;
answer[1] = m + time;

if (answer[1] >= 60) {
  let c = Math.floor(answer[1] / 60);
  answer[0] += c;
  answer[1] -= c*60;
}

if (answer[0] >= 24) {
  answer[0] %= 24;
}

console.log(answer[0] + " " + answer[1]);