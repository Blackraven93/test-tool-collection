import Bird from '../build/bird.js';

jest.mock('../build/bird');

beforeEach(() => {
  Bird.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const bird = new Bird({
    name: 'raven',
    age: 4,
    size: 8,
    color: ['black', 'grey', 'white'],
    canFly: true,
  });
  expect(Bird).toHaveBeenCalledTimes(1);
});

const spy = jest.spyOn(Bird.prototype, 'getInfo').mockImplementation(() => {
  console.log('mocked function');
});

it('spy test', () => {
  const bird = new Bird({
    name: 'raven',
    age: 4,
    size: 8,
    color: ['black', 'grey', 'white'],
    canFly: true,
  });

  bird.getInfo();
  expect(spy).toHaveBeenCalled();
  console.log(spy.mock);
});
