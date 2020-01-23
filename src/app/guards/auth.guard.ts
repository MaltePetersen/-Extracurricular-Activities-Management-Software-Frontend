import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthenticationService, private alertCtrl: AlertController) {}


  canActivate(route: ActivatedRouteSnapshot) {
    const expectedRole = route.data.role;

    let  user = JSON.parse(localStorage.getItem('isLoggedIn')) 
          if (user && user.role && expectedRole === user.role) {
            return true;
          } else {
            this.showAlert();
            return this.router.parseUrl('/login');
          }
        }
    
    
  

  async showAlert() {
    let alert = await this.alertCtrl.create({
      header: 'Unauthorized',
      message: 'Du darfst hier nicht rein!',
      buttons: ['OK']
    });
    alert.present();
  }
  
}
