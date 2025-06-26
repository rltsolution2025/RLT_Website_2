import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSCGD } from './ssc-gd';

describe('SSCGD', () => {
  let component: SSCGD;
  let fixture: ComponentFixture<SSCGD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SSCGD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSCGD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
