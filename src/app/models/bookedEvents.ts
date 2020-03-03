import { BookedTimeframe } from './bookedTimeframe';

export class BookedEvents{
    
    constructor(public weekday: string, public timeframe: BookedTimeframe[]){

    }
}