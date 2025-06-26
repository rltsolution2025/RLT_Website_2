import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRPFConstableGd } from './crpf-constable-gd';

describe('CRPFConstableGd', () => {
  let component: CRPFConstableGd;
  let fixture: ComponentFixture<CRPFConstableGd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRPFConstableGd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRPFConstableGd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
