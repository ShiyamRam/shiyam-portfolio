import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() width = '100%';
  @Input() height = '100%';
  @Input() radius = '1rem';
  isLoaded = false;

  onImageLoad() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 800);
  }
}
