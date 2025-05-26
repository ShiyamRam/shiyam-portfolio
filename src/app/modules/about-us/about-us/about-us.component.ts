import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  skills = [
    { name: 'Javascript', percentage: 92, icon: 'javascript' },
    { name: 'HTML', percentage: 80, icon: 'html' },
    { name: 'GitHub', percentage: 85, icon: 'github' },
    { name: 'NodeJS', percentage: 99, icon: 'node' },
    { name: 'Angular', percentage: 89, icon: 'angular' },
    { name: 'MySql', percentage: 93, icon: 'sql' },
    { name: 'MySql', percentage: 93, icon: 'sql' },
    { name: 'MySql', percentage: 93, icon: 'sql' },
    { name: 'MySql', percentage: 93, icon: 'sql' },
    { name: 'MySql', percentage: 93, icon: 'sql' },
  ];

  // In your component.ts
  hoveredSkill: string | null = null;

  getChatText(): string[] {
    return "Let's have a chat".split('');
  }
}
