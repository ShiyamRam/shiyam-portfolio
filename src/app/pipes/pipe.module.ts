import { NgModule } from '@angular/core';
import { FormatBreadcrumbPipe } from './formatRoute.pipe';
import { SafeUrlPipe } from './safeUrl.pipe';

@NgModule({
  declarations: [FormatBreadcrumbPipe, SafeUrlPipe],
  imports: [],
  exports: [FormatBreadcrumbPipe, SafeUrlPipe],
})
export class PipesModule {}
