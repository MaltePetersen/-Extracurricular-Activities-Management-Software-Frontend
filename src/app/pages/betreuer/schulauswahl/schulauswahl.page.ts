import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EnvService } from '../../../services/env.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-schulauswahl',
  templateUrl: './schulauswahl.page.html',
  styleUrls: ['./schulauswahl.page.scss'],
})
export class SchulauswahlPage implements OnInit {

  schools: any;

  constructor(public router : Router ,public http: HttpClient, private env: EnvService) {
    this.getSchools();
  }

  ngOnInit() {
  }

  schoolClick(schoolId:number) {
    this.router.navigate(['schueler-anmelden', {id:schoolId}]);
  }

  getSchools() {
    this.http.get<school[]>(`${environment.apiUrl}/api/schools`).subscribe((a) => {
      this.schools = a;
    });
  }

}
