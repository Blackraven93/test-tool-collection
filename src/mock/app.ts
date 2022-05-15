import * as math from './mock.js';

export const doAdd: Operator = (a, b) => math.add(a, b);
export const doSubtract: Operator = (a, b) => math.subtract(a, b);
export const doMultiply: Operator = (a, b) => math.multiply(a, b);
export const doDivide: Operator = (a, b) => math.divide(a, b);
