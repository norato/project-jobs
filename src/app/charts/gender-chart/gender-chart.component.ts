import { Component, Input, AfterContentChecked, OnChanges } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss']
})
export class GenderChartComponent implements OnChanges {

  @Input() candidates;

  public genderChartLabels: string[] = ['Male', 'Female'];
  public genderChartData: number[] = [];
  public genderChartType: string = 'doughnut';

  constructor() {
    this.genderChartData = [];
  }

  ngOnChanges() {
    if (this.candidates) {
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
