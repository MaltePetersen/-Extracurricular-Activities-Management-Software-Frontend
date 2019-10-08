import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-betreuer-dashboard',
  templateUrl: './betreuer-dashboard.page.html',
  styleUrls: ['./betreuer-dashboard.page.scss'],
})
export class BetreuerDashboardPage implements OnInit {

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
