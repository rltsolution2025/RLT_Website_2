import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  HostListener
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MobileHeader } from '../component/mobile-header/mobile-header';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule,MobileHeader],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements AfterViewInit {

  isMenuOpen = false;
  dropdownStates: { [key: string]: boolean } = {};
  // Removed unused currentDropdown property

  constructor(@Inject(PLATFORM_ID) public platformId: Object) {}

  // Toggle mobile menu open/close
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.dropdownStates = {}; // Close all dropdowns
    }
  }

  // Toggle dropdown open/close for mobile menu
  toggleDropdown(name: string, event: Event) {
    event.stopPropagation();
    this.dropdownStates[name] = !this.dropdownStates[name];
  }

  // Check if dropdown is open
  isDropdownOpen(name: string) {
    return !!this.dropdownStates[name];
  }

  // Called when a mobile menu link is clicked; closes menu and dropdowns
  navigateAndClose(name: string) {
    this.isMenuOpen = false;
    this.dropdownStates = {};
  }

  @HostListener('document:click', ['$event'])
  closeDropdownOnOutsideClick(event: Event) {
    // Close dropdowns and mobile menu if click is outside the mobile menu overlay (mobile only)
    if (this.isMenuOpen) {
      const target = event.target as HTMLElement;
      const insideMenu = target.closest('.mobile-menu-overlay');
      if (!insideMenu) {
        this.dropdownStates = {};
        this.isMenuOpen = false;
      }
    }
  }


  // Load Google Translate
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadGoogleTranslateScript();
    }
  }

  loadGoogleTranslateScript() {
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          autoDisplay: false
        },
        'google_translate_element'
      );
    };
  }

  onLanguageChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    const googleSelect = document.querySelector<HTMLSelectElement>('.goog-te-combo');

    if (googleSelect && googleSelect.value !== value) {
      googleSelect.value = value;
      googleSelect.dispatchEvent(new Event('change'));
    }
  }
}
