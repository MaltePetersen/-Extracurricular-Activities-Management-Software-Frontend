/* tslint:disable */
import { AttendanceDTO } from './attendance-dto';
import { IUserDTO } from './iuser-dto';
export interface AfterSchoolCareDTO {
  attendances?: Array<AttendanceDTO>;
  employee?: IUserDTO;
  endTime?: string;
  id?: number;
  name?: string;
  participatingSchool?: number;
  startTime?: string;
  type?: number;
}
