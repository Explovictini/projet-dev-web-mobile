import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratPokemonComponent } from './strat-pokemon.component';

describe('StratPokemonComponent', () => {
  let component: StratPokemonComponent;
  let fixture: ComponentFixture<StratPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StratPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StratPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
