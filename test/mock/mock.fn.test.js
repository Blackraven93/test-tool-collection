import * as app from '../../build/mock/app.js';
import * as math from '../../build/mock/mock.js';

math.add = jest.fn();
math.subtract = jest.fn();

test('calls math.add', () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test('calls math.subtract', () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
