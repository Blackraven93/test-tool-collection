import * as app from '../../build/mock/app.js';
import * as math from '../../build/mock/mock.js';

test('calls math.add', () => {
  const addMock = jest.spyOn(math, 'add');

  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3);

  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(1, 2);
});

test('calls math.add', () => {
  const addMock = jest.spyOn(math, 'add');

  // override the implementation
  addMock.mockImplementation(() => 'mock');
  expect(app.doAdd(1, 2)).toEqual('mock');

  // restore the original implementation
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});

test('calls math.add', () => {
  const originalAdd = math.add; // 실제 구현체

  math.add = jest.fn(originalAdd);

  // spy the calls to add
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);

  // override the implementation
  math.add.mockImplementation(() => 'mock');
  expect(app.doAdd(1, 2)).toEqual('mock');
  expect(math.add).toHaveBeenCalledWith(1, 2);

  // restore the original implementation
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});
