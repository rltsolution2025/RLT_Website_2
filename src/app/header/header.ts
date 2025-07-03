// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import {
//   Component,
//   Inject,
//   PLATFORM_ID,
//   AfterViewInit,
//   HostListener
// } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [RouterLink, RouterLinkActive, CommonModule],
//   templateUrl: './header.html',
//   styleUrl: './header.css'
// })
// export class Header implements AfterViewInit {
//   isMenuOpen = false;
//   currentDropdown: string | null = null;

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   toggleDropdown(name: string, event: Event) {
//     event.preventDefault();
//     this.currentDropdown = this.currentDropdown === name ? null : name;
//   }

//   isDropdownOpen(name: string): boolean {
//     return this.currentDropdown === name;
//   }

//   @HostListener('document:click', ['$event'])
//   closeDropdownOnOutsideClick(event: Event) {
//     const target = event.target as HTMLElement;
//     if (!target.closest('.dropdown')) {
//       this.currentDropdown = null;
//     }
//   }

//   ngAfterViewInit(): void {
//     this.addGoogleTranslateScript();
//   }

//   // ✅ Add Google Translate script to DOM
//   addGoogleTranslateScript() {
//     if (isPlatformBrowser(this.platformId)) {
//       const script = document.createElement('script');
//       script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//       document.body.appendChild(script);

//       (window as any).googleTranslateElementInit = () => {
//         new (window as any).google.translate.TranslateElement(
//           { pageLanguage: 'en' },
//           'google_translate_element'
//         );
//       };
//     }
//   }

//   // ✅ Trigger language change
//   onLanguageChange(event: Event) {
//   const langMap: Record<string, string> = {
//     en: 'English',
//     ta: 'Tamil',
//     hi: 'Hindi',
//     ml: 'Malayalam',
//     te: 'Telugu',
//     kn: 'Kannada'
//   };

//   const langCode = (event.target as HTMLSelectElement).value;
//   const googleLang = langMap[langCode];

//   // Prevent error if dropdown is not found
//   const googleSelect = document.querySelector<HTMLSelectElement>('.goog-te-combo');
//   if (!googleSelect || !googleLang) return;

//   // Only update if value is different
//   if (googleSelect.value !== googleLang) {
//     googleSelect.value = googleLang;
//     googleSelect.dispatchEvent(new Event('change'));
//   }
// }

// }

//--------------------

// import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { RouterLink, RouterLinkActive } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [RouterLink, RouterLinkActive, CommonModule],
//   templateUrl: './header.html',
//   styleUrl: './header.css'
// })
// export class Header implements AfterViewInit {

//  isMenuOpen = false;
//   currentDropdown: string | null = null;

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   toggleDropdown(name: string, event: Event) {
//     event.preventDefault();
//     this.currentDropdown = this.currentDropdown === name ? null : name;
//   }

//   isDropdownOpen(name: string): boolean {
//     return this.currentDropdown === name;
//   }

//   @HostListener('document:click', ['$event'])
//   closeDropdownOnOutsideClick(event: Event) {
//     const target = event.target as HTMLElement;
//     if (!target.closest('.dropdown')) {
//       this.currentDropdown = null;
//     }
//   }

//   toggleMenu() {
//   this.isMenuOpen = !this.isMenuOpen;
//   document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
// }

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   ngAfterViewInit(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       this.loadGoogleTranslateScript();
//     }
//   }

//   loadGoogleTranslateScript() {
//     const script = document.createElement('script');
//     script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     document.body.appendChild(script);

//     (window as any).googleTranslateElementInit = () => {
//       new (window as any).google.translate.TranslateElement(
//         {
//           pageLanguage: 'en',
//           autoDisplay: false
//         },
//         'google_translate_element'
//       );
//     };
//   }

//   onLanguageChange(event: Event) {
//     const value = (event.target as HTMLSelectElement).value;

//     const googleSelect = document.querySelector<HTMLSelectElement>('.goog-te-combo');

//     if (googleSelect && googleSelect.value !== value) {
//       googleSelect.value = value;
//       googleSelect.dispatchEvent(new Event('change'));
//     }
//   }

// }

//----------today-----------
import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  HostListener
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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

  // Toggle menu open/close and lock body scroll
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  // Toggle dropdown menus
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

  const insideDropdown = target.closest('.nav-item.dropdown') || target.closest('.dropdown-menu');

  if (!insideDropdown) {
    setTimeout(() => {
      this.currentDropdown = null;
    }, 100); // Short delay allows click to process
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
