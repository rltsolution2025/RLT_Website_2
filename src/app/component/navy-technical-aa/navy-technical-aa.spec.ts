import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavyTechnicalAA } from './navy-technical-aa';

describe('NavyTechnicalAA', () => {
  let component: NavyTechnicalAA;
  let fixture: ComponentFixture<NavyTechnicalAA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavyTechnicalAA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavyTechnicalAA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
