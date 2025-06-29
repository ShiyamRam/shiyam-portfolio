import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { SuccessPopupComponent } from 'src/app/shared/success-popup/success-popup.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm!: FormGroup;
  @Input() showBackground: boolean = true;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      mobile: [''],
      message: ['', Validators.required],
    });
  }
  sendEmail(): void {
    if (this.contactForm.invalid) return;

    const { firstName, lastName, email, mobile, message } =
      this.contactForm.value;

    const templateParams = {
      name: `${firstName} ${lastName}`,
      email: email,
      message: `Phone: ${mobile}\n\nHi Shiyam, this is a message from ${firstName}.\n\n${message}`,
      title: 'New Contact from Portfolio Site',
    };

    emailjs
      .send(
        'service_a2lcpv2',
        'template_s5mfazm',
        templateParams,
        'pxfi1ojA8qEvhsYMZ'
      )
      .then((response: EmailJSResponseStatus) => {
        if (response) {
          this.dialog.open(SuccessPopupComponent, {
            data: 'Email Sent Sucessfully',
          });
        }
        this.contactForm.reset();
      });
  }

  successPopup() {
    this.dialog.open(SuccessPopupComponent, {
      data: 'Email Sent Sucessfully',
      width: '450px',
      panelClass: 'custom-dialog-container',
    });
  }
}
