/* tslint:disable */
import { AttendanceDTO } from './attendance-dto';
import { SimpleUserDTO } from './simple-user-dto';
export interface WorkingGroupDTO {
  attendances?: Array<AttendanceDTO>;
  closed?: boolean;
  endTime?: string;
  external?: boolean;
  id?: number;
  name?: string;
  owner?: SimpleUserDTO;
  participatingSchool?: number;
  startTime?: string;
  type?: number;
}
