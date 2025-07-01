import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-amry-nursing-assistant',
  imports: [CommonModule],
  templateUrl: './amry-nursing-assistant.html',
  styleUrl: './amry-nursing-assistant.css'
})
export class AmryNursingAssistant {

  
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
