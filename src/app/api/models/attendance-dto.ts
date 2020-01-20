/* tslint:disable */
import { IUserDTO } from './iuser-dto';
export interface AttendanceDTO {
  afterSchoolCare?: number;
  arrivalTime?: string;
  child?: IUserDTO;
  id?: number;
  leaveTime?: string;
  note?: string;
  status?: number;
}
