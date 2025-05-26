import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  exports: [
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class SharedMaterialModule {}
