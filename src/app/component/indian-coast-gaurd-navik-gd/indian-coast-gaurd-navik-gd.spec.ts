import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianCoastGaurdNavikGd } from './indian-coast-gaurd-navik-gd';

describe('IndianCoastGaurdNavikGd', () => {
  let component: IndianCoastGaurdNavikGd;
  let fixture: ComponentFixture<IndianCoastGaurdNavikGd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianCoastGaurdNavikGd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianCoastGaurdNavikGd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
