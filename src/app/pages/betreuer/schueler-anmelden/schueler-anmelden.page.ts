import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';
import { NgModel } from '@angular/forms';
import { SchuelerModel } from 'src/app/models/schueler-model';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schueler-anmelden',
  templateUrl: './schueler-anmelden.page.html',
  styleUrls: ['./schueler-anmelden.page.scss'],
})
export class SchuelerAnmeldenPage implements OnInit {


  classes:string[];
  pupils:SchuelerModel[];
  filteredPupils:SchuelerModel[];
  date:Date;
  schoolId:string;
  selectedClass:string;
  search:string;
  
  constructor(private alertController: AlertController, private thisRoute:ActivatedRoute) { 
    this.pupils = [
      new SchuelerModel("Birgit", "Klaus Groth Schule", "5b", "15:00", "Muss nach Hause getragen werden", 1),
      new SchuelerModel("Klaus", "Klaus Groth Schule", "6b", "16:00", "Faehrt mit dem Bus", 2),
      new SchuelerModel("Timo", "Klaus Groth Schule", "7b", "17:00", "Faehrt mit der Bahn", 3),
      new SchuelerModel("Max", "Klaus Groth Schule", "8b", "18:00", "Wird abgeholt", 4),
      new SchuelerModel("Max", "Klaus Groth Schule", "9b", "18:00", "Wird abgeholt", 3),
      new SchuelerModel("Max", "Klaus Groth Schule", "10b", "18:00", "Wird abgeholt", 2),
      new SchuelerModel("Max", "Klaus Groth Schule", "11b", "18:00", "Wird abgeholt", 1),
      new SchuelerModel("Max", "Klaus Groth Schule", "12b", "18:00", "Wird abgeholt", 2),
      new SchuelerModel("Max", "Klaus Groth Schule", "13b", "18:00", "Wird abgeholt", 3)
    ];
    this.filteredPupils = this.pupils;
    this.getClasses();
  }

  ngOnInit() {
    this.schoolId = this.thisRoute.snapshot.paramMap.get('id');
  }

  searchChanged(){
    console.log(this.search);
      this.filterPupils();
  }

  selectedClassChanged(){
    console.log(this.selectedClass);
      this.filterPupils();
  }

  dateChanged(){
    console.log(this.date);
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
      message: "Schule: " + model.schule + "<br/>" + "Klasse: " + model.klasse + "<br/>" + "Betreuungsende: " + model.betreuungsende + "<br/>" + "Info: " + model.info,
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
}
