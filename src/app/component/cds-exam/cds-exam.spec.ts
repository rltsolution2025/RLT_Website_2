import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDSExam } from './cds-exam';

describe('CDSExam', () => {
  let component: CDSExam;
  let fixture: ComponentFixture<CDSExam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CDSExam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDSExam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
