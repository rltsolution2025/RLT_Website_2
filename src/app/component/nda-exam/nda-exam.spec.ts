import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NDAExam } from './nda-exam';

describe('NDAExam', () => {
  let component: NDAExam;
  let fixture: ComponentFixture<NDAExam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NDAExam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NDAExam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
