// 属性设置为只读
function readonly (target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}
// 添加日志
function log (target, name, descriptor) {
  const fn = descriptor.value;
  descriptor.value = function(...args) {
    console.log('This is logger text');
    fn.apply(this, args);
  };
  return descriptor;
}
// 添加防抖
function debounce (delay = 0) {
  return function (target, name, descriptor) {
    const handler = descriptor.value;
    let timerId;
    descriptor.value = function (...args) {
      timerId = clearTimeout(timerId);
      timerId = setTimeout(() => {
        handler.apply(this, args);
      }, delay);
    };
    return descriptor;
  }
}
// 添加节流
function throttle (wait = 0) {
  return function (target, name, descriptor) {
    const handler = descriptor.value;
    let timerId;
    descriptor.value = function (...args) {
      if (timerId) {
        return;
      }
      handler.apply(this, args);
      timerId = setTimeout(() => {
        timerId = undefined;
      }, wait);
    };
    return descriptor;
  }
}
class Person {
  constructor(name) {
    this.name = name;
  }

  @readonly
  job = 'frontEnd';

  @log
  sayHi () {
    console.log(`Hi, i am ${this.name}.`);
  }

  @debounce(1000)
  checkForDebounce (value) {
    console.log('debounce', value);
  }

  @throttle(1000)
  checkForThrottle (value) {
    console.log('throttle', value);
  }
}

const runner = () => {
  const instance = new Person();
  console.log(instance.job);

  /* instance.checkForDebounce('first');
  instance.checkForDebounce('second');
  setTimeout(() => {
    instance.checkForDebounce('third after 1500ms');
  }, 1500); */
  // debounce second
  // debounce third after 1500ms


  /* instance.checkForThrottle('first');
  instance.checkForThrottle('second');
  setTimeout(() => {
    instance.checkForThrottle('third after 1500ms');
  }, 1500); */
  // throttle first
  // throttle third after 1500ms
};

export default runner;
