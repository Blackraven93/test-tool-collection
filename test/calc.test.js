import Calculate from '../build/calculation/calculate.js';
import fetchData from '../build/api/async.js';

const calc = new Calculate(10, 5);

test('10 + 5 = 15', () => {
  expect(calc.plus()).toBe(15);
});

test('10 - 5 = 5', () => {
  expect(calc.subtract()).toBe(5);
});

test('5 * 10 = 50', () => {
  expect(calc.multifly()).toBe(50);
});

test('10 / 5 = 2', () => {
  expect(calc.divide()).toBe(2);
});

test('object test', () => {
  const answer = {
    plus: calc.plus(),
    subtract: calc.subtract(),
    multifly: calc.multifly(),
  };

  answer['divide'] = calc.divide();

  expect(answer).toEqual({
    plus: 15,
    subtract: 5,
    multifly: 50,
    divide: 2,
  });
});

test('regex number test', () => {
  expect(String(calc.divide())).toMatch(/\d/);
});

test('Array test', () => {
  const operator = ['+', '-', '*', '/'];

  expect(operator).toContain('+');
  expect(new Set(operator)).toContain('+');
});

const correctOperator = (operator) => {
  switch (operator) {
    case '+':
      return calc.plus();
    case '-':
      return calc.subtract();
    case '*':
      return calc.multifly();
    case '/':
      return calc.divide();
    default:
      throw new Error('적절하지 않은 오퍼레이터입니다!!!');
  }
};

test('error checker', () => {
  expect(() => correctOperator('>')).toThrow(
    '적절하지 않은 오퍼레이터입니다!!!'
  );

  expect(() => correctOperator('>')).toThrow(Error);
});
