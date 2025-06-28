import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eligibity } from './eligibity';

describe('Eligibity', () => {
  let component: Eligibity;
  let fixture: ComponentFixture<Eligibity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eligibity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eligibity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
