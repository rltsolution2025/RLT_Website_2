import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements AfterViewInit {
  isMenuOpen = false;
  currentDropdown: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(name: string, event: Event) {
    event.preventDefault();
    this.currentDropdown = this.currentDropdown === name ? null : name;
  }

  isDropdownOpen(name: string): boolean {
    return this.currentDropdown === name;
  }

  @HostListener('document:click', ['$event'])
  closeDropdownOnOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.currentDropdown = null;
    }
  }

  ngAfterViewInit(): void {
    // Not needed because dropdown is handled via Angular
  }
}
