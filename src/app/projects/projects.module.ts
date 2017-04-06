import { ChartsModule } from 'ng2-charts';
import { OffersService } from './jobs/services/offers.service';
import { SearchCanditatesService } from './jobs/services/search-canditates.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from './services/projects.service';
import { ProjectsRoutingModule } from './projects.routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { NewJobComponent } from './jobs/new-job/new-job.component';
import { FormComponent } from './jobs/form/form.component';
import { CandidatesComponent } from './jobs/candidates/candidates.component';
import { OfferComponent } from './jobs/offer/offer.component';
import { GenderChartComponent } from './jobs/offer/charts/gender-chart/gender-chart.component';
import { AgesChartComponent } from './jobs/offer/charts/ages-chart/ages-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectFormComponent,
    NewJobComponent,
    FormComponent,
    CandidatesComponent,
    OfferComponent,
    GenderChartComponent,
    AgesChartComponent,
  ],
  providers: [
    ProjectsService,
    SearchCanditatesService,
    OffersService
  ]
})
export class ProjectsModule { }
