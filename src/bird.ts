interface IBird {
  name: string;
  age: number;
  size: number;
  color?: string[];
  canFly?: boolean;
}

abstract class AbstractBird {
  name;
  age;
  size;
  color;
  canFly;

  constructor({ name, age, size, color, canFly }: IBird) {
    this.name = name;
    this.age = age;
    this.size = size;
    this.color = color;
    this.canFly = canFly;
  }

  abstract fly(): string;
  getInfo(): IBird {
    return {
      name: this.name,
      age: this.age,
      size: this.size,
    };
  }
}

class Bird extends AbstractBird {
  constructor(bird: IBird) {
    super(bird);
  }

  fly() {
    return this.canFly ? `${this.name} can fly !` : `${this.name} can't fly..`;
  }

  getInfo() {
    super.getInfo();
    return {
      name: this.name,
      age: this.age,
      size: this.size,
      color: this.color,
    };
  }
}

export default Bird;
