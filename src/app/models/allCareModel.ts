import { SimpleUserDTO } from '../api/models';

export class AllCareModel{
    
    constructor(public id:number, public name:string, public school:string, public date:string, public time:string, public day:string, public owner:SimpleUserDTO){
    }
}