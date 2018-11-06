import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './shared/_gaurds/auth.guard';
import { Auth2Interceptor } from './shared/_helpers/auth2.interceptor';
import { ErrorInterceptor } from './shared/_helpers/error.interceptor';
import { AuthenticationService } from './shared/_services/authentication.service';
import { EENNService } from './shared/_services/eenn.service';
import { ActionSheetService } from './shared/_services/actionsheet.service';

import { AppGlobals } from './app.globals';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AppGlobals,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthGuard,
    AuthenticationService,
    EENNService,
    ActionSheetService,
    { provide: HTTP_INTERCEPTORS, useClass: Auth2Interceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
