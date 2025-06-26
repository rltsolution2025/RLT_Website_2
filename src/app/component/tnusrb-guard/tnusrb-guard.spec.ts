import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnusrbGuard } from './tnusrb-guard';

describe('TnusrbGuard', () => {
  let component: TnusrbGuard;
  let fixture: ComponentFixture<TnusrbGuard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TnusrbGuard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnusrbGuard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
