import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent {
  @Input() progress: number = 50;
  @Output() valueChanges: EventEmitter<number> = new EventEmitter();

  changeValue(value: number){
    if(this.progress >= 100 && value >=0) {
      this.valueChanges.emit(100);
     return this.progress = 100;
    }

    if(this.progress <=0 && value < 0) {
      this.valueChanges.emit(0);
      return this.progress = 0
    }

    const result = this.progress += value;
    this.valueChanges.emit(result);
    return result;
  }
}
