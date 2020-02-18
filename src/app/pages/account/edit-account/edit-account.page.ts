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
      console.table(user);
      this.username = user.username;
      this.email = user.email;
      let splitName = user.fullname.split(' ');
      this.firstname = splitName[0];
      this.lastname = splitName[1];
    }).catch((error)=>{
      console.log(error);
    });
  }

  saveChanges(){
    const userDTO = {
      "username":this.username,
      "email":this.email,
      "fullname":this.firstname + " " + this.lastname
    } as UserDTO
    const params = {
      "userDTO":userDTO,
    }
    this.userController.patchUserByAuthUsingPATCH(params).toPromise().then((response)=>{
      console.log(response);
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
