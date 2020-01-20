/* tslint:disable */
import { Attendance } from './attendance';
import { User } from './user';
import { School } from './school';
export interface AfterSchoolCare {
  attendances?: Array<Attendance>;
  employee?: User;
  endTime?: string;
  id?: number;
  name?: string;
  participatingSchool?: School;
  startTime?: string;
  type?: 'AFTERNOON_CARE' | 'WORKING_GROUP' | 'REMEDIAL' | 'AMPLIFICATION';
}
