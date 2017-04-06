import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {
  @Input() candidates: any[];

  constructor() { }

  ngOnInit() {
  }



}
