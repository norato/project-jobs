import { AppChartsModule } from './../charts/charts.module';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { JobsRoutingModule } from './jobs.routing.module';
import { OffersService } from './services/offers.service';
import { SearchCanditatesService } from './services/search-canditates.service';
import { OfferComponent } from './offer/offer.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { FormComponent } from './form/form.component';
import { NewJobComponent } from './new-job/new-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsComponent } from './graphs/graphs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JobsRoutingModule,
    TabsModule.forRoot(),
    AppChartsModule
  ],
  declarations: [
    NewJobComponent,
    FormComponent,
    CandidatesComponent,
    GraphsComponent,
    // OfferComponent,
  ],
  providers: [
    SearchCanditatesService,
    OffersService
  ]
})
export class JobsModule { }
