import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-army-soldier-clerk',
  imports: [CommonModule],
  templateUrl: './army-soldier-clerk.html',
  styleUrl: './army-soldier-clerk.css'
})
export class ArmySoldierClerk {
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
