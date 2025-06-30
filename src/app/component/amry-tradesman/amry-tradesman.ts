import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-amry-tradesman',
  imports: [CommonModule],
  templateUrl: './amry-tradesman.html',
  styleUrl: './amry-tradesman.css'
})
export class AmryTradesman {

  
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
