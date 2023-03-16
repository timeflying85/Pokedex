import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesPokeComponent } from './types-poke.component';

describe('TypesPokeComponent', () => {
  let component: TypesPokeComponent;
  let fixture: ComponentFixture<TypesPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesPokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
