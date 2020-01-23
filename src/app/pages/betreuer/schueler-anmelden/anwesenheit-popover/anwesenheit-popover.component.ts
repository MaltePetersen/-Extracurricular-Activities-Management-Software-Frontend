import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-anwesenheit-popover',
  templateUrl: './anwesenheit-popover.component.html',
  styleUrls: ['./anwesenheit-popover.component.scss'],
})
export class AnwesenheitPopoverComponent implements OnInit {

  private id:String;
  
  constructor(navParams: NavParams) {
    this.id = navParams.get('child_id');
    console.log(navParams.get('child_id'));
  }

  ngOnInit() {}

  zuruecksetzen(){
    console.log("zuruecksetzen");
  }

}
