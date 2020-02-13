import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendancePopoverComponent as AttendancePopoverComponent } from './attendance-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [AttendancePopoverComponent], 
  entryComponents: [AttendancePopoverComponent]
})
export class AttendancePopoverModule {}
