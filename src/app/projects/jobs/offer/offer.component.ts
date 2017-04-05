import { OffersService } from './../services/offers.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  routeSub;
  offersSub;
  offer;
  projectId;
  offerId;
  offerSet;

  constructor(
    private router: ActivatedRoute,
    private offersService: OffersService
  ) {
    this.routeSub = this.router.params
      .subscribe(
        params => {
          this.offerId = params['offer_id'];
          this.projectId = params['project_id'];
          this.offersSub = this.offersService.getOffer(this.projectId, this.offerId)
            .subscribe(
              offer => {
                this.offerSet = true;
                this.offer = offer;
              }
            );
        }
      );

  }

  ngOnInit() {
  }

}
