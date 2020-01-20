/* tslint:disable */
import { AfterSchoolCare } from './after-school-care';
import { User } from './user';
export interface Attendance {
  afterSchoolCare?: AfterSchoolCare;
  arrivalTime?: string;
  child?: User;
  id?: number;
  leaveTime?: string;
  note?: string;
}
