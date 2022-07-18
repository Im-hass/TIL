// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/12953
// 최소공배수(Least Common Multiple) : 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자
// n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자를 의미한다.
// n개의 숫자들이 입력되었을 때 이 수들의 최소공배수를 return
function solution(arr) {
  // arr : n개의 숫자를 담은 배열
  let ans = 1; // 최소공배수

  while (true) {
    let isFind = true;

    for (let i = 0; i < arr.length; i++) { // n 개의 수들에 대한 공배수인지 확인
      if (ans % arr[i] !== 0) { // 나눠지지 않을 경우 공배수가 아님
        isFind = false;
        break;
      }
    }

    if (isFind) { // 최소공배수를 찾으면 while 종료
      break;
    }
    ans++;
  }

  return ans;
}