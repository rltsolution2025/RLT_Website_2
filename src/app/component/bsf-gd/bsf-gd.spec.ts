import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsfGd } from './bsf-gd';

describe('BsfGd', () => {
  let component: BsfGd;
  let fixture: ComponentFixture<BsfGd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsfGd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsfGd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
