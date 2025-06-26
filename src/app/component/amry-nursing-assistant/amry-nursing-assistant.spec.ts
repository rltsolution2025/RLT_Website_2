import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmryNursingAssistant } from './amry-nursing-assistant';

describe('AmryNursingAssistant', () => {
  let component: AmryNursingAssistant;
  let fixture: ComponentFixture<AmryNursingAssistant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmryNursingAssistant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmryNursingAssistant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
