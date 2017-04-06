import { Component, OnInit, OnDestroy, EventEmitter, Output, Input, DoCheck } from '@angular/core';
import { SearchCanditatesService } from './../services/search-canditates.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy, DoCheck {
  @Output() getCandidates: EventEmitter<any> = new EventEmitter<any>();
  @Input() offer;
  @Output() offerChange: EventEmitter<any> = new EventEmitter<any>();

  jobForm;
  searchCanditatesServiceSub;
  genders = [
    { key: 'Male', value: 'male'},
    { key: 'Female', value: 'female'}
  ];
  nationalities = [
    { key: 'Brazil', value: 'BR'},
    { key: 'US', value: 'US'},
    { key: 'England', value: 'GB'},
    { key: 'France', value: 'FR'},
    { key: 'Netherlands', value: 'NL'}
  ];

  constructor(private searchCanditatesService: SearchCanditatesService) { }

  ngOnInit() {
    this.jobForm = new FormGroup({
      name: new FormControl(this.offer.name, Validators.required),
      description: new FormControl(this.offer.description, Validators.required),
      nationality: new FormControl(this.offer.nationality, Validators.required),
      gender: new FormControl(this.offer.gender, Validators.required),
      positions: new FormControl(this.offer.positions, Validators.required),
      factor: new FormControl(this.offer.factor, Validators.required)
    });
  }

  ngOnDestroy() {
    if (this.searchCanditatesServiceSub) { this.searchCanditatesServiceSub.unsubscribe(); }
  }

  ngDoCheck() {
    this.offer = Object.assign({}, this.jobForm.value);
    this.offerChange.next(this.offer);
  }

  submitForm(value) {
    const params = {
      times: value.positions * value.factor,
      gender: value.gender,
      nationality: value.nationality
    }
    this.searchCanditatesServiceSub = this.searchCanditatesService
    .searchCandidates(params)
      .subscribe(
        candidates => {
          this.getCandidates.emit(candidates.results);
        }
      );

  }

}
