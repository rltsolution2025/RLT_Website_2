import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMenuOpen = false;
  currentDropdown: string | null = null;
  toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
  toggleDropdown(name: string) {
    this.currentDropdown = this.currentDropdown === name ? null : name;
  }

  isDropdownOpen(name: string): boolean {
    return this.currentDropdown === name;
  }
}
