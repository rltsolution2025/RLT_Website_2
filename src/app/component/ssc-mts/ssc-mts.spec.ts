import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSCMTS } from './ssc-mts';

describe('SSCMTS', () => {
  let component: SSCMTS;
  let fixture: ComponentFixture<SSCMTS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SSCMTS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSCMTS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
