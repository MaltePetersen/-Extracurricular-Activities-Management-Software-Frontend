import { Component, OnInit } from '@angular/core';
import { SchichtModel } from 'src/app/models/schicht-model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-meine-schichten',
  templateUrl: './meine-schichten.page.html',
  styleUrls: ['./meine-schichten.page.scss'],
})
export class MeineSchichtenPage implements OnInit {

  schichten:any;

  private datum:any;
  schoolId:string;

  constructor(private auth: AuthenticationService, public router : Router) { 
    this.schichten = [
      new SchichtModel("1", "Klaus Groth Schule", "17.10.2019", "10:00", "Donnerstag")
    ]
  }

  ngOnInit() {
    this.schoolId = this.router.getCurrentNavigation().extras.state.id;
    console.log(this.schoolId);
  }

  openList(listId:String){
    let navigationExtras: NavigationExtras = {
      state: {
        id: listId
      }
    };
    this.router.navigate(['schueler-anmelden'], navigationExtras);
  }

}
