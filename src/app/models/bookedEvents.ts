import { BookedTimeframe } from './bookedTimeframe';

export class BookedEvents{
    
    constructor(public weekday: String, public timeframe: BookedTimeframe[]){

    }
}