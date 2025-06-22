import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('smoothDissolve', [
      transition(':enter', [
        style({ opacity: 0, filter: 'blur(12px)' }),
        animate('500ms ease-out', style({ opacity: 1, filter: 'blur(0)' })),
      ]),
      transition(':leave', [
        animate(
          '1500ms ease-in-out',
          keyframes([
            style({ opacity: 1, filter: 'blur(0)', offset: 0 }),
            style({ opacity: 0.9, filter: 'blur(2px)', offset: 0.3 }),
            style({ opacity: 0.6, filter: 'blur(5px)', offset: 0.6 }),
            style({ opacity: 0.2, filter: 'blur(12px)', offset: 0.85 }),
            style({
              opacity: 0,
              filter: 'blur(20px)',
              visibility: 'hidden',
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'portfolio';
  currentRoute: string = '';
  isLoading = false;
  showOutlet = false;
  mobileMenuOpen = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
        this.showOutlet = false;
        this.cdr.detectChanges();
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.isLoading = false;
          this.showOutlet = true;
          this.cdr.detectChanges();
        }, 800);
      }

      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  // Footer scroll top
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // CopyEmail
  copyEmail(tooltip: MatTooltip) {
    const email = 'shiyamram18@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      tooltip.show();
      setTimeout(() => tooltip.hide(), 2000);
    });
  }
}
