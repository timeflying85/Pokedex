import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightOneComponent } from './flight-one.component';

describe('FlightOneComponent', () => {
  let component: FlightOneComponent;
  let fixture: ComponentFixture<FlightOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
