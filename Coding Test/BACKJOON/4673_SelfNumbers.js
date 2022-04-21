solution();

function solution() {
  let arr = new Array(10001).fill(false);

  for (let i = 1; i <= 10000; i++) {
    arr[d(i)] = true;
  }

  arr.map((v, i) => {
    if(i === 0) return;
    if(v === false) console.log(i);
  });
}

function d(n) {
  let sum = n;

  while (n > 0) {
    sum += n % 10;
    n = Number.parseInt(n / 10);
  }

  return sum;
}