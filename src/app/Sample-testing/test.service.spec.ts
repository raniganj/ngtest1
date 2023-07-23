import { TestService } from './test.service';

describe('Test Suites for TestService', () => {
  it('Service data Initialize', () => {
    let testService = new TestService();

    expect(testService.value).toBe(1);
    expect(testService.title).toBe('first test service');
    expect(testService.status).toBeTrue();
  });

  it('test increment', () => {
    let testService = new TestService();

    expect(testService.value).toBe(1);
    testService.increment();
    expect(testService.value).toBe(2);
    testService.increment();
    expect(testService.value).toBe(3);
  });

  it('test toggle', () => {
    let testService = new TestService();

    expect(testService.status).toBeTruthy();
    testService.toggle();
    expect(testService.status).toBeFalsy();
    testService.toggle();
    expect(testService.status).toBeTruthy();
  });

  it('test uppercase', () => {
    let testService = new TestService();

    expect(testService.title).toBe('first test service');
    let titleUppercase = testService.titleUppercase();
    expect(titleUppercase).toBe('FIRST TEST SERVICE');
  });

  it('test promise/async', async () => {
    let testService = new TestService();

    await expectAsync(testService.getAsyncData());
    await expectAsync(testService.getAsyncData()).toBeResolvedTo('100');
  });
});

describe('Test Suites V2 for TestService', () => {
  let testService: TestService | any;

  beforeEach(() => {
    testService = new TestService();
  });

  afterEach(() => {
    testService = null;
  });

  it('Service data Initialize', () => {
    expect(testService.value).toBe(1);
    expect(testService.title).toBe('first test service');
    expect(testService.status).toBeTrue();
  });

  it('test increment', () => {
    expect(testService.value).toBe(1);
    testService.increment();
    expect(testService.value).toBe(2);
    testService.increment();
    expect(testService.value).toBe(3);
  });

  it('test toggle', () => {
    expect(testService.status).toBeTruthy();
    testService.toggle();
    expect(testService.status).toBeFalsy();
    testService.toggle();
    expect(testService.status).toBeTruthy();
  });

  it('test uppercase', () => {
    expect(testService.title).toBe('first test service');
    let titleUppercase = testService.titleUppercase();
    expect(titleUppercase).toBe('FIRST TEST SERVICE');
  });

  it('test promise/async', async () => {
    await expectAsync(testService.getAsyncData());
    await expectAsync(testService.getAsyncData()).toBeResolvedTo('100');
  });
});
