import timerGame from '../build/timer.js';

jest.useFakeTimers();
it('calls the callback after 1 second via advanceTimersByTime', () => {
  const callback = jest.fn();

  timerGame(callback);

  // advance 이후에 불려짐
  expect(callback).not.toBeCalled();

  jest.advanceTimersByTime(1000); // 모든 시간이 흘렀을 때

  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
