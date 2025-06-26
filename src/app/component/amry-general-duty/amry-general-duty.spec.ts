import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmryGeneralDuty } from './amry-general-duty';

describe('AmryGeneralDuty', () => {
  let component: AmryGeneralDuty;
  let fixture: ComponentFixture<AmryGeneralDuty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmryGeneralDuty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmryGeneralDuty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
