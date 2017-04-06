import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgesChartComponent } from './ages-chart.component';

describe('AgesChartComponent', () => {
  let component: AgesChartComponent;
  let fixture: ComponentFixture<AgesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
