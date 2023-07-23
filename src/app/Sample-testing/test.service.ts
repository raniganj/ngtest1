export class TestService {
  value: number = 1;
  title: string = 'first test service';
  status: boolean = true;

  increment() {
    this.value += 1;
  }

  titleUppercase() {
    return this.title.toUpperCase();
  }

  toggle() {
    this.status = !this.status;
  }

  async getAsyncData() {
    return '100';
  }
}
