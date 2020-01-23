import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
  ERZIEHUNGSBERECHTIGTE = false;
  BETREUER = false;

  public Eltern = [
    {
      title: 'Home',
      url: 'parent/erziehungsberechtigte-dashboard',
      icon: 'home'
    },
    {
      title: 'Veranstaltung buchen',
      url: 'parent/veranstaltung-buchen',
      icon: 'school'
    },
    // {
    //   title: 'Veranstaltung einsehen',
    //   url: '/veranstaltung-einsehen',
    //   icon: 'stats'
    // },
    {
      title: 'Kinder',
      url: 'parent/kind-uebersicht',
      icon: 'people'
    },
    {
      title: 'Account',
      url: 'parent/account',
      icon: 'person'
    },
    {
      title: 'Abmelden',
      icon: 'log-out',
      url: '/logout',
    },
  ];
  public Betreuer = [
    {
      title: 'Schulauswahl',
      url: '/employee/schulauswahl',
      icon: 'briefcase'
    },
    {
      title: 'Alle Schichten',
      url: '/employee/alle-schichten',
      icon: 'clipboard'
    },
    {
      title: 'Abrechnung',
      url: '/employee/abrechnung',
      icon: 'card'
    },
    {
      title: 'Abmelden',
      url: '/logout',
      icon: 'log-out'
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthenticationService
  ) {
    this.initializeApp();
  }

  ngOnInit(): void {
    this.auth.getCurrentUser.subscribe((currentUser) => {
      if (currentUser === null) {
        this.isLoggedIn = false;
        this.ERZIEHUNGSBERECHTIGTE = false;
        this.BETREUER = false;
      } else {
        this.isLoggedIn = true;
        if (currentUser.role === 'ROLE_PARENT')
          this.ERZIEHUNGSBERECHTIGTE = true;
                  if (currentUser.role === 'ROLE_EMPLOYEE') 
          this.BETREUER = true;
      }
    });
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

}
