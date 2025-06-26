import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianAirForceGroupY } from './indian-air-force-group-y';

describe('IndianAirForceGroupY', () => {
  let component: IndianAirForceGroupY;
  let fixture: ComponentFixture<IndianAirForceGroupY>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianAirForceGroupY]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianAirForceGroupY);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
