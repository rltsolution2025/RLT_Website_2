import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chatbot } from './chatbot';
import { CommonModule } from '@angular/common';

describe('Chatbot', () => {
  let component: Chatbot;
  let fixture: ComponentFixture<Chatbot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chatbot,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chatbot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
