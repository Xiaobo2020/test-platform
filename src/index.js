// import {default as decoratorRunner} from './decorator';
// import {default as asyncRunner} from './async';
// import {default as searchRunner} from './ts/search';
// import {default as fiberRunner} from './ts/fiber';
// import chainRunner from './chain';
// import regexRunner from './regex';
// import arrowRunner from './arrow';
import queueRunner from './queue';

const runner = () => {
  // decoratorRunner();
  // asyncRunner();
  // searchRunner();
  // fiberRunner();
  // chainRunner();
  // regexRunner();
  // arrowRunner();
  queueRunner();
};

runner();