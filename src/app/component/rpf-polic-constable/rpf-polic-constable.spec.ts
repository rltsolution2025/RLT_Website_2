import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPFPolicConstable } from './rpf-polic-constable';

describe('RPFPolicConstable', () => {
  let component: RPFPolicConstable;
  let fixture: ComponentFixture<RPFPolicConstable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RPFPolicConstable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RPFPolicConstable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
