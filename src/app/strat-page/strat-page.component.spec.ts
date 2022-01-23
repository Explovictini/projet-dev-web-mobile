import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratPageComponent } from './strat-page.component';

describe('StratPageComponent', () => {
  let component: StratPageComponent;
  let fixture: ComponentFixture<StratPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StratPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StratPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
