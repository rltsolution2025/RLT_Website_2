import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianCoastGaurdNavikDb } from './indian-coast-gaurd-navik-db';

describe('IndianCoastGaurdNavikDb', () => {
  let component: IndianCoastGaurdNavikDb;
  let fixture: ComponentFixture<IndianCoastGaurdNavikDb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianCoastGaurdNavikDb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianCoastGaurdNavikDb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
