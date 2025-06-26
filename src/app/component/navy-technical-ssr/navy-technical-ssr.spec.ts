import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavyTechnicalSSR } from './navy-technical-ssr';

describe('NavyTechnicalSSR', () => {
  let component: NavyTechnicalSSR;
  let fixture: ComponentFixture<NavyTechnicalSSR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavyTechnicalSSR]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavyTechnicalSSR);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
