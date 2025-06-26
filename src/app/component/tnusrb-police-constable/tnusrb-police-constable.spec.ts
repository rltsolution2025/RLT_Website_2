import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnusrbPoliceConstable } from './tnusrb-police-constable';

describe('TnusrbPoliceConstable', () => {
  let component: TnusrbPoliceConstable;
  let fixture: ComponentFixture<TnusrbPoliceConstable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TnusrbPoliceConstable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnusrbPoliceConstable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
