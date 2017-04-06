import { Component, AfterContentChecked, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-nationalities-chart',
  templateUrl: './nationalities-chart.component.html',
  styleUrls: ['./nationalities-chart.component.scss']
})
export class NationalitiesChartComponent implements AfterContentChecked {

  @Input() candidates;

  public nationalitiesChartLabels: any[] = [];

  public nationalitiesChartData: any = [];
  public nationalitiesChartType = 'radar';

  ngAfterContentChecked() {
    if (this.candidates && this.nationalitiesChartData.length === 0 ) {
     const byYear = this.orderByYear();
    this.nationalitiesChartData = this.fillValues(byYear);
    }
  }

    orderByYear() {
     const getValues = _.reduce(this.candidates,
          ( ageCount, candidate ) => {
            const foundResult = _.find(ageCount, (result) => result.key === candidate.nat );
            if ( foundResult !== undefined ) {
              foundResult.all.data++;
              foundResult[candidate.gender].data++;
              return ageCount;
            } else {
              this.nationalitiesChartLabels.push(candidate.nat);
              const result = {
                key: candidate.nat,
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
