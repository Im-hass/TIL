// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/60057

// 내용 :
// 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 압축하는 알고리즘을 구현한다.
// ex) "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)
// 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있다.
// ex) "abcabcdede"와 같은 문자열은 전혀 압축되지 않는다.
// 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축한다.
// ex) "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축된다.
// 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return

// 풀이 :
// 문자를 최대로 압축할 수 있는 길이 => s.length/2
// 인덱스 1부터 s.length/2까지 완전탐색하며 확인해보고, 가장 길이가 짧은 것을 return

// 참고 : https://wonyoung2257.tistory.com/26

function solution(s) {
  // s = 압축할 문자열
  let answer = s.length; // 압축된 문자열의 최댓값

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let str = ""; // 압축된 문자열
    let cnt = 1; // 압축된 문자 개수
    let tempStr = s.substr(0, i); // 1개(0~1), 2개(0~2), 3개(0~3), ..., s.length/2개씩 문자를 자름

    for (let j = i; j < s.length; j += i) { // 임시 압축(tempStr) 이후(잘린 곳(i))부터 시작하여 문자열 끝까지 압축된 개수만큼 자름
      let nextStr = s.substr(j, i); // 압축된 개수만큼 자름
      // console.log("temp : " + tempStr);
      // console.log("next : " + nextStr);

      if (tempStr === nextStr) { // 동일할 경우 => 압축 가능하므로 cnt 증가
        cnt += 1;
      } else { // 압축 불가능하므로 이전 문자 압축 끝내기, 새로운 압축
        if (cnt === 1) str += tempStr; // 숫자가 1일 경우, 1을 생략하고 일부 압축
        else str += cnt + tempStr; // 숫자를 붙여서 일부 압축

        cnt = 1;
        tempStr = nextStr;
      }

      // console.log("str : " + str);
    }

    // 마지막 남는 문자열 붙여주기
    if (cnt === 1) str += tempStr; // 숫자가 1일 경우, 1을 생략하고 일부 압축
    else str += cnt + tempStr; // 숫자를 붙여서 일부 압축

    // console.log("last str : " + str);
    answer = Math.min(answer, str.length); // 이전과 비교하여 더 짧은 길이로 교체
  }

  return answer;
}

// testcase
console.log(solution("aabbaccc")); //7
console.log(solution("ababcdcdababcdcd")); //9
console.log(solution("abcabcdede")); //8
console.log(solution("abcabcabcabcdededededede")); //14
console.log(solution("xababcdcdababcdcd")); //17