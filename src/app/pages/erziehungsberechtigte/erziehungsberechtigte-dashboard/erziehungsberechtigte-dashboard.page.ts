import { Component, OnInit, NgModule } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import data from '../../../../assets/company.json';



@Component({
  selector: 'app-erziehungsberechtigte-dashboard',
  templateUrl: './erziehungsberechtigte-dashboard.page.html',
  styleUrls: ['./erziehungsberechtigte-dashboard.page.scss'],
})
export class ErziehungsberechtigteDashboardPage implements OnInit {
  private veranstaltungen = data;
  tableStyle = 'bootstrap';
  light = true;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    console.log('ELTERN AuthenticationService');
    console.log(this.auth);
  }

  switchStyle(){
    if(this.tableStyle === 'dark'){
      this.tableStyle = 'bootstrap';
      this.light = true;
    } else {
      this.tableStyle = 'dark';
      this.light = false;
    }
  }

  getRowClasse(row){

  }

  logout() {
    this.auth.logout();
  }

  async open(row) {
    console.log(row);
  }

}
