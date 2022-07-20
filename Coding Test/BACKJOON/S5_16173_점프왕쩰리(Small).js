const filepath = process.platform === 'linux' ? '/dev/stdin' : '../../Coding Test/BACKJOON/ex/S5_16173_점프왕쩰리(Small).txt';
const [N, ...arr] = require('fs').readFileSync(filepath).toString().trim().split('\n');

function solution(N, arr) {
  let q = []; // 큐
  const board = arr.map(v => v.split(' ').map(v => parseInt(v)));
  let isVisited = board.map(v => v.map(_ => false)); // board 크기 만큼 false로 초기화

  let res = false; // 게임 결과

  q.push([0, 0]); // 시작 지점 넣기
  isVisited[0][0] = true; // 시작 지점 방문

  while (q.length > 0) { // 큐가 빌때까지 반복
    let [y, x] = q.shift(); // 큐에서 인덱스값 빼기
    let v = board[y][x]; // 현재 인덱스 위치의 값(이동할 수 있는 칸 수)
    
    if (v === -1) { // 이미 게임판의 승리 지점일 경우
      res = true;
      break;
    } else {
      if (y + v < N && !isVisited[y + v][x]) { // 아래쪽으로 v칸 갈 수 있을 경우
        q.push([y + v, x]);
        isVisited[y + v][x] = true;
      }
  
      if (x + v < N && !isVisited[y][x + v]) { // 오른쪽으로 v칸 갈 수 있을 경우
        q.push([y, x + v]);
        isVisited[y][x + v] = true;
      }
    }
  }

  return res ? 'HaruHaru' : 'Hing';
}

console.log(solution(parseInt(N), arr)); // HaruHaru




// 1. ‘쩰리’는 NxN의 내부에서만 움직일 수 있다.
//    ‘쩰리’가 구역의 외부로 나가는 경우 즉시 게임에서 패배하게 된다.
// 2. ‘쩰리’의 출발점은 항상 정사각형의 가장 왼쪽, 가장 위의 칸(0, 0)이다.
// 3. ‘쩰리’가 이동 가능한 방향은 오른쪽과 아래 뿐이다.
// 4. ‘쩰리’가 가장 오른쪽, 가장 아래 칸에 도달하는 순간, 즉시 ‘쩰리’의 승리로 게임은 종료된다.
// 5. ‘쩰리’가 한 번에 이동할 수 있는 칸의 수는, 현재 밟고 있는 칸에 쓰여 있는 수 만큼이다.
//    칸에 쓰여 있는 수 초과나 그 미만으로 이동할 수 없다.

// 게임판의 승리 지점(오른쪽 맨 아래 칸)에는 -1이 쓰여있다.
// 주어진 게임 구역에서 끝 점(오른쪽 맨 아래 칸)까지 도달할 수 있는지 return
// ‘쩰리’가 끝 점에 도달할 수 있으면 “HaruHaru”(인용부호 없이), 도달할 수 없으면 “Hing” (인용부호 없이)을 한 줄에 출력