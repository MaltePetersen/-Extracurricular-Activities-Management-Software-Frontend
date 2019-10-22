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
      url: '/erziehungsberechtigte-dashboard',
      icon: 'home'
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
    },
    {
      title: 'Kinder',
      url: '/kind-hinzufuegen',
      icon: 'people'
    },
{
      title: 'Account',
      url: '/account',
      icon: 'person'
    },
  ];
  public Betreuer = [
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
    private statusBar: StatusBar,
    private auth: AuthenticationService
  ) {
    this.initializeApp();
  }

ngOnInit(): void {
    console.log('ngOnInit: ');
    this.auth.authenticationState.subscribe(a => {
      console.log('Inside ngOnInit: ');
      console.log(a);
      if (a === null) {
        this.isLoggedIn = false;
        this.ERZIEHUNGSBERECHTIGTE = false;
        this.BETREUER = false;
      } else if (a !== null) {
        if (a.isLoggedIn === true) {
          this.isLoggedIn = true;
          if (a.role === 'ERZIEHUNGSBERECHTIGTE') {
            this.ERZIEHUNGSBERECHTIGTE = true;
          } else if (a.role === 'BETREUER') {
            this.BETREUER = true;
          }
        } else if (a.isLoggedIn === false) {
          this.isLoggedIn = false;
          this.ERZIEHUNGSBERECHTIGTE = false;
          this.BETREUER = false;
        }
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
