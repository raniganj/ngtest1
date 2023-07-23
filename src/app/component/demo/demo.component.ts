import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  title = 'Hello Demo';
  counter = 10;

  constructor(private demoservice: DemoService) {}

  updateCounter() {
    this.counter = this.demoservice.getCounter();
  }
}
