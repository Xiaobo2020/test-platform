// import {default as decoratorRunner} from './decorator';
// import {default as asyncRunner} from './async';
import {default as searchRunner} from './ts/search';
// import {default as fiberRunner} from './ts/fiber';

const runner = () => {
  // decoratorRunner();
  // asyncRunner();
  searchRunner();
  // fiberRunner();
};

runner();