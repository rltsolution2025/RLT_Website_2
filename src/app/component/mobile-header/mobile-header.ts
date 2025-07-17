import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive} from '@angular/router';
import { Header } from '../../header/header';
import { link } from 'fs';


@Component({
  selector: 'app-mobile-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './mobile-header.html',
  styleUrl: './mobile-header.css'
})
export class MobileHeader {
  isMenuOpen = false;
  dropdownStates: { [key: string]: boolean } = {};

  menuItems = [
    {
      key: 'tnusrb',
      label: 'TNUSRB',
      children: [
        { label: 'TNUSRB - Police Constable', link: '/tnusrb-police-constable' },
        { label: 'TNUSRB - Sub Inspector', link: '/tnusrb-sub-inspector' },
        { label: 'TNUSRB - Sub Inspector (Fingerprint)', link: '/tnusrb-sub-inspector-finger-print'},
        { label: 'TNUSRB - Sub Inspector (Technical)', link: '/tnusrb-sub-inspector-technical'},
        { label: 'TNFURSC - Watcher', link: '/tnusrb-watcher'},
        { label: 'TNFURSC - Guard', link: '/tnusrb-guard'},
        { label: 'TNFURSC - Forester', link: '/tnusrb-forester'}
      ]
    },
    {
      key: 'army',
      label: 'Indian Army',
      children: [
        { label: 'NDA Exam', link: '/NDA-Exam' },
        { label: 'CDS Exam', link: '/CDS-Exam' },
        { label: 'Army General Duty', link: '/army-general-duty'},
        { label: 'Army Tradesmen', link: '/army-tradesman'},
        { label: 'Army Nursing Assistant', link: '/army-nursing-assistant'},
        { label: 'Army Soldier Clerk', link: '/army-soldier-clerk'},
        { label: 'Army Technical', link: '/army-technical'},
      ]
    },
    {
      key: 'navy',
      label: 'Indian Navy',
      children: [
        { label: 'Navy MR', link: '/navy-mr' },
        { label: 'Navy Technical SSR', link: '/navy-technical-ssr' },
        { label: 'Navy Technical AA', link: '/navy-technical-aa' },
        { label: 'Indian Coast Guard', link: '/indian-coast-guard' },
        { label: 'Indian Coast Guard Navik (GD)', link: '/indian-coast-guard-navik-gd' },
        { label: 'Indian Coast Guard Navik (DB)', link: '/indian-coast-guard-navik-db' }
      ]
    },
    {
      key: 'airforce',
      label: 'Indian Air Force',
      children: [
        { label: 'Group X & Y', link: '/indian-air-force-group-x-y' },
        { label: 'Group X', link: '/indian-air-force-group-x' },
        { label: 'Group Y', link: '/indian-air-force-group-y' }
      ]
    },
    {
      key: 'others',
      label: 'Other Uniformed Services',
      children: [
        { label: 'RPF - Sub Inspector', link: '/rpf-sub-inspector' },
        { label: 'RPF - Police Constable', link: '/rpf-police-constabler' },
        { label: 'BSF - Tradesman', link: '/bsf-tradesman' },
        { label: 'BSF - GD', link: '/bsf-gd' },
        { label: 'CRPF - Constable (GD)', link: '/crpf-constable-gd' },
        { label: 'CRPF - Tradesman', link: '/crpf-tradesman' },
        { label: 'SSC - MTS', link: '/ssc-mts' },
        { label: 'SSC - GD', link: '/ssc-gd' }
      ]
    }
  ];

  constructor(private router: Router) {}

  toggleMenu(event?: Event) {
    if (event) event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.dropdownStates = {};
  }

  toggleDropdown(key: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.dropdownStates[key] = !this.dropdownStates[key];
  }

  isDropdownOpen(key: string): boolean {
    return !!this.dropdownStates[key];
  }

  navigateAndClose() {
    this.closeMenu();
  }
}
