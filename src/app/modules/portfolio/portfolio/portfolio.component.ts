import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  selectedTab = 'personal';

  personalPorjectArr = [
    {
      title: 'Netflix Clone',
      description:
        'Bubble design & development featuring a two-way marketplace for models and model employers/brands.',
      images: [
        'assets/images/projects/netflixClone.png',
        'assets/images/projects/bannerNetflix.png',
        'assets/images/projects/signInNetflix.png',
        'assets/images/projects/homenetflix.png',
      ],
      link: '/project/only-models',
      activeIndex: 0,
    },
    {
      title: 'Hotstar Clone',
      description:
        'Bubble design & development featuring a two-way marketplace for models and model employers/brands.',
      images: [
        'assets/images/projects/bannerHotstar.png',
        'assets/images/projects/hotstarclone.png',
        'assets/images/projects/hotstarsubscription.png',
      ],
      link: '/project/only-models',
      activeIndex: 0,
    },
    {
      title: 'Employee Management System',
      description:
        'Lightweight UI-based project to learn core Java specifically CRUD operation, MySQL queries, and implement basic employee data management.',
      images: [
        'assets/images/projects/empMgnt1.png',
        'assets/images/projects/empMgnt2.png',
        'assets/images/projects/empMgnt3.png',
        'assets/images/projects/empMgnt4.png',
        'assets/images/projects/empMgnt5.png',
      ],
      link: '/project/only-models',
      activeIndex: 0,
    },
  ];

  professionalPorjectArr = [
    {
      title: 'Customer Onboadring',
      description:
        'Streamlined customer onboarding with dynamic forms, real-time validation, and seamless user experience.',
      images: [
        'assets/images/projects/onboarding1.png',
        'assets/images/projects/onboarding2.png',
        'assets/images/projects/onboarding3.png',
        'assets/images/projects/onboarding4.png',
      ],
      link: '/project/only-models',
      activeIndex: 0,
    },
    {
      title: 'KYC Verification',
      description:
        'Automated KYC onboarding with secure document capture, identity verification, and real-time compliance checks.',
      images: [
        'assets/images/projects/kyc1.png',
        'assets/images/projects/kyc2.png',
        'assets/images/projects/kyc3.png',
        'assets/images/projects/kyc4.png',
      ],
      link: '/project/only-models',
      activeIndex: 0,
    },
    {
      title: 'Customer Portal Website',
      description:
        'All-in-one banking portal for loan applications,create accounts,card requests,tracking status and corporate net banking access..',
      images: [
        'assets/images/projects/website1.png',
        'assets/images/projects/website2.png',
        'assets/images/projects/website3.png',
        'assets/images/projects/website4.png',
        'assets/images/projects/website5.png',
        'assets/images/projects/website6.png',
      ],
      link: '/project/only-models',
      activeIndex: 0,
    },
    {
      title: 'Internet Banking',
      description:
        'Smart banking made easy—transfer funds, pay bills, manage cards, deposits, and more from one secure portal.',
      images: [
        'assets/images/projects/netbank1.png',
        'assets/images/projects/netbank2.png',
        'assets/images/projects/netbank3.png',
        'assets/images/projects/netbank4.png',
        'assets/images/projects/netbank5.png',
        'assets/images/projects/netbank6.png',
        'assets/images/projects/netbank7.png',
        'assets/images/projects/netbank8.png',
      ],
      link: '/project/only-models',
      activeIndex: 0,
    },
    {
      title: 'Maintenance',
      description:
        'Easily manage users,roles,branches,entity,products, and custom workflows—all from a single admin panel.',
      images: [
        'assets/images/projects/maint1.png',
        'assets/images/projects/maint2.png',
        'assets/images/projects/maint3.png',
        'assets/images/projects/maint4.png',
        'assets/images/projects/maint5.png',
        'assets/images/projects/maint6.png',
        'assets/images/projects/maint7.png',
        'assets/images/projects/maint8.png',
      ],
      link: '/project/only-models',
      activeIndex: 0,
    },
    {
      title: 'Customer 360°Dashboard',
      description:
        'A unified 360° dashboard offering full visibility into customer accounts,loans,personal info,and actionable insights via interactive visuals.',
      images: [
        'assets/images/projects/360dashboard1.png',
        'assets/images/projects/360dashboard2.png',
        'assets/images/projects/360dashboard3.png',
        'assets/images/projects/360dashboard4.png',
        'assets/images/projects/360dashboard5.png',
      ],
      link: '/project/only-models',
      activeIndex: 0,
    },
    {
      title: 'Car Dealer Loan Application',
      description:
        'Empowering car dealers with a seamless interface to apply for loans,upload documents,and monitor application status in real time.',
      images: [
        'assets/images/projects/cardealer1.png',
        'assets/images/projects/cardealer2.png',
        'assets/images/projects/cardealer3.png',
        'assets/images/projects/cardealer4.png',
        'assets/images/projects/cardealer5.png',
        'assets/images/projects/cardealer6.png',
        'assets/images/projects/cardealer7.png',
        'assets/images/projects/cardealer8.png',
      ],
      link: '/project/only-models',
      activeIndex: 0,
    },
  ];

  onScroll(event: any, project: any): void {
    const scrollLeft = event.target.scrollLeft;
    const containerWidth = event.target.offsetWidth;
    const imageWidth = 450 + 16; // image width + gap
    const scrollCenter = scrollLeft + containerWidth / 2;

    const newIndex = Math.floor(scrollCenter / imageWidth);
    project.activeIndex = Math.min(newIndex, project.images.length - 1);
  }
}
