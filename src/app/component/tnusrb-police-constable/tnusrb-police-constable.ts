import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tnusrb-police-constable',
  imports: [CommonModule],
  templateUrl: './tnusrb-police-constable.html',
  styleUrl: './tnusrb-police-constable.css'
})
export class TnusrbPoliceConstable {

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
