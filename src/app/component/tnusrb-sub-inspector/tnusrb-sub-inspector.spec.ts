import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnusrbSubInspector } from './tnusrb-sub-inspector';

describe('TnusrbSubInspector', () => {
  let component: TnusrbSubInspector;
  let fixture: ComponentFixture<TnusrbSubInspector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TnusrbSubInspector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnusrbSubInspector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
