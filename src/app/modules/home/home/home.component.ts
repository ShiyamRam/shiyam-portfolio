import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('skillContainer') skillContainer!: ElementRef;
  title = 'portfolio';
  buttonText = 'Download CV';
  isDownloading = false;
  hoveredTech = '';
  circleSegments: string[] = [];

  skills = [
    {
      name: 'HTML5 & CSS3',
      icon: 'html.svg',
      description:
        'Modern web markup and styling with responsive design principles and CSS animations.',
    },
    {
      name: 'Bootstrap',
      icon: 'bootstarp.svg',
      description:
        'Implemented responsive image captions and overlays using Bootstrap’s.Creating websites that adapt to different screen sizes and devices. ',
    },
    {
      name: 'JavaScript/TypeScript',
      icon: 'javascript.svg',
      description:
        'Client-side scripting and application development with type safety.',
    },
    {
      name: 'Angular Framework',
      icon: 'angular.svg',
      description:
        'Building scalable single-page applications with component-based architecture.',
    },
    {
      name: 'Node.js & Express',
      icon: 'node.svg',
      description:
        'Server-side JavaScript runtime and web application framework for backend services.',
    },
    {
      name: 'MySQL & MongoDB',
      icon: 'sql.svg',
      description:
        'Relational and NoSQL database management systems for different data needs.',
    },
    {
      name: 'RESTful APIs',
      icon: 'angular.svg',
      description:
        'Designing and consuming RESTful web services for application integration.',
    },
    {
      name: 'Git Version Control',
      icon: 'github.svg',
      description:
        'Distributed version control system for tracking changes in source code.',
    },
    {
      name: 'Wordpress',
      icon: 'wordpress.svg',
      description:
        'Developed custom WordPress shortcodes to render styled captions using Bootstrap classes for images and carousels.',
    },
  ];

  techStack = [
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'Worpress', icon: 'wordpress.svg' },
    { name: 'MySql', icon: 'sql.svg' },
    { name: 'HTML5', icon: 'html.svg' },
    { name: 'CSS3', icon: 'css.svg' },
    { name: 'Bootstrap', icon: 'bootstarp.svg' },
    { name: 'Node.js', icon: 'node.svg' },
    { name: 'Github', icon: 'github.svg' },
  ];

  @HostListener('window:scroll', [])
  autoScroll(): void {
    if (!this.skillContainer) return;

    const el = this.skillContainer.nativeElement;
    const scrollPercentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);

    el.scrollLeft = scrollPercentage * (el.scrollWidth - el.clientWidth);
  }

  ngOnInit() {
    this.createCircleSegments();
  }

  createCircleSegments() {
    const radius = 160;
    const center = 200;
    const numTechs = this.techStack.length;
    const gapAngle = 30;
    for (let i = 0; i < numTechs; i++) {
      const startAngle =
        (i * (360 / numTechs) + gapAngle / 2) * (Math.PI / 180);
      const endAngle =
        ((i + 1) * (360 / numTechs) - gapAngle / 2) * (Math.PI / 180);
      const x1 = center + radius * Math.cos(startAngle);
      const y1 = center + radius * Math.sin(startAngle);
      const x2 = center + radius * Math.cos(endAngle);
      const y2 = center + radius * Math.sin(endAngle);
      this.circleSegments.push(`
        M ${x1} ${y1}
        A ${radius} ${radius} 0 0 1 ${x2} ${y2}
      `);
    }
  }
  // Download CV Method
  async downloadCv() {
    if (this.isDownloading) return;
    this.isDownloading = true;
    this.buttonText = 'Downloading…';

    try {
      const res = await fetch('assets/images/my_cv.pdf');
      if (!res.ok) throw new Error('Download failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'My-CV.pdf';
      a.click();
      URL.revokeObjectURL(url);
      this.buttonText = 'Completed!';
      setTimeout(() => {
        this.isDownloading = false;
        this.buttonText = 'Download';
      }, 1500);
    } catch {
      this.isDownloading = false;
      this.buttonText = 'Download';
      alert('Download failed, please try again.');
    }
  }
}
