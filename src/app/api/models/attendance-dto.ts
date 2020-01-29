/* tslint:disable */
import { SimpleUserDTO } from './simple-user-dto';
export interface AttendanceDTO {
  afterSchoolCare?: number;
  allowedToLeaveAfterFinishedHomework?: boolean;
  arrivalTime?: string;
  child?: SimpleUserDTO;
  id?: number;
  latestArrivalTime?: string;
  leaveTime?: string;
  note?: string;
  predefinedLeaveTime?: string;
  status?: number;
}
