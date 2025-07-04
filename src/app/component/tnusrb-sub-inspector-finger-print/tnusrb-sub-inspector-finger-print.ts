import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tnusrb-sub-inspector-finger-print',
  imports: [CommonModule],
  templateUrl: './tnusrb-sub-inspector-finger-print.html',
  styleUrl: './tnusrb-sub-inspector-finger-print.css'
})
export class TnusrbSubInspectorFingerPrint {
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
