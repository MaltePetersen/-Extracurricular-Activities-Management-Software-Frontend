import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-veranstaltung-einsehen',
  templateUrl: './veranstaltung-einsehen.page.html',
  styleUrls: ['./veranstaltung-einsehen.page.scss'],
})
export class VeranstaltungEinsehenPage implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }
  
  logout() {
    this.auth.logout();
  }
}
