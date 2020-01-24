/* tslint:disable */
import { SimpleUserDTO } from './simple-user-dto';
import { SchoolDTO } from './school-dto';
export interface AttendanceDTO {
  afterSchoolCare?: number;
  arrivalTime?: string;
  child?: SimpleUserDTO;
  id?: number;
  leaveTime?: string;
  note?: string;
  school?: SchoolDTO;
  status?: number;
}
