import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-ages-chart',
  templateUrl: './ages-chart.component.html',
  styleUrls: ['./ages-chart.component.scss']
})
export class AgesChartComponent implements AfterContentChecked {
  @Input() candidates;
  public agesChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public agesChartLabels: any[] = [];
  public agesChartType = 'bar';
  public agesChartLegend = true;

  public agesChartData: any[] = [];

  ngAfterContentChecked() {
    if (this.candidates && this.agesChartData.length === 0 ) {
     const byYear = this.orderByYear();
    this.agesChartData = this.fillValues(byYear);
    }
  }

  orderByYear() {
     const getValues = _.reduce(this.candidates,
          ( ageCount, candidate ) => {
            const year = moment(candidate.dob).year();
            const foundResult = _.find(ageCount, (result) => result.key === year );
            if ( foundResult !== undefined ) {
              foundResult.all.data++;
              foundResult[candidate.gender].data++;
              return ageCount;
            } else {
              this.agesChartLabels.push(year);
              const result = {
                key: year,
                all: {
                  data: 1,
                  label: 'ALL'
                },
                male: {
                  data: candidate.gender === 'male' ? 1 : 0,
                  label: 'Male'
                },
                female: {
                  data: candidate.gender === 'female' ? 1 : 0,
                  label: 'Female'
                }
              };
              ageCount.push(result);
              return ageCount;
            }
          }, []
        );
        return _.orderBy(getValues, ['key']);
  }

  fillValues(values) {
    return _.reduce(values,
      (fillCount, value) => {

        fillCount[0].label = value.all.label;
        fillCount[0].data.push(value.all.data);

        fillCount[1].label = value.male.label;
        fillCount[1].data.push(value.male.data);

        fillCount[2].label = value.female.label;
        fillCount[2].data.push(value.female.data);
        return fillCount;
      }, [{ data: [] }, { data: [] }, { data: [] } ]
    );
  }

}
