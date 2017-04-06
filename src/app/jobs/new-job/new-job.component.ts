import { Offer } from '../offer';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OffersService } from './../services/offers.service';


@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit, OnDestroy {
  candidates;
  offer: Offer;

  offerSub;
  routeSub;
  projectId;

  constructor(
    private offersService: OffersService,
    private router: ActivatedRoute
  ) {
    this.offer = new Offer();
    this.routeSub = this.router.params
      .subscribe(
        params => this.projectId = params['project_id']
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if ( this.offerSub ) { this.offerSub.unsubscribe(); }
    this.routeSub.unsubscribe();
  }

  getCandidates(candidates) {
    this.candidates = candidates;
  }

  saveOffer() {
    this.offer.candidates = this.candidates;
    this.offerSub = this.offersService
      .saveOffer(this.projectId, this.offer)
      .subscribe(
        offer => console.log(offer)
      )

  }

}
