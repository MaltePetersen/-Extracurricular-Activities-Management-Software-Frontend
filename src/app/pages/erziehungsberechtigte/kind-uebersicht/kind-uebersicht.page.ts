import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { KinderdatenService } from 'src/app/services/kinderdaten.service';
import { Children } from 'src/app/models/children';
import { ParentControllerService } from 'src/app/api/services';
import { UserDTO, SimpleUserDTO } from 'src/app/api/models';
import { ChildModel } from 'src/app/models/childModel';

@Component({
  selector: 'app-kind-uebersicht',
  templateUrl: './kind-uebersicht.page.html',
  styleUrls: ['./kind-uebersicht.page.scss'],
})
export class KindUebersichtPage implements OnInit {

  children:SimpleUserDTO[];

  constructor(private router: Router, private parentController:ParentControllerService) {
  }

  getChildren() {
    const params = {
    };

    this.parentController.getChildsUsingGET(params).toPromise().then((children)=>{
      this.children = children;
      //children.forEach((child)=>{
        //this.parentController.getSchoolUsingGET(child.school).toPromise().then((school)=>{
        //  this.mapToChildModel(child, school.name);
        //}).catch((error)=>{
        //  this.mapToChildModel(child, "Keine Schule gefunden");
        //})
      //});
      console.table(children);
    });
  }

  mapToChildModel(child:SimpleUserDTO, schoolName:string){
    this.children.push(new ChildModel(child.fullname, child.schoolClass, schoolName, child.username));
  }

  changeChildData(chosenChild:UserDTO){
    let navigationExtras: NavigationExtras = {
      state: {
        username:chosenChild.username,
        fullname:chosenChild.fullname,
        schoolClass:chosenChild.schoolClass
      }
    };
    this.router.navigateByUrl('parent/kind-bearbeiten', navigationExtras);
  }

  ngOnInit() {
    this.getChildren();
  }

  navToKindHinzu() {
    this.router.navigateByUrl('parent/kind-hinzufuegen');
  }

}
