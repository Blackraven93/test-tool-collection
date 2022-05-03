const { default: Calculate } = require('../build/calculation/calculate');

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
