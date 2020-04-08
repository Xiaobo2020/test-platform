import {default as decoratorRunner} from './decorator';
import {default as asyncRunner} from './async';

const runner = () => {
  decoratorRunner();
  asyncRunner();
};

runner();