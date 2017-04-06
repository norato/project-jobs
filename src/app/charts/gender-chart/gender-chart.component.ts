import { AfterContentChecked } from '@angular/core/core';
import { Component, OnInit, Input, DoCheck } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss']
})
export class GenderChartComponent implements AfterContentChecked {

  @Input() candidates;

  public genderChartLabels: string[] = ['Male', 'Female'];
  public genderChartData: number[] = [];
  public genderChartType: string = 'doughnut';

  constructor() {
    this.genderChartData = [];
  }

  ngAfterContentChecked() {
    if (this.candidates && this.genderChartData.length === 0 ) {
      const getValues = this.candidates
        .reduce(
          ( genderCount, candidate ) => {
            const foundResult = _.findIndex(genderCount, (result) => result.key === candidate.gender );
            if ( foundResult !== -1 ) {
              genderCount[foundResult].value++;
              return genderCount;
            } else {
              genderCount.push({ key: candidate.gender, value: 1 });
              return genderCount;
            }
          }, []
        );
      this.genderChartData = _.map(getValues, count => count.value);
    }
  }
}
