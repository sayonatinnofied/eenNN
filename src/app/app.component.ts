import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private nn: Object = {
    textLogo: 'assets/img/eenNN-Text.png'
  }
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Favourites',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Work@NN',
      url: '/work',
      icon: 'briefcase'
    },
    {
      title: 'Health@NN',
      url: '/health',
      icon: 'medical'
    },
    {
      title: 'Fun@NN',
      url: '/fun',
      icon: 'happy'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
