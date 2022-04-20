let input = require('fs').readFileSync('ex/2480_주사위세개.txt').toString().trim().split(' ');
solution(input[0], input[1], input[2]);

function solution (a, b, c) {
  let ab = a === b;
  let ac = a === c;
  let bc = b === c;
  let max = Math.max(a, b, c);
  let r = 0;

  if (ab && bc) {
    // console.log(10000 + a * 1000);
    r = 10000 + a * 1000;
  } else if (ab || bc) {
    // console.log(1000 + b * 100);
    r = 1000 + b * 100;
  } else if (ac) {
    // console.log(1000 + c * 100);
    r = 1000 + c * 100;
  } else {
    // console.log(max * 100);
    r = max * 100;
  }
  
  return r;
}