import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { SearchCanditatesService } from './../services/search-canditates.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Output() getCandidates: EventEmitter<any> = new EventEmitter<any>();

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
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      nationality: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      positions: new FormControl('', Validators.required),
      factor: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy() {
    this.searchCanditatesServiceSub.unsubscribe();
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
