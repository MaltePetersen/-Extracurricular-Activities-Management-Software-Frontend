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
      title: 'Kind hinzufügen',
      url: '/kind-hinzufuegen',
      icon: 'person-add'
    },
    {
      title: 'Veranstaltung buchen',
      url: '/veranstaltung-buchen',
      icon: 'school'
    },
    {
      title: 'Veranstaltung einsehen',
      url: '/veranstaltung-einsehen',
      icon: 'stats'
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
