import { sum1, sum2 } from './sum';

describe('Testing Sum suite', () => {
  it('test method sum1', () => {
    let output = sum1();
    expect(output).toBe(2);
  });

  it('test method sum2', () => {
    let output = sum2(2, 3);
    expect(output).not.toBeNull();
    expect(output).not.toBeUndefined();
    expect(output).not.toBeNaN();

    expect(output).toBe(5);
  });
});
