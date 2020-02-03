import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { EmployeeControllerService } from 'src/app/api/services';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-anwesenheit-popover',
  templateUrl: './anwesenheit-popover.component.html',
  styleUrls: ['./anwesenheit-popover.component.scss'],
})
export class AnwesenheitPopoverComponent implements OnInit {

  private id:number;
  private isPresent:boolean;
  private homePage:any;
  
  constructor(private navParams: NavParams, private employeeController:EmployeeControllerService, private viewController:PopoverController, private alerService:AlertService) {
  }

  ngOnInit() {
    this.id = this.navParams.get('child_id');
    this.homePage = this.navParams.get('homeRef');
    this.isPresent = this.navParams.get('isPresent');
  }

  reset(){
    let update = {};
    if(this.isPresent){
      update = {
        "arrivalTime" : null,
      };
    } else {
      update = {
        "leaveTime" : null
      };
    }
    
    const patch = {
      "update" : update,
      "id" : this.id
    };

    this.employeeController.updateAttendanceUsingPATCH(patch).toPromise().then((response)=>{
      this.homePage.updatePupil(response, this.id);
      this.alerService.presentToastSuccess("Status zurückgesetzt");
    }).catch((error)=>{
      console.log(error);
      this.alerService.presentToastFailure("Status konnte nicht zurückgesetzt werden");
    });
    this.viewController.dismiss();
  }
}
