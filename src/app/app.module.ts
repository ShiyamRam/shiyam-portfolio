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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    PortfolioComponent,
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
