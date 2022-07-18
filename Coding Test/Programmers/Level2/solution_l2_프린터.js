// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/42587

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function(element) {
  this.array.push(element);
};

Queue.prototype.front = function() {
  return this.array[0];
};

Queue.prototype.dequeue = function() {
  return this.array.shift();
};

Queue.prototype.max = function() {
  return Math.max(...this.array);
};

function solution(priorities, location) {
      var result = -1;

  let vq = new Queue();
  let pq = new Queue();
  
  for (let i = 0; i < priorities.length; i++) {
    vq.enqueue(i);
    pq.enqueue(priorities[i]);
  }

  let count = 0;

  while(true) {
    if(pq.front() === pq.max()) {
      count++;

      if(vq.front() === location) {
        result = count;
        break;
      } else {
        vq.dequeue();
        pq.dequeue();
      }
    } else {
      vq.enqueue(vq.dequeue());
      pq.enqueue(pq.dequeue());
    }
  }
  
  return result;
}