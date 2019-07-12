import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  numbers: number[] = [];

  onGameStarted(): void {
    this.counter++;
    this.numbers.push(this.counter);
  }

  onGameStopped(): void {
    console.log('game stopped');
  }

  onCounterClear(): void {
    this.counter = 0;
    this.numbers = [];
  }
}
