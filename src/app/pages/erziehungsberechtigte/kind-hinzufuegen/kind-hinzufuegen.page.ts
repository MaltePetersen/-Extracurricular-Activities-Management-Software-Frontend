import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-kind-hinzufuegen',
  templateUrl: './kind-hinzufuegen.page.html',
  styleUrls: ['./kind-hinzufuegen.page.scss'],
})
export class KindHinzufuegenPage implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
