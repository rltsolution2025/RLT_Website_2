import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnusrbSubInspectorTechnical } from './tnusrb-sub-inspector-technical';

describe('TnusrbSubInspectorTechnical', () => {
  let component: TnusrbSubInspectorTechnical;
  let fixture: ComponentFixture<TnusrbSubInspectorTechnical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TnusrbSubInspectorTechnical]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnusrbSubInspectorTechnical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
