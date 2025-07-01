import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navy-technical-ssr',
  imports: [CommonModule],
  templateUrl: './navy-technical-ssr.html',
  styleUrl: './navy-technical-ssr.css'
})
export class NavyTechnicalSSR {
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
