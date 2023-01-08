import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string = '#dcdde1';
  @Input() progressColor: string = '#273c75';
  private _progress = 20;
  @Input() public set progress(
    val: number // get set trong style script ko liên quan đến angular
  ) {
    console.log('new value', this._progress);
    this._progress = val;
  }
  public get progress() {
    return this._progress;
  }
  constructor() {
    console.log(`constructor`, {
      progressColor: this.progressColor,
      progress: this.progress,
      backgroundColorl: this.backgroundColor,
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`onChanges`, {
      progressColor: this.progressColor,
      progress: this.progress,
      backgroundColorl: this.backgroundColor,
    });
  }
  ngOnInit() {
    console.log(`onInit`, {
      progressColor: this.progressColor,
      progress: this.progress,
      backgroundColorl: this.backgroundColor,
    });
  }
}
