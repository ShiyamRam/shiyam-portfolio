import { Overlay } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewPopupComponent } from 'src/app/shared/viewPopup/view-popup/view-popup.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor(private dialog: MatDialog, private overlay: Overlay) {}

  certificateArr = [
    {
      name: 'Frontend Developer (HTML,CSS)',
      platform: 'Udemy',
      certificateImageUrl: 'assets/images/certificates/css-beginners.jpg',
    },
    {
      name: 'Javascript for Beginers',
      platform: 'Udemy',
      certificateImageUrl: 'assets/images/certificates/javascriptUltimate.jpg',
    },
    {
      name: 'Javascript ',
      platform: 'Coursera',
      certificateImageUrl: 'assets/images/certificates/courseraJavascript.jpg',
    },
    {
      name: 'Bootstarp & Tailwind',
      platform: 'Udemy',
      certificateImageUrl: 'assets/images/certificates/bootstrap.jpg',
    },

    {
      name: 'Full-stack Developer',
      platform: 'Coursera',
      certificateImageUrl: 'assets/images/certificates/courseraFrontEndDev.jpg',
    },
    {
      name: 'Database Structure and Management with MYSQL',
      platform: 'Coursera',
      certificateImageUrl: 'assets/images/certificates/courserasql.jpg',
    },
    {
      name: 'Angular Complete Angular Guide ',
      platform: 'Udemy',
      certificateImageUrl: 'assets/images/certificates/css-beginners.jpg',
    },
    {
      name: 'Programming In JAVA ',
      platform: 'Udemy',
      certificateImageUrl: 'assets/images/certificates/nptelJava.jpg',
    },
  ];

  viewCertificate(course: any) {
    this.dialog.open(ViewPopupComponent, {
      width: '650px',
      panelClass: 'certificate-dialog-overlay',
      data: { certificate: course },
      scrollStrategy: this.overlay.scrollStrategies.block(),
      autoFocus: false,
    });
  }
}
