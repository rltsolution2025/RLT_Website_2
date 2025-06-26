import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmryTradesman } from './amry-tradesman';

describe('AmryTradesman', () => {
  let component: AmryTradesman;
  let fixture: ComponentFixture<AmryTradesman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmryTradesman]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmryTradesman);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
