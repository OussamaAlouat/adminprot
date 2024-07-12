import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit{
  /**
   * Para renombrar el input sin cambiar el nombre de la variable
   * Se introduce el nombre entre el parentesis
   */
  // @Input('valor') progress: number = 50;
  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn-primary'
  @Output() valueChanges: EventEmitter<number> = new EventEmitter();


  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

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

  onChange(event: number) {
    if(event >=100) {
      this.progress = 100;
    } else if(event <=0 ){
      this.progress = 0
    } else {
      this.progress = event;
    }

    this.valueChanges.emit(this.progress);
  }
}
