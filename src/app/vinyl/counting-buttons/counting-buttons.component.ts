import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counting-buttons',
  templateUrl: './counting-buttons.component.html',
  styleUrls: ['./counting-buttons.component.scss']
})
export class CountingButtonsComponent {

  @Input()
  public releaseDate = 0;

  @Output()
  releaseDateChange = new EventEmitter<number>();

  constructor() {
  }

  incValue(): void {
    this.releaseDate += 1;
    this.releaseDateChange.emit(this.releaseDate);
  }

  decValue(): void {
    this.releaseDate -= 1;
    this.releaseDateChange.emit(this.releaseDate);
  }
}
