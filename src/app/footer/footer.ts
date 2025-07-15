import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router, private route: ActivatedRoute, private location: Location) { }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          const fragment = this.route.snapshot.fragment;

          if (fragment === 'enquiry') {
            console.log('📌 Found #enquiry fragment');
            setTimeout(() => {
              this.scrollToForm();

              // Remove the fragment from the URL
              this.location.replaceState(this.router.url.split('#')[0]);
            }, 300);
          }
        }
      });
    }
  }
  scrollToForm() {
    throw new Error('Method not implemented.');
  }
}
