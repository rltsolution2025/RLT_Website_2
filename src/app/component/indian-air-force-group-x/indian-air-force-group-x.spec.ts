import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianAirForceGroupX } from './indian-air-force-group-x';

describe('IndianAirForceGroupX', () => {
  let component: IndianAirForceGroupX;
  let fixture: ComponentFixture<IndianAirForceGroupX>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianAirForceGroupX]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianAirForceGroupX);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
