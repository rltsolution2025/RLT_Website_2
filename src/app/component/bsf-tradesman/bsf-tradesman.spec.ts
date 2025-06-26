import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsfTradesman } from './bsf-tradesman';

describe('BsfTradesman', () => {
  let component: BsfTradesman;
  let fixture: ComponentFixture<BsfTradesman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsfTradesman]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsfTradesman);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
