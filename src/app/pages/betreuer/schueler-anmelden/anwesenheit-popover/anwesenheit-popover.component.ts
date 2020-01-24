import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { EmployeeControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-anwesenheit-popover',
  templateUrl: './anwesenheit-popover.component.html',
  styleUrls: ['./anwesenheit-popover.component.scss'],
})
export class AnwesenheitPopoverComponent implements OnInit {

  private id:number;
  private homePage:any;
  
  constructor(private navParams: NavParams, private employeeController:EmployeeControllerService, private viewController:PopoverController) {
  }

  ngOnInit() {
    this.id = this.navParams.get('child_id');
    this.homePage = this.navParams.get('homeRef');
  }

  zuruecksetzen(){
    const update = {
      "leaveTime" : null,
    };
    const patch = {
      "update" : update,
      "id" : this.id
    };
    this.employeeController.updateAttendanceUsingPATCH(patch).toPromise().then((response)=>{
      this.homePage.updatePupil(response, this.id);
    }).catch((error)=>{
      console.log(error);
    });
    this.viewController.dismiss();
  }

}
