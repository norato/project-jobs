import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalitiesChartComponent } from './nationalities-chart.component';

describe('NationalitiesChartComponent', () => {
  let component: NationalitiesChartComponent;
  let fixture: ComponentFixture<NationalitiesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalitiesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalitiesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
