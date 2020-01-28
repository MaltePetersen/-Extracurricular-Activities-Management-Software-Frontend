import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';
import { NgModel } from '@angular/forms';
import { AlertController, PopoverController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AnwesenheitPopoverComponent } from './anwesenheit-popover/anwesenheit-popover.component';
import { EmployeeControllerService } from 'src/app/api/services';
import { AfterSchoolCare, AfterSchoolCareDTO, SchoolDTO, AttendanceDTO, SimpleUserDTO } from 'src/app/api/models';
import moment from 'moment';
import { PupilModel } from 'src/app/models/pupil-model';

@Component({
  selector: 'app-schueler-anmelden',
  templateUrl: './schueler-anmelden.page.html',
  styleUrls: ['./schueler-anmelden.page.scss'],
})
export class SchuelerAnmeldenPage implements OnInit {


  classes:string[] = [];
  pupils:PupilModel[] = [];
  filteredPupils:PupilModel[] =[];
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
    this.pupils = [];
    this.getAfterSchoolCare(this.listId).then((response) =>{
      this.betreuungsende = response.endTime;
      response.attendances.forEach((attendance)=>{
        let school = this.getSchool(attendance.child.childSchool).then((school)=>{
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
    this.getClasses();
    this.filteredPupils.sort((a, b)=> a.name.localeCompare(b.name));
  }

  mapToPupil(attendance:AttendanceDTO, schoolName:string):PupilModel{
    return new PupilModel(attendance.id, attendance.child.fullname, schoolName, attendance.child.schoolClass, (attendance.note == null) ? '' : attendance.note, attendance.status);
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

  filterPupils(){
    this.filteredPupils = this.pupils;
    if(this.search != null && this.search != ""){
      this.filteredPupils = this.filteredPupils.filter(pupil => pupil.name.toUpperCase().includes(this.search.toUpperCase()));
    }
    if(this.selectedClass != null && this.selectedClass != "Alle"){
      this.filteredPupils = this.filteredPupils.filter(pupil => pupil.schoolClass == this.selectedClass);
    }
  }

  updateAnwesend(id:number){
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
    });
  }

  updateGegangen(id:number){
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

  async presentAlertDetails(model:PupilModel){
    const alert = await this.alertController.create({
      header: model.name,
      message: "Schule: " + model.school + "<br/>" + "Klasse: " + model.schoolClass + "<br/>" + "Info: " + model.note,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertStatus(model:PupilModel){
    const alertAnwesend = await this.alertController.create({
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
          handler: () => {
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.updateGegangen(model.id);
          }
        }
      ]
    });
    if(model.status == 1 || model.status == 2){
      await alertAnwesend.present();
    } else if(model.status == 3){
      await alertGegangen.present();
    }
  }

  async presentPopover(ev: any, id:string, status:number) {
    let isPresent:Boolean = false;
    if (status == 3){
      isPresent = true;
    }
    const popover = await this.popoverController.create({
      component: AnwesenheitPopoverComponent,
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
