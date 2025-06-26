import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavyMr } from './navy-mr';

describe('NavyMr', () => {
  let component: NavyMr;
  let fixture: ComponentFixture<NavyMr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavyMr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavyMr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
