/* tslint:disable */
import { AttendanceDTO } from './attendance-dto';
import { SimpleUserDTO } from './simple-user-dto';
export interface AfterSchoolCareDTO {
  attendances?: Array<AttendanceDTO>;
  endTime?: string;
  id?: number;
  name?: string;
  owner?: SimpleUserDTO;
  participatingSchool?: number;
  startTime?: string;
  type?: number;
}
