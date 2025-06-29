import { trigger, transition, style, animate } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-popup',
  templateUrl: './view-popup.component.html',
  styleUrls: ['./view-popup.component.scss'],
})
export class ViewPopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ViewPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}
  closeDialog(): void {
    this.dialogRef.close();
  }

  downloadCertificate(): void {
    const url = this.data.certificate.certificateImageUrl;
    const name = this.data.certificate.name.replace(/\s+/g, '-');

    const link = document.createElement('a');
    link.href = url;
    link.download = `${name}${url.endsWith('.pdf') ? '.pdf' : '.jpg'}`;
    link.target = '_blank';
    link.click();
  }
}
