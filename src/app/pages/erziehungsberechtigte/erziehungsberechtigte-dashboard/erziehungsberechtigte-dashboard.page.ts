import { Component, OnInit, NgModule } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import data from '../../../../assets/company.json';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ParentControllerService } from 'src/app/api/services';
import { UserDTO } from 'src/app/api/models';

class IUserDTO implements UserDTO{
  
}

@Component({
  selector: 'app-erziehungsberechtigte-dashboard',
  templateUrl: './erziehungsberechtigte-dashboard.page.html',
  styleUrls: ['./erziehungsberechtigte-dashboard.page.scss'],
})
export class ErziehungsberechtigteDashboardPage implements OnInit {
  veranstaltung: string;
  veranstaltungen:any;

  constructor(private auth: AuthenticationService, private veranstaltungsDaten: VeranstaltungensdatenService, public http: HttpClient, private parentController: ParentControllerService) {
    this.getVeranstaltungen();
  }

  ngOnInit() {
    this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung);
    this.parentController.createChildUsingPOST(new IUserDTO).subscribe(()=>console.log("worked"));
  }

  getVeranstaltungen() {
    this.http.get<school[]>(`${environment.apiUrl}/api/employee/schools`).subscribe((a) => {
      this.veranstaltungen = a;
      console.log(a);
    });
  }

  async chooseOffer(name){
    this.veranstaltungsDaten.changeVeranstaltung(name.toString());
  }



  logout() {
    this.auth.logout();
  }

}
