import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tnusrb-sub-inspector-technical',
  imports: [CommonModule],
  templateUrl: './tnusrb-sub-inspector-technical.html',
  styleUrl: './tnusrb-sub-inspector-technical.css'
})
export class TnusrbSubInspectorTechnical {
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
