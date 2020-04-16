function Queue () {
  this.queue = [];
  this.processing = false;
}

Queue.prototype.doTask = function () {
  if (this.processing === false && this.queue.length > 0) {
    const task = this.queue.shift();
    task();
  }
}

Queue.prototype.task = function (delay, callback) {
  const fn = () => {
    this.processing = true;
    callback && callback();
    setTimeout(() => {
      this.processing = false;
      this.doTask();
    }, delay);
  };
  this.queue.push(fn);
  return this;
}

Queue.prototype.start = function () {
  this.doTask();
}

export default function () {
  const q = new Queue();
  q
    .task(1000, () => console.log(1))
    .task(2000, () => console.log(2))
    .task(3000, () => console.log(3))
    .start();
}