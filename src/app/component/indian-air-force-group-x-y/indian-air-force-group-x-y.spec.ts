import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianAirForceGroupXY } from './indian-air-force-group-x-y';

describe('IndianAirForceGroupXY', () => {
  let component: IndianAirForceGroupXY;
  let fixture: ComponentFixture<IndianAirForceGroupXY>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianAirForceGroupXY]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianAirForceGroupXY);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
