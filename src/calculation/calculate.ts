interface IOperator {
  (x: number, y: number): number;
}

/* Abstract method
abstract class ACalculate {
  private firstNumber: number | undefined = undefined;
  private secondNumber: number | undefined = undefined;

  // public abstract

  public abstract plus(x: number, y: number): IOperator;
  public abstract subtract(x: number, y: number): IOperator;
  public abstract multifly(x: number, y: number): IOperator;
  public abstract divide(x: number, y: number): IOperator;
}
*/

interface ICalculate {
  readonly firstNumber: number;
  readonly secondNumber: number;

  plus(): number;
  subtract(): number;
  multifly(): number;
  divide(): number;
}

interface IOperator {
  (firstNumber: number, secondNumber: number): number;
}

class Calculate implements ICalculate {
  constructor(readonly firstNumber: number, readonly secondNumber: number) {}

  plus(): number {
    return this.firstNumber + this.secondNumber;
  }

  subtract(): number {
    return this.firstNumber - this.secondNumber;
  }

  multifly(): number {
    return this.firstNumber * this.secondNumber;
  }

  divide(): number {
    return this.firstNumber / this.secondNumber;
  }
}

export default Calculate;

const calculate = new Calculate(5, 10);
console.log(calculate.plus());
