import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

//CanActivate = Interface that a class can implement to be a guard deciding if a route can be activated. If all guards return true, navigation will continue. If any guard returns false, navigation will be cancelled. If any guard returns a UrlTree, current navigation will be cancelled and a new navigation will be kicked off to the UrlTree returned from the guard.
//The Angular CanActivate guard decides, if a route can be activated ( or component gets rendered). We use this guard, when we want to check on some condition, before activating the component or showing it to the user. This allows us to cancel the navigation.
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthenticationService, private alertCtrl: AlertController) {}

  //The method gets the instance of the ActivatedRouteSnapshot. We can use this to get access to the route parameter, query parameter etc.
  //The guard must return true/false or a UrlTree .
  //ActivatedRouteSnapshot Contains the information about a route associated with a component loaded in an outlet at a particular moment in time. ActivatedRouteSnapshot can also be used to traverse the router state tree.
  canActivate(route: ActivatedRouteSnapshot) {
    //grap the role config from the routing module for a later check if the user is allowed to navigate.
    const expectedRole = route.data.role;
    console.log('expected: ', expectedRole);

    // grap the returned user and map it. If the role of the returned user is the same with the one that is expected for the url to navigate to, then acces will be granted. If not there is a warning and a redirect to login page.
    let  user = JSON.parse(localStorage.getItem('isLoggedin')) 
          if (user && user.role && expectedRole === user.role) {
            return true;
          } else {
            this.showAlert();
            //parseURL will parse a string in your URLTree which replaces the whole navigation state of our app and bring us back to the login page.
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
