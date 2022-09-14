import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/modules/shared/shared.module';
import { MenLandingPagesModule } from 'src/modules/men-landing-pages/men-landing-pages.module';
import { WomenLandingPagesModule } from 'src/modules/women-landing-pages/women-landing-pages.module';
import { AuthInterceptor } from 'src/AuthInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    MenLandingPagesModule,
    WomenLandingPagesModule,
    ToastrModule.forRoot()
  ],
  providers : [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
