/* tslint:disable */
import { SimpleUserDTO } from './simple-user-dto';
export interface AttendanceDTO {
  afterSchoolCare?: number;
  arrivalTime?: string;
  child?: SimpleUserDTO;
  id?: number;
  leaveTime?: string;
  note?: string;
  status?: number;
}
