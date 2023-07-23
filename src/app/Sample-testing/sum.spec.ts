import { sum1, sum2, sum3 } from './sum';

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

  it('test async method sum3-0', () => {
    let result = sum3(1, 2);
    return expectAsync(result).toBeResolved();
  });

  it('test async method sum3-1', async () => {
    let result = await sum3(1, 2);
    expect(result).toBe(3);
  });

  it('test async method sum3-2', async () => {
    let result = sum3(1, 2);
    await expectAsync(result).toBeResolved();
  });

  it('test async method sum3-3', async () => {
    let result = sum3(1, 2);
    await expectAsync(result).toBeResolved();
    await expectAsync(result).toBeResolvedTo(3);
  });
});
