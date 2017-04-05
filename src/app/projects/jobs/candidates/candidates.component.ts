import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  @Input() candidates;

  constructor() { }

  ngOnInit() {
  }

  buildName(name) {
    return `${this.capitalize(name.title)} ${this.capitalize(name.first)} ${this.capitalize(name.last)}`;
  }

  capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }

}
