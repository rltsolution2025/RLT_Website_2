import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tnusrb-forester',
  imports: [CommonModule],
  templateUrl: './tnusrb-forester.html',
  styleUrl: './tnusrb-forester.css'
})
export class TnusrbForester {
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
