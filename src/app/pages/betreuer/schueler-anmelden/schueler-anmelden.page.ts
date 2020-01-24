import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';
import { NgModel } from '@angular/forms';
import { SchuelerModel } from 'src/app/models/schueler-model';
import { AlertController, PopoverController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AnwesenheitPopoverComponent } from './anwesenheit-popover/anwesenheit-popover.component';
import { EmployeeControllerService } from 'src/app/api/services';
import { AfterSchoolCare, AfterSchoolCareDTO, SchoolDTO, AttendanceDTO } from 'src/app/api/models';

@Component({
  selector: 'app-schueler-anmelden',
  templateUrl: './schueler-anmelden.page.html',
  styleUrls: ['./schueler-anmelden.page.scss'],
})
export class SchuelerAnmeldenPage implements OnInit {


  classes:string[];
  pupils:SchuelerModel[] = [];
  filteredPupils:SchuelerModel[];
  listId:number;
  selectedClass:string;
  search:string;
  care:AfterSchoolCareDTO;
  betreuungsende:string = '';
  
  constructor(private alertController: AlertController, public router : Router, public popoverController : PopoverController, private employeeController:EmployeeControllerService) { 
  }

  ngOnInit() {
    this.listId = this.router.getCurrentNavigation().extras.state.id;
    this.loadPupils();
  }

  loadPupils(){
    this.getAfterSchoolCare(this.listId).then((response) =>{
      this.betreuungsende = response.endTime;
      response.attendances.forEach((attendance)=>{
        this.pupils.push(this.mapToPupil(attendance));
        /*let school = this.getSchool(attendance.child.childschool).then((school)=>{
          this.pupils.push(this.mapToPupil(attendance, school));
        });*/
      });
      this.filteredPupils = this.pupils;
      this.getClasses();
    });
  }

  mapToPupil(attendance:AttendanceDTO):SchuelerModel{
    return new SchuelerModel(attendance.id, attendance.child.fullname, 'placeholder', attendance.child.schoolClass, attendance.note, attendance.status);
  }

  /*mapToPupil(attendance:AttendanceDTO, school:SchoolDTO):SchuelerModel{
    return new SchuelerModel(attendance.id, attendance.child.fullname, school.name, attendance.child.schoolClass, attendance.note, attendance.status);
  }*/

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

  filterPupils(){
    this.filteredPupils = this.pupils;
    if(this.search != null && this.search != ""){
      this.filteredPupils = this.filteredPupils.filter(pupil => pupil.name.toUpperCase().includes(this.search.toUpperCase()));
    }
    if(this.selectedClass != null && this.selectedClass != "Alle"){
      this.filteredPupils = this.filteredPupils.filter(pupil => pupil.klasse == this.selectedClass);
    }
  }

  updateAnwesend(id:number){
    let currentDateTime:string = new Date().toString();
    const update = {
      "arrivalTime" : currentDateTime,
    };
    const patch = {
      "update" : update,
      "id" : id
    };
    this.employeeController.updateAttendanceUsingPATCH(patch).toPromise().then(value => {
      this.loadPupils();
      console.log(patch);
    });
  }

  updateGegangen(id:number){
    let currentDateTime:string = new Date().toString();
    const update = {
      "leaveTime" : currentDateTime,
    };
    const patch = {
      "update" : update,
      "id" : id
    };
    this.employeeController.updateAttendanceUsingPATCH(patch).toPromise().then(value => {
      this.loadPupils();
      console.log(patch);
    });
  }

  getClasses(){
    this.classes = ["Alle"];
    this.pupils.forEach((element) => {
      if(!this.classes.includes(element.klasse)){
        this.classes.push(element.klasse);
      }
    });
    this.classes.sort();
    this.selectedClass = "Alle";
  }

  async presentAlertDetails(model:SchuelerModel){
    const alert = await this.alertController.create({
      header: model.name,
      message: "Schule: " + model.schule + "<br/>" + "Klasse: " + model.klasse + "<br/>" + "<br/>" + "Info: " + model.info,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertStatus(model:SchuelerModel){
    const alertAnwesend = await this.alertController.create({
      header: model.name,
      message: "Bestätigen Sie die Anwesenheit des Schülers",
      buttons: [
        {
          text: 'Abbrechen',
          //role: 'cancel',
          //cssClass: 'secondary',
          handler: () => {
            console.log('Cancel Anwesend');
          }
        },
        {
          text: 'Ok',
          //role: 'cancel',
          //cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Anwesend');
            this.updateAnwesend(model.id);
          }
        }
      ]
    });
    const alertGegangen = await this.alertController.create({
      header: model.name,
      message: "Bestätigen Sie, dass der Schüler gegangen ist",
      buttons: [
        {
          text: 'Abbrechen',
          //role: 'cancel',
          //cssClass: 'secondary',
          handler: () => {
            console.log('Cancel Gegangen');
          }
        },
        {
          text: 'Ok',
          //role: 'cancel',
          //cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Gegangen');
            this.updateGegangen(model.id);
          }
        }
      ]
    });
    if(model.anwesenheit == 1 || model.anwesenheit == 2){
      await alertAnwesend.present();
    } else if(model.anwesenheit == 3){
      await alertGegangen.present();
    }
  }

  async presentPopover(ev: any, id:string) {
    const popover = await this.popoverController.create({
      component: AnwesenheitPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        child_id: id,
      }
    });
    popover.style.cssText = '--background: transparent;';
    return await popover.present();
  }
}
