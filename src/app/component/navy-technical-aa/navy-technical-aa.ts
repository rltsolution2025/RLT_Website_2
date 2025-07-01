import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navy-technical-aa',
  imports: [CommonModule],
  templateUrl: './navy-technical-aa.html',
  styleUrl: './navy-technical-aa.css'
})
export class NavyTechnicalAA {
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
