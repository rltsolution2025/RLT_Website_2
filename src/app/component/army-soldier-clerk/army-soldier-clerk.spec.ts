import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmySoldierClerk } from './army-soldier-clerk';

describe('ArmySoldierClerk', () => {
  let component: ArmySoldierClerk;
  let fixture: ComponentFixture<ArmySoldierClerk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmySoldierClerk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmySoldierClerk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
