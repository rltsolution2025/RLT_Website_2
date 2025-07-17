import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { Header } from '../../header/header';


@Component({
  selector: 'app-mobile-header',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './mobile-header.html',
  styleUrl: './mobile-header.css'
})
export class MobileHeader {
  isMenuOpen = false;
  dropdownStates: { [key: string]: boolean } = {};

  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggleMenu(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.closeAllDropdowns();
    }
  }

  toggleDropdown(name: string, event: Event) {
  event.preventDefault();
  event.stopPropagation();
  this.dropdownStates[name] = !this.dropdownStates[name];
  Object.keys(this.dropdownStates).forEach(key => {
    if (key !== name) this.dropdownStates[key] = false;
  });
}

  isDropdownOpen(name: string): boolean {
    return !!this.dropdownStates[name];
  }

 navigateAndClose() {
  this.isMenuOpen = false;
  this.closeAllDropdowns();
}

  private closeAllDropdowns() {
    this.dropdownStates = {};
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.isMenuOpen) return;
    
    const clickedInside = this.mobileMenu?.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.toggleMenu();
    }
  }
}
