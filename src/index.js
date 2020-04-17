// import {default as decoratorRunner} from './decorator';
// import {default as asyncRunner} from './async';
// import {default as searchRunner} from './ts/search';
// import {default as fiberRunner} from './ts/fiber';
// import chainRunner from './chain';
// import regexRunner from './regex';
// import arrowRunner from './arrow';
// import queueRunner from './queue';
// import objectRunner from './object';
// import reactiveRunner from './reactive';
// import sumRunner from './sum';
// import uniqueRunner from './unique';
import taskRunner from './task';
// import thousandRunner from './thousand';

const runner = () => {
  // decoratorRunner();
  // asyncRunner();
  // searchRunner();
  // fiberRunner();
  // chainRunner();
  // regexRunner();
  // arrowRunner();
  // queueRunner();
  // objectRunner();
  // reactiveRunner();
  // sumRunner();
  // uniqueRunner();
  taskRunner();
  // thousandRunner();
};

runner();