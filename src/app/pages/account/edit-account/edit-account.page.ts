import { Component, OnInit } from '@angular/core';
import { UserControllerService } from 'src/app/api/services';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { UserDTO } from 'src/app/api/models';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {

  username:string;
  email:string;
  firstname:string;
  lastname:string;

  constructor(private alertService:AlertService ,private navCtrl:NavController ,private userController:UserControllerService) {
  }

  ngOnInit() {
    this.getAccount();
  }

  getAccount(){
    const params = {};
    this.userController.getUserByAuthUsingGET(params).toPromise().then((user)=>{
      this.mapUserToAttributes(user);
    }).catch((error)=>{
      console.log(error);
    });
  }

  mapUserToAttributes(user:UserDTO){
    this.username = user.username;
    this.email = user.email;
    let splitName = user.fullname.split(' ');
    if(splitName.length > 2){
      this.firstname = "";
      for(let i = 0; i < splitName.length - 1; i++){
        if(i != splitName.length - 2){
          this.firstname = this.firstname + splitName[i] + " ";
        } else {
          this.firstname = this.firstname + splitName[i];
        }
      }
      this.lastname = splitName[splitName.length - 1];
    } else {
      this.firstname = splitName[0];
      this.lastname = splitName[1];
    }
  }

  saveChanges(){
    const userDTO = {
      "username":this.username,
      "email":this.email,
      "fullname":this.firstname + " " + this.lastname
    }
    const params = {
      "userDTO":userDTO,
    }
    this.userController.patchUserByAuthUsingPATCH(params).toPromise().then((response)=>{
      this.mapUserToAttributes(response);
      this.alertService.presentToastSuccess("Änderungen erfolgreich gespeichert");
    }).catch((error)=>{
      console.log(error);
      this.alertService.presentToastFailure("Speichern fehlgeschlagen");
    });
    
  }

  abort(){
    this.navCtrl.back();
  }
}
