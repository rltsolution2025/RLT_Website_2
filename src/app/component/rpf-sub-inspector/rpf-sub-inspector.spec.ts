import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPFSubInspector } from './rpf-sub-inspector';

describe('RPFSubInspector', () => {
  let component: RPFSubInspector;
  let fixture: ComponentFixture<RPFSubInspector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RPFSubInspector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RPFSubInspector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
