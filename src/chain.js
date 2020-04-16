function Chain () {
  this.queue = [];
  this.processing = false;
}

Chain.prototype.doTask = function () {
  if (!this.processing && this.queue.length > 0) {
    // 空闲且队列中有任务
    this.processing = true;
    const task = this.queue.shift();
    task();
  }
}
Chain.prototype.taskGenerator = function (callback, timeout) {
  const task = () => {
    callback && callback();
    setTimeout(() => {
      this.processing = false;
      this.doTask();
    }, timeout * 1000);
  }
  this.queue.push(task);
  this.doTask();
}
Chain.prototype.eat = function (timeout = 0) {
  this.taskGenerator(() => console.log('eat'), timeout);
  return this;
};
Chain.prototype.work = function (timeout = 0) {
  this.taskGenerator(() => console.log('work'), timeout);
  return this;
};
Chain.prototype.sleep = function (timeout = 0) {
  this.taskGenerator(() => console.log('sleep'), timeout);
  return this;
}


export default function () {
  const chain = new Chain();
  chain.eat().sleep(5).eat().sleep(6).work();
}