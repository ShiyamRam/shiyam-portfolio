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
    { name: 'Bootstrap', percentage: 93, icon: 'bootstarp' },
    { name: 'Wordpress', percentage: 93, icon: 'wordpress' },
  ];

  educationList = [
    {
      title: 'B.E Computer Science',
      institution: "St-Joseph's College Of Engineering (OMR, Chennai)",
      gpa: '8.74/10 GPA',
      description:
        'Gained strong foundations in software engineering and web development.',
    },
    {
      title: 'AS – Science & Information',
      institution: 'SuperKing College (2001–2005)',
      gpa: '4.75/5 GPA',
      description: '',
    },
  ];

  experienceList = [
    {
      company: 'Rumango Software',
      role: 'Software Developer',
      duration: 'Present',
      description:
        'Developing full-stack Angular applications with a focus on performance and UX.',
    },
    {
      company: 'Rumango Software',
      role: 'Associate Software Developer',
      duration: 'June 2023 – May 2025',
      description: '',
    },
  ];

  // In your component.ts
  hoveredSkill: string | null = null;

  getChatText(): string[] {
    return "Let's have a chat".split('');
  }
}
