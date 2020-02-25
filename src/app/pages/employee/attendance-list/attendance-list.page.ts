import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';
import { NgModel } from '@angular/forms';
import { AlertController, PopoverController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AttendancePopoverComponent } from './attendance-popover/attendance-popover.component';
import { EmployeeControllerService } from 'src/app/api/services';
import { AfterSchoolCare, AfterSchoolCareDTO, SchoolDTO, AttendanceDTO, SimpleUserDTO } from 'src/app/api/models';
import moment from 'moment';
import { PupilModel } from 'src/app/models/pupilModel';
import { AlertService } from 'src/app/services/alert.service';
import { EmployeeProviderService } from 'src/app/services/employee-provider.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.page.html',
  styleUrls: ['./attendance-list.page.scss'],
})
export class AttendanceListPage implements OnInit {


  classes:string[] = [];
  pupils:PupilModel[] = [];
  filteredPupils:PupilModel[] =[];
  listId:number;
  selectedClass:string;
  search:string;
  care:AfterSchoolCareDTO;
  endOfCare:string = '';
  isLockable:boolean = false;
  
  constructor(private alertController:AlertController, public router:Router, public popoverController:PopoverController, private employeeController:EmployeeControllerService, private alertService: AlertService, private employeeProvider:EmployeeProviderService) { 
  }

  ngOnInit() {
    this.employeeProvider.careId$.subscribe((careId)=>{
      this.listId = careId;
      if(careId){
        this.loadPupils();
      }
    });
  }

  loadPupils(){
    this.pupils = [];
    this.getAfterSchoolCare(this.listId).then((response) =>{
      this.endOfCare = response.endTime;
      response.attendances.forEach((attendance)=>{
        this.getSchool(attendance.child.childSchool).then((school)=>{
          this.pupils.push(this.mapToPupil(attendance, school.name));
        }).catch((error)=>{
          this.pupils.push(this.mapToPupil(attendance, 'Keine Schule gefunden'));
          console.log(error);
        }).finally(()=> {
          this.updateFilters();
        });
      });
    }).catch((error)=>{
      console.log(error);
    });
  }

  updateFilters(){
    this.filteredPupils = this.pupils;
    if(this.checkLeft()){
      this.isLockable = true;
    } else {
      this.isLockable = false;
    }
    this.getClasses();
    this.filteredPupils.sort((a, b)=> a.name.localeCompare(b.name));
  }

  mapToPupil(attendance:AttendanceDTO, schoolName:string):PupilModel{
    return new PupilModel(attendance.id, attendance.child.fullname, schoolName, attendance.child.schoolClass, (attendance.note == null) ? '' : attendance.note, attendance.status, attendance.latestArrivalTime, attendance.predefinedLeaveTime, attendance.allowedToLeaveAfterFinishedHomework);
  }

  getAfterSchoolCare(id:number) : Promise<AfterSchoolCareDTO>{
    return this.employeeController.getAfterSchoolCareUsingGET(id).toPromise();
  }

  getSchool(id:number):Promise<SchoolDTO>{
    return this.employeeController.getSchoolUsingGET(id).toPromise();
  }

  searchChanged(){
      this.filterPupils();
  }

  selectedClassChanged(){
      this.filterPupils();
  }

  checkLeft(){
    let allLeft = true;
    this.pupils.forEach((pupil)=>{
      if(pupil.status != 4){
        allLeft = false
      }
    });
    return allLeft;
  }

  filterPupils(){
    this.filteredPupils = this.pupils;
    if(this.search != null && this.search != ""){
      this.filteredPupils = this.filteredPupils.filter(pupil => pupil.name.toUpperCase().includes(this.search.toUpperCase()));
    }
    if(this.selectedClass != null && this.selectedClass != "Alle"){
      this.filteredPupils = this.filteredPupils.filter(pupil => pupil.schoolClass == this.selectedClass);
    }
  }

  updatePresent(id:number){
    let currentDateTime = moment().format('YYYY-MM-DD[T]HH:mm:ss');
    const update = {
      "arrivalTime" : currentDateTime,
    };
    const patch = {
      "update" : update,
      "id" : id
    };
    this.employeeController.updateAttendanceUsingPATCH(patch).toPromise().then(response => {
      this.updatePupil(response, id);
      this.alertService.presentToastSuccess("Status erfolgreich geändert");
    }).catch((error)=>{
      console.log(error);
      this.alertService.presentToastFailure("Änderung fehlgeschlagen");
    });
  }

  updateLeft(id:number){
    let currentDateTime = moment().format('YYYY-MM-DD[T]HH:mm:ss');
    const update = {
      "leaveTime" : currentDateTime,
    };
    const patch = {
      "update" : update,
      "id" : id
    };
    this.employeeController.updateAttendanceUsingPATCH(patch).toPromise().then(response => {
      this.updatePupil(response, id);
      this.alertService.presentToastSuccess("Status erfolgreich geändert");
    }).catch((error)=>{
      console.log(error);
      this.alertService.presentToastFailure("Änderung fehlgeschlagen");
    });
  }

  updatePupil(care, id){
    care.attendances.forEach((attendance)=>{
      if(attendance.id == id){
        let index = this.pupils.findIndex((pupil)=>pupil.id == id);
        let pupil = this.pupils[index];
        pupil.status = attendance.status;
        this.updateFilters();
      }
    });
  }

  getClasses(){
    this.classes = ["Alle"];
    this.pupils.forEach((element) => {
      if(!this.classes.includes(element.schoolClass)){
        this.classes.push(element.schoolClass);
      }
    });
    this.classes.sort();
    this.selectedClass = "Alle";
  }

  lockAfterSchoolCare(){
    this.employeeController.closeAfterSchoolCareUsingPATCH(this.listId).toPromise().then((response)=>{
      this.alertService.presentToastSuccess("Veranstaltung erfolgreich gesperrt");
    }).catch((error)=>{
      console.log(error);
      this.alertService.presentToastFailure("Veranstaltung konnte nicht gesperrt werden");
    });
  }

  async presentAlertDetails(model:PupilModel){
    let message = "Schule: " + model.school + "<br/>" + "Klasse: " + model.schoolClass + "<br/>"
    if(model.note != null && model.note != ''){
      message = message + "Info: " + model.note
    }
    const alert = await this.alertController.create({
      header: model.name,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertStatus(model:PupilModel){
    const alertPresent = await this.alertController.create({
      header: model.name,
      message: "Bestätigen Sie die Anwesenheit des Schülers",
      buttons: [
        {
          text: 'Abbrechen',
          handler: () => {
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.updatePresent(model.id);
          }
        }
      ]
    });
    const alertLeft = await this.alertController.create({
      header: model.name,
      message: "Bestätigen Sie, dass der Schüler gegangen ist",
      buttons: [
        {
          text: 'Abbrechen',
          handler: () => {
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.updateLeft(model.id);
          }
        }
      ]
    });
    if(model.status == 1 || model.status == 2){
      await alertPresent.present();
    } else if(model.status == 3){
      await alertLeft.present();
    }
  }

  async presentAlertLock(){
    const alert = await this.alertController.create({
      header: "Veranstaltung sperren",
      message: "Wollen Sie die Veranstaltung wirklich sperren?",
      buttons: [
        {
          text: 'Abbrechen',
          handler: () => {
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.lockAfterSchoolCare();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentPopover(ev: any, id:string, status:number) {
    let isPresent:Boolean = false;
    if (status == 3){
      isPresent = true;
    }
    const popover = await this.popoverController.create({
      component: AttendancePopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        child_id: id,
        homeRef : this,
        isPresent: isPresent
      }
    });
    popover.style.cssText = '--background: transparent;';
    return await popover.present();
  }
}
