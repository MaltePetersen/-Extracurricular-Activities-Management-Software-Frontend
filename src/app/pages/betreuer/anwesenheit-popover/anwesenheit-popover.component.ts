import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anwesenheit-popover',
  templateUrl: './anwesenheit-popover.component.html',
  styleUrls: ['./anwesenheit-popover.component.scss'],
})
export class AnwesenheitPopoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  zuruecksetzen(){
    console.log("zuruecksetzen");
  }

}
