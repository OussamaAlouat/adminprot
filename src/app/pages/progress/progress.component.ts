import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  progress:number = 2;

  get getPercentage(): string {
    return `${this.progress}%`;
  }

  setProgressValue(value: number) {
    this.progress = value;
  }
}
