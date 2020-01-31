import { AllCareModel } from './allCareModel';

export class DayModel{

    constructor(public name:string, public afterSchoolCares:[AllCareModel]){
    }
}