import { setImmediate } from "core-js";

export default function () {
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

// log - promise1
// async start
// promise1
// log - end
// log - promis1 - then
// log -setImmediate
// log - timeout