const filepath = process.platform === 'linux' ? '/dev/stdin' : 'Coding Test/BACKJOON/ex/1152_단어의개수.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split(' ');

let word = [];

input.map(v => {
  if(v.length !== 0) word.push(v);
});

console.log(word.length);

//////////////////////////////////////////////
// // 다른 풀이(https://onelight-stay.tistory.com/367)
// let fs = require("fs");
// // let input = fs.readFileSync(filepath).toString().trim().split(" ");

// console.log(input[0] === "" ? 0 : input.length);
// 공백이 연속으로 나오는 경우는 없기 때문에, ''이 입력된 경우를 제외하고는 길이가 1 이상이다.
//////////////////////////////////////////////