import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatPokeComponent } from './stat-poke.component';

describe('StatPokeComponent', () => {
  let component: StatPokeComponent;
  let fixture: ComponentFixture<StatPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatPokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
