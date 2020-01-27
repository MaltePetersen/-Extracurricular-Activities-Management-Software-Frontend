import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertController } from '@ionic/angular';
import { concat } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthenticationService, private alertCtrl: AlertController) {}


  canActivate(route: ActivatedRouteSnapshot) {
    const expectedRole = route.data.role;
    let  user = this.auth.currentUserValue;
    if(user === null && expectedRole === 'NULL'){
      return	true;
    }
   else if(user === null){
      return this.router.parseUrl('/login');
    }      
 else if (user.role && expectedRole === user.role) {
  return true;
        }
else if(user.role === 'ROLE_EMPLOYEE'){
  return this.router.parseUrl('/employee/schulauswahl');
}
else if(user.role === 'ROLE_PARENT'){
  return this.router.parseUrl('/parent/erziehungsberechtigte-dashboard');
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
