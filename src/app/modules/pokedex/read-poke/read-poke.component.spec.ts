import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPokeComponent } from './read-poke.component';

describe('ReadPokeComponent', () => {
  let component: ReadPokeComponent;
  let fixture: ComponentFixture<ReadPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
