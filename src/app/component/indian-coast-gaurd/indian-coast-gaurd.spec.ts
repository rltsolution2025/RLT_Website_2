import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianCoastGaurd } from './indian-coast-gaurd';

describe('IndianCoastGaurd', () => {
  let component: IndianCoastGaurd;
  let fixture: ComponentFixture<IndianCoastGaurd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianCoastGaurd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianCoastGaurd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
