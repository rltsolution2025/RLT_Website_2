import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-indian-coast-gaurd-navik-gd',
  imports: [CommonModule],
  templateUrl: './indian-coast-gaurd-navik-gd.html',
  styleUrl: './indian-coast-gaurd-navik-gd.css'
})
export class IndianCoastGaurdNavikGd {

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
