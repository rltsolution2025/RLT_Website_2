import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnusrbSubInspectorFingerPrint } from './tnusrb-sub-inspector-finger-print';

describe('TnusrbSubInspectorFingerPrint', () => {
  let component: TnusrbSubInspectorFingerPrint;
  let fixture: ComponentFixture<TnusrbSubInspectorFingerPrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TnusrbSubInspectorFingerPrint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnusrbSubInspectorFingerPrint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
