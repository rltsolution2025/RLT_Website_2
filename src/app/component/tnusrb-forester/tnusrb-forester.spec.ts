import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnusrbForester } from './tnusrb-forester';

describe('TnusrbForester', () => {
  let component: TnusrbForester;
  let fixture: ComponentFixture<TnusrbForester>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TnusrbForester]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnusrbForester);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
