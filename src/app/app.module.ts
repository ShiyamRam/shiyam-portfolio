import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared/shared-material.module';
import { CoreComponentsModule } from './shared/core-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './modules/home/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us/about-us.component';
import { PortfolioComponent } from './modules/portfolio/portfolio/portfolio.component';
import { PipesModule } from './pipes/pipe.module';
import { ServiceComponent } from './modules/service/service/service.component';
import { ContactComponent } from './modules/contact/contact/contact.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { BlogComponent } from './modules/blog/blog/blog.component';
import { ViewPopupComponent } from './shared/viewPopup/view-popup/view-popup.component';
import { SkeletonLoaderComponent } from './shared/skeleton-loader/skeleton-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ServiceComponent,
    PortfolioComponent,
    ContactComponent,
    BlogComponent,
    LoaderComponent,
    ViewPopupComponent,
    SkeletonLoaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedMaterialModule,
    CoreComponentsModule,
    SharedModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
