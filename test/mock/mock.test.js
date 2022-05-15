test('jest expect test about mock', () => {
  const mock = jest.fn();

  let result = mock('Raven');

  expect(result).toBeUndefined();
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith('Raven');
});

const doAdd = (a, b, callback) => {
  callback(a + b);
};

test('calls callback with arguments added', () => {
  const mockCallback = jest.fn((x) => x);
  doAdd(4, 6, mockCallback);
  expect(mockCallback).toHaveBeenCalledWith(10); // mock함수에 전달된 인자값 체크
});

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1, 3], mockCallback);

test('The mock function is called twice', () => {
  expect(mockCallback.mock.calls.length).toBe(3);
});
test('The first argument of the first call to the function was 0', () => {
  expect(mockCallback.mock.calls[0][0]).toBe(0);
});
test('The first argument of the second call to the function was 1', () => {
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});
test('The return value of the first call to the function was 42', () => {
  expect(mockCallback.mock.results[0].value).toBe(42);
});
