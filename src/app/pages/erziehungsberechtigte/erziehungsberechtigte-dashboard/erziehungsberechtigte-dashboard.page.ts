import { Component, OnInit, NgModule } from '@angular/core';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ParentControllerService } from 'src/app/api/services';
import { UserDTO, AfterSchoolCareDTO } from 'src/app/api/models';

class IUserDTO implements UserDTO{
  
}

@Component({
  selector: 'app-erziehungsberechtigte-dashboard',
  templateUrl: './erziehungsberechtigte-dashboard.page.html',
  styleUrls: ['./erziehungsberechtigte-dashboard.page.scss'],
})
export class ErziehungsberechtigteDashboardPage implements OnInit {
  afterSchoolCares: any;
  veranstaltung: string;
  veranstaltungen:AfterSchoolCareDTO[];

  constructor(private veranstaltungsDaten: VeranstaltungensdatenService, public http: HttpClient, private parentController: ParentControllerService) {
    this.getVeranstaltungen();
  }

  ngOnInit() {
    this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung);
  }

  getVeranstaltungen() {
    this.afterSchoolCares = [];
    const params = { };
    this.parentController.getBookedAfterSchoolCaresUsingGET(params).toPromise().then((cares)=>{
      this.veranstaltungen = cares;
      cares.forEach((response)=>{
        for (let i = 0; i < response.attendances.length; i++) {
        this.afterSchoolCares.push({"startTime":response.startTime, "name": response.name, "endTime": response.endTime, "childName":response.attendances[i].child.fullname});
        console.table(this.afterSchoolCares)
        }
      });
      console.table(this.veranstaltungen);
    }).catch((error)=>{
      console.log(error);
    });
  }

  async chooseOffer(name){
    this.veranstaltungsDaten.changeVeranstaltung(name.toString());
  }

}
