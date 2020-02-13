import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthenticationService } from "./services/authentication.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  ERZIEHUNGSBERECHTIGTE = false;
  BETREUER = false;
  fullname:string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthenticationService
  ) {
    this.initializeApp();
  }

  ngOnInit(): void {
    this.changeSiteMenu();
  }

  loadUser(){
    this.auth.currentUser.subscribe(a=>this.fullname = a.name);
  }

  logout() {
    this.auth.logout();
  }

  deleteAccount(){
    console.log("Account löschen");
  }

  changeSiteMenu() {
    this.auth.currentUser.subscribe(currentUser => {
      if (currentUser === null) {
        this.isLoggedIn = false;
        this.ERZIEHUNGSBERECHTIGTE = false;
        this.BETREUER = false;
      } else {
        this.isLoggedIn = true;
        if (currentUser.role === "ROLE_PARENT") {
          this.ERZIEHUNGSBERECHTIGTE = true;
          this.BETREUER = false;
        }
        if (currentUser.role === "ROLE_EMPLOYEE") {
          this.ERZIEHUNGSBERECHTIGTE = false;
          this.BETREUER = true;
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
