import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter();
  @Output() gameStopped = new EventEmitter();
  @Output() counterClear = new EventEmitter();
  @ViewChild('start', {static: false}) startButton: ElementRef;
  ref: number;

  constructor() {
  }

  ngOnInit() {
  }

  onGameStarted(): void {
    (this.startButton.nativeElement as HTMLButtonElement).disabled = true;
    this.ref = setInterval(() => {
      this.gameStarted.emit();
    }, 1000);
  }

  onGameStopped(): void {
    clearInterval(this.ref);
    (this.startButton.nativeElement as HTMLButtonElement).disabled = false;
    this.gameStopped.emit();
  }

  onCounterClear(): void {
    this.counterClear.emit();
  }
}
