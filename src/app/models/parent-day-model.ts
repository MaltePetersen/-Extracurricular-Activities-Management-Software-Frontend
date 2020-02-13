import { EventBookingModel } from './event-booking-model';

export class ParentDayModel{

    constructor(public name:string, public schichten:[EventBookingModel]){
    }
}