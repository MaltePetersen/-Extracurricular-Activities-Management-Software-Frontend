import { Component, OnInit } from '@angular/core';
import { UserControllerService } from 'src/app/api/services';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {

  username:string;
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
      this.username = user.username;
      let splitName = user.fullname.split(' ');
      this.firstname = splitName[0];
      this.lastname = splitName[1];
    }).catch((error)=>{
      console.log(error);
    });
  }

  saveChanges(){
    const update = {
      "username":this.username,
      "fullname":this.firstname + "" + this.lastname
    }
    const params = {
      "update":update,
      "username":this.username
    }

    this.alertService.presentToastSuccess("Änderungen erfolgreich gespeichert");
  }

  abort(){
    this.navCtrl.back();
  }
}
