const filepath = process.platform === 'linux' ? '/dev/stdin' : 'Coding Test/BACKJOON/ex/1157_단어공부.txt';
const input = require('fs').readFileSync(filepath).toString().trim();

console.log(solution(input));

// function solution(s) {
//   let result = '';
//   let alphabets = [];
//   let cnts = new Array(26).fill(0); // 각 알파벳 별 개수 세기
//   let max_cnt = 0; // 최대 개수의 개수
//   let max = 0; // 최대 개수

//   for (let i = 65; i < 91; i++) {
//     alphabets.push(String.fromCharCode(i));
//   }

//   s = s.toUpperCase();

//   for (let i = 0; i < s.length; i++) {
//     cnts[alphabets.indexOf(s[i])]++;
//   }

//   max = Math.max(...cnts);

//   cnts.forEach(v => max === v ? max_cnt++ : '');

//   if (max_cnt > 1) {
//     result = '?';
//   } else {
//     result = alphabets[cnts.indexOf(max)];
//   }

//   return result;
// }

//////////////////////////////////////////////
// 다른 풀이
function solution(s) {
  let result = '';
  let alphabets = [];
  let cnts = new Array(26).fill(0); // 각 알파벳 별 개수 세기
  let max = 0; // 최대 개수

  for (let i = 65; i < 91; i++) {
    alphabets.push(String.fromCharCode(i));
  }

  s = s.toUpperCase();

  for (let i = 0; i < s.length; i++) {
    cnts[alphabets.indexOf(s[i])]++;
  }

  max = Math.max(...cnts);

  if (cnts.indexOf(max) === cnts.lastIndexOf(max)) {
    result = alphabets[cnts.indexOf(max)];
  } else {
    result = '?';
  }

  return result;
}
//////////////////////////////////////////////

//////////////////////////////////////////////
// 다른 풀이(https://gurtn.tistory.com/49)
// let input = require('fs').readFileSync('/dev/stdin').toString().toLowerCase();

// const result = new Array(26).fill(0);

// for (let i = 0; i < input.length; i++) {
//   result[input.charCodeAt(i) - 97] ++;
// }

// const max = Math.max(...result);
// const index = result.indexOf(max);

// let isSame = false;

// for (let j = 0; j < 26; j++) {
//   if (result[j] === max && index != j) {
//     isSame = true;
//     break;
//   }
// }

// console.log(isSame ? "?" : String.fromCharCode(index + 65));
//////////////////////////////////////////////