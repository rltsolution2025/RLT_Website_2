import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cds-exam',
  imports: [CommonModule],
  templateUrl: './cds-exam.html',
  styleUrl: './cds-exam.css'
})
export class CDSExam {

   showSyllabus = false;

  @ViewChild('syllabusRef') syllabusRef!: ElementRef;

  toggleSyllabus() {
    this.showSyllabus = !this.showSyllabus;

    setTimeout(() => {
      if (this.showSyllabus && this.syllabusRef) {
        this.syllabusRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200); // matches CSS animation
  }
}
