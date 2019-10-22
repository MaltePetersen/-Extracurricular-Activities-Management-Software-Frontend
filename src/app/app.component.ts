import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Schulauswahl',
      url: '/schulauswahl',
      icon: 'briefcase'
    },
    {
      title: 'Anwesenheitsliste',
      url: '/schueler-anmelden',
      icon: 'person'
    },
    {
      title: 'Meine Schichten',
      url: '/meine-schichten',
      icon: 'clipboard'
    },
    {
      title: 'Alle Schichten',
      url: '/alle-schichten',
      icon: 'clipboard'
    },
    {
      title: 'Abrechnung',
      url: '/abrechnung',
      icon: 'card'
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
