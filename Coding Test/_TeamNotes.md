# 코딩 테스트 자주 쓰이는 함수
# 소수 판별
```jsx
function isPrime(n) {
  if(n < 2) return false;
  for(let i = 2; i <= Math.sqrt(n); i++) {
      if(s % i === 0) return false;
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(4)); // false
console.log(isPrime(11)); // true
```
<br>

# 순열(경우의 수, 중복X)
```jsx
let answer = new Set(); // new Set()로 중복 제거
let nums = [ '1', '2', '3' ];

function getPermutation(nums, fixed) {
  if (nums.length >= 1) {
    for (let i = 0; i < nums.length; i++) {
      const newFixed = fixed + nums[i]; // 기존 고정값에 배열의 i번째 요소를 합쳐 새로운 고정값으로 지정
      const copyArr = nums.slice(); // 복사

      copyArr.splice(i, 1); // 고정된 요소를 배열에서 제거하여, 고정되지 않은 요소들로 배열을 채운다.

      answer.add(parseInt(newFixed)); //newFixed 조합을 answer에 추가

      getPermutation(copyArr, newFixed); // 고정되지 않은 요소들이 담긴 배열과, 새로운 고정값을 인자로 전달하여 getPermutation 호출.
    }
  }
}

getPermutation(nums, '');

console.log(answer); // 모든 경우의 수 출력
```
<br>
