# Array 연습 문제
## 1. 수열 최소값 위치
### 문제 설명
> 수열이 주어질 때, 이 수열에 있는 수 중 최소값의 위치를 모두 출력하시오.  
> 입력은 자연수로 된 배열을 받고, 시작 위치는 0으로 계산하여 최소값의 위치를 배열로 반환한다.  
> 100 이하의 자연수가 입력된다.  

### 입력값
  ```javascript
    #1 [5, 2, 10, 2]
    #2 [4, 5, 7, 4, 8]
    #3 [12, 11, 11, 16, 11, 12]
  ```
  
### 출력값
  ```javascript
    #1 [1, 3]
    #2 [0, 3]
    #3 [1, 2, 4]
  ```

### 구현
```javascript
function answer(nums) {
  let result = [];
  
  let min = Number.MAX_SAFE_INTEGER;

  nums.map(v => {
    if(min >= v) min = v;
  });

  nums.map(function(v, i) {
    if(min == v) result.push(i);
  });

  return result;
}
```
<br>

## 2. 체스 세트
### 문제 설명
> 게임을 하기 위해 부족하거나 많은 기물의 개수를 계산하여 반환하시오.  
> 기물의 개수는 배열 형태로 king~pawns 순으로 들어오며, 한 게임을 하기 위해 필요한 기물의 개수는 아래와 같다.  
> 순서, 기물 필요 개수 : king 1, queen 1, rooks 2, bishops 2, knights 2, pawns 8  

### 입력값
  ```javascript
    #1 [0, 1, 2, 2, 2, 7]
    #2 [2, 1, 2, 1, 2, 1]
    #3 [0, 1, 1, 5, 3, 6]
  ```
  
### 출력값
  ```javascript
    #1 [1, 0, 0, 0, 0, 1]
    #2 [-1, 0, 0, 1, 0, 7]
    #3 [1, 0, -3, -1, 2]
  ```

### 구현
```javascript
function answer(chess) {
  let result = [];  
  let essential = [1, 1, 2, 2, 2, 8];

  chess.map((v, i) => {
    result.push(essential[i] - v);
  });

  return result;
}
```
<br>

## 3. 두 수 최대 합
### 문제 설명
> 수열이 주어질 때, 최대합이 나올 수 있는 두 수를 출력하시오.  
> 입력은 정수로 된 배열을 받고, 최대 합이 나올 수 있는 두 수를 배열 형태로 반환한다.  
> 배열로 입력되는 정수는 10 ~ 20개 사이이며, 정수의 범위는 -20 ~ +20 사이의 값이 입력된다.  

### 입력값
  ```javascript
    #1 [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9]
    #2 [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19]
    #3 [-15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18, 14]
  ```
  
### 출력값
  ```javascript
    #1 [18, 17]
    #2 [19, 14]
    #3 [19, 15]
  ```

### 구현
```javascript
function answer(nums) {
  let result = [];
  
  nums.sort((x, y) => y - x);

  result.push(nums[0]);
  result.push(nums[1]);

  return result;
}
```
<br>

## 4. 일곱 난장이
### 문제 설명
> 모든 난장이의 가슴에는 숫자가 표시된 배지가 있다.  
> 그 중, 일곱 난장이의 배지에 표시된 숫자의 합은 100이라는 단서로 일곱 난장이를 분별할 수 있다. 일곱 난장이를 분별하여 출력하시오.  
> 배지의 값은 100이하 자연수가 들어오며, 일곱 난장이의 배지 값을 기존 순서대로 배열에 넣어 반환한다.  

### 입력값
  ```javascript
    #1 [1, 5, 6, 7, 10, 12, 19, 29, 33]
    #2 [25, 23, 11, 2, 18, 3, 28, 6, 37]
    #3 [3, 37, 5, 36, 6, 22, 19, 2, 28]
  ```

### 출력값
  ```javascript
    #1 [1,  5,  6, 7, 19, 29, 33]
    #2 [23, 11,  2, 18, 3,  6, 37]
    #3 [3, 37,  5, 6, 19,  2, 28]
  ```

### 구현
```javascript
function answer(dwarf) {
  let result = [];

  // calc sum
  let sum = 0;
  for (let i = 0; i < dwarf.length; i++) {
    sum += dwarf[i];
  }
  sum -= 100;

  // search dwarf
  let faker = [];
  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (sum == dwarf[i] + dwarf[j]) {
        faker[0] = i;
        faker[1] = j;
        break;
      }
    }

    if (faker.length != 0) break;
  }

  // put result
  let count = 0;
  for (let i = 0; i < dwarf.length; i++) {
    if (faker[0] != i && faker[1] != i) {
      result[count++] = dwarf[i];
    }
  }

  return result;
}
```
<br>

## 5. 숫자 빈도수 구하기
### 문제 설명
> 두 자연수 M, N을 입력 받아, M부터 N까지 각 자리수의 빈도수를 합하여 출력하시오.  
> 숫자들의 각 자릿수 별 숫자 빈도수를 계산하여, 0 ~ 9까지의 빈도수 값을 반환한다.  
> 입력 값 M, N은 10,000 이하의 자연수이며, 0 ~ 9까지의 자릿수 별 빈도수를 배열 형태로 반환한다.  

### 입력값
  ```javascript
    #1 [129, 137]
    #2 [1412, 1918]
    #3 [4159, 9182]
  ```
  
### 출력값
  ```javascript
    #1 [1, 10, 2, 9, 1, 1,  1, 1, 0, 1]
    #2 [100, 614, 101, 101, 189, 201, 201, 201, 201, 119]
    #3 [1503, 1527, 1503, 1502, 2343, 2503, 2512, 2512, 2505, 1686]
  ```

### 구현
```javascript
function answer(s, e) {
  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for(let i = s; i <= e; i++) {
    let str = i + "";

    for(let j = 0; j < str.length; j++) {
      result[str[j]]++;
    }
  }

  return result;
}
```
<br>

## 6. 달팽이 만들기
### 문제 설명
> 달팽이 모양으로 숫자를 하나씩 적어주는 프로그램을 만드시오.  
> 정사각형 모양의 달팽이 2차원 배열을 그려준다.  
> 입력한 크기의 정사각형으로, 시계방향으로 돌면서 숫자를 채워 내부로 들어가는 달팽이 모양 2차원 배열을 반환한다.  

### 입력값
  ```javascript
    #1 3
    #2 5
    #3 6
  ```

### 출력값
  ```javascript
    #1 [ 
      [ 1, 2, 3 ],
      [ 8, 9, 4 ],
      [ 7, 6, 5 ]
    ]
    #2 [
      [ 1, 2, 3, 4, 5 ],
      [ 16, 17, 18, 19, 6 ],
      [ 15, 24, 25, 20, 7 ],
      [ 14, 23, 22, 21, 8 ],
      [ 13, 12, 11, 10, 9 ]
    ]
    #3 [
      [ 1, 2, 3, 4, 5, 6 ],
      [ 20, 21, 22, 23, 24, 7 ],
      [ 19, 32, 33, 34, 25, 8 ],
      [ 18, 31, 36, 35, 26, 9 ],
      [ 17, 30, 29, 28, 27, 10 ],
      [ 16, 15, 14, 13, 12, 11 ]
    ]
  ```

### 구현
```javascript
function answer(length) {
  let result = [];

  for (let i = 0; i < length; i++) result[i] = [];

  let direction = 1;
  let x, y, num;
  x = y = num = 0;
  x--;

  while (1) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }

    length--;

    if (length <= 0) break;

    for (let j = 0; j < length; j++) {
      y += direction;
      result[y][x] = ++num;
    }

    direction *= -1;
  }
  
  return result;
}
```
<br>
