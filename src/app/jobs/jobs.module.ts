import { OffersService } from './services/offers.service';
import { SearchCanditatesService } from './services/search-canditates.service';
import { OfferComponent } from './offer/offer.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { FormComponent } from './form/form.component';
import { NewJobComponent } from './new-job/new-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewJobComponent,
    FormComponent,
    CandidatesComponent,
    // OfferComponent,
  ],
  providers: [
    SearchCanditatesService,
    OffersService
  ]
})
export class JobsModule { }
