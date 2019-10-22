import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-fjoerde-leitung-dashboard',
  templateUrl: './fjoerde-leitung-dashboard.page.html',
  styleUrls: ['./fjoerde-leitung-dashboard.page.scss'],
})

export class FjoerdeLeitungDashboardPage implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    console.log('LOGOUT')
    this.auth.logout();
  }

}
