import { NationalitiesChartComponent } from './nationalities-chart/nationalities-chart.component';
import { AgesChartComponent } from './ages-chart/ages-chart.component';
import { GenderChartComponent } from './gender-chart/gender-chart.component';
import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [
    GenderChartComponent,
    AgesChartComponent,
    NationalitiesChartComponent,
  ]
})
export class AppChartsModule { }
