import { setImmediate } from "core-js";

function test1 () {
  setTimeout(() => {
    console.log('log - timeout');
  }, 0);
  const promise1 = new Promise((resolve) => {
    console.log('log - promise1');
    resolve('promise1');
  });
  setImmediate(() => {
    console.log('log - setImmediate');
  }, 0);

  (async () => {
    console.log('async start');
    const str = await promise1;
    console.log(str);
  })();

  promise1.then(() => {
    console.log('log - promise1 - then');
  });
  console.log('log - end');
}

function test2 () {
  const promise = new Promise((resolve) => {
    console.log('log - promise');
    resolve('promise');
  });
  promise.then(() => {
    console.log('log - promise - then');
  });
  process.nextTick(() => {
    console.log('log - nextTick')
  });
}

export default function () {
  test2();
}

// log - promise1
// async start
// promise1
// log - end
// log - promis1 - then
// log -setImmediate
// log - timeout