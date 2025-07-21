import { AfterViewInit, Component, Inject,  PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Location, isPlatformBrowser } from '@angular/common';
declare const translateLang: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected title = 'Police-training';
   changeLanguage(lang: string) {
    translateLang(lang);
  }
  constructor(
    private router: Router,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.location.path(true);
        const [path, fragment] = url.split('#');

        if (fragment) {
          setTimeout(() => {
            const el = document.getElementById(fragment);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }

            // Remove fragment from URL
            this.location.replaceState(path);
          }, 300);
        }
      }
    });
  }
}
