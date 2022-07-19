// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 return
function solution(n) {
  let arr = [0, 1];
  
  // 동적 계획법(bottom-up)
  for(let i = 2; i <= n; i++) {
      arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567; // 나누는 위치 주의
  }
  
  return arr[n];
}