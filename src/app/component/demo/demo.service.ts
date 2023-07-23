import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  counter = 1;

  constructor() {}

  increment() {
    this.counter++;
  }

  sayHello(counter: number) {
    return counter++;
  }

  getCounter() {
    return this.counter;
  }
}
