import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit {
  candidates;

  constructor() { }

  ngOnInit() {
  }

  getCandidates(candidates) {
    this.candidates = candidates;
  }

}
