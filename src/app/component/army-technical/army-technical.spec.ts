import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyTechnical } from './army-technical';

describe('ArmyTechnical', () => {
  let component: ArmyTechnical;
  let fixture: ComponentFixture<ArmyTechnical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmyTechnical]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmyTechnical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
