/* tslint:disable */
import { AfterSchoolCare } from './after-school-care';
import { User } from './user';
export interface Attendance {
  afterSchoolCare?: AfterSchoolCare;
  allowedToLeaveAfterFinishedHomework?: boolean;
  arrivalTime?: string;
  child?: User;
  id?: number;
  latestArrivalTime?: string;
  leaveTime?: string;
  note?: string;
  predefinedLeaveTime?: string;
}
