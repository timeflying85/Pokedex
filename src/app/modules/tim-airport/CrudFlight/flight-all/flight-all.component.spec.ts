import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAllComponent } from './flight-all.component';

describe('FlightAllComponent', () => {
  let component: FlightAllComponent;
  let fixture: ComponentFixture<FlightAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
