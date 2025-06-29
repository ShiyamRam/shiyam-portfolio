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
      gpa: '8.74 CGPA',
      description:
        'Gained strong foundations in software engineering and web development.',
    },
    {
      title: 'HSLC (Biology)',
      institution:
        'New Prince Matriculation Higher Secondary School (Adambakkam, Chennai)',
      gpa: '70%',
      description:
        'Gained foundational knowledge in biology, physics, and chemistry. Took part in inter-school science exhibitions and seminars. Developed early interest in technology through school-level IT workshops.',
    },
    {
      title: 'SSLC (10TH)',
      institution:
        'New Prince Matriculation Higher Secondary School (Adambakkam, Chennai)',
      gpa: '90.5%',
      description:
        'Excelled in mathematics and science. Consistently maintained top grades and took active roles in school-level academic clubs and quizzes.  ',
    },
  ];

  experienceList = [
    {
      company: 'Rumango Software',
      role: 'Software Developer',
      duration: 'Present',
      description:
        'Solving complex frontend challenges using Angular by designing scalable, maintainable, and performant UI architectures. Focused on delivering seamless user experiences while integrating APIs and handling data-driven workflows. Collaborating cross-functionally to diagnose and resolve performance bottlenecks, usability issues, and production-level bugs with a problem-solving mindset.',
    },
    {
      company: 'Rumango Software',
      role: 'Associate Software Developer',
      duration: 'June 2023 – May 2025',
      description:
        'Contributed to various modules of enterprise applications using Angular and Node.js. Participated in requirement analysis, bug fixing, and feature enhancements. Gained hands-on experience in version control (Git), agile methodologies, and deployment processes.',
    },
  ];

  // In your component.ts
  hoveredSkill: string | null = null;

  getChatText(): string[] {
    return "Let's have a chat".split('');
  }
}
