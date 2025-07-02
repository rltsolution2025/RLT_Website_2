import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-indian-coast-gaurd-navik-db',
  imports: [CommonModule],
  templateUrl: './indian-coast-gaurd-navik-db.html',
  styleUrl: './indian-coast-gaurd-navik-db.css'
})
export class IndianCoastGaurdNavikDb {
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
