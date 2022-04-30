const filepath = process.platform === 'linux' ? '/dev/stdin' : 'Coding Test/BACKJOON/ex/10809_알파벳찾기.txt';
const input = require('fs').readFileSync(filepath).toString().trim();

console.log(solution(input));

function solution(s) {
  let result = new Array(26).fill(-1);
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let i = 0; i < s.length; i++) {
    if (result[alphabet.indexOf(s[i])] === -1) {
      result[alphabet.indexOf(s[i])] = i;
    }
  }

  return result.join(' ');
}

//////////////////////////////////////////////
// 다른 풀이(https://gurtn.tistory.com/48)
// const input = require("fs").readFileSync("/dev/stdin").toString();

// const result = [];

// for (let i = 97; i <= 122; i++) {
//   result.push(input.indexOf(String.fromCharCode(i))); // indexOf 메서드를 사용하여 만약에 값이 있다면 그 값의 index를 없다면 -1
// }

// console.log(result.join(" "));
//////////////////////////////////////////////