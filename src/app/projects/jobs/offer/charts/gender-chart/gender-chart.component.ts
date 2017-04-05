import { AfterContentChecked } from '@angular/core/core';
import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss']
})
export class GenderChartComponent implements AfterContentChecked {

  @Input() candidates: any[];

  public genderChartLabels: string[] = ['Male', 'Female'];
  public genderChartData: number[] = [];
  public genderChartType: string = 'doughnut';

  constructor() {
    this.genderChartData = [];
  }

  ngAfterContentChecked() {
    if (this.candidates && this.genderChartData.length === 0 ) {
      this.genderChartData.push(this.getGenderSize('male'));
      this.genderChartData.push(this.getGenderSize('female'));
    }
  }



  getGenderSize(gender) {
    return this.candidates
      .filter(
        candidate => candidate.gender === gender
      ).length;
  }

}
