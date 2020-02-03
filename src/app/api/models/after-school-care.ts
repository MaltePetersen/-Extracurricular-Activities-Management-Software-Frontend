/* tslint:disable */
import { Attendance } from './attendance';
import { User } from './user';
import { School } from './school';
export interface AfterSchoolCare {
  attendances?: Array<Attendance>;
  closed?: boolean;
  endTime?: string;
  id?: number;
  name?: string;
  owner?: User;
  participatingSchool?: School;
  startTime?: string;
  type?: 'AFTERNOON_CARE' | 'WORKING_GROUP' | 'REMEDIAL' | 'AMPLIFICATION';
}
