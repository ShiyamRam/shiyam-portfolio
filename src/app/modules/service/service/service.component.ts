import { Component } from '@angular/core';
import { DesignItem } from './service.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  designItems: DesignItem[] = [
    {
      icon: 'fa-desktop',
      title: 'Custom Angular Application Development',
      content:
        'End-to-end Angular app development,Modular architecture with feature modules,Clean folder structure and lazy loading',
    },
    {
      icon: 'fa-cube',
      title: 'Reactive Forms & Dynamic Form Handling',
      content:
        'Nested FormGroup and FormArray structures,Dynamic form generation from JSON,Conditional fields and custom validation,Real-time form validation and error handling',
    },
    {
      icon: 'fa-cube',
      title: 'RESTful API Integration',
      content:
        'CRUD operations with APIs,Secure token-based authentication,Centralized error handling via interceptors,Environment-based API configuration',
    },
    {
      icon: 'fa-cube',
      title: 'State Management (NgRx / RxJS)',
      content:
        'NgRx Store, Effects, and Entity,Local component state with RxJS BehaviorSubjects,Optimized state slices and selectors',
    },
    {
      icon: 'fa-cube',
      title: 'Reusable UI Components & Libraries',
      content:
        'Angular Material / Bootstrap / Tailwind UI,Custom component libraries and shared modules,',
    },
    {
      icon: 'fa-cube',
      title: 'Routing & Navigation',
      content:
        'Lazy-loaded modules with guards,Nested routing for tabbed/stepper views',
    },
    {
      icon: 'fa-cube',
      title: 'CI/CD & Deployment',
      content:
        'Angular build optimization (ng build --prod),Deployment to Firebase, Vercel, AWS, etc,Integration with GitHub Actions, GitLab CI',
    },
    {
      icon: 'fa-cube',
      title: 'Consulting & Code Review',
      content:
        'Architecture & folder structure review,Best practices for large-scale Angular apps',
    },
  ];
}
