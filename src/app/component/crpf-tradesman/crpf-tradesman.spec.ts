import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRPFTradesman } from './crpf-tradesman';

describe('CRPFTradesman', () => {
  let component: CRPFTradesman;
  let fixture: ComponentFixture<CRPFTradesman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRPFTradesman]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRPFTradesman);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
