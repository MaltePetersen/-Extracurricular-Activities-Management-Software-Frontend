/* tslint:disable */
import { AfterSchoolCare } from './after-school-care';
import { User } from './user';
export interface School {
  address?: string;
  afterSchoolCares?: Array<AfterSchoolCare>;
  children?: Array<User>;
  email?: string;
  employees?: Array<User>;
  id?: number;
  name?: string;
  phoneNumber?: string;
  schoolCoordinators?: Array<User>;
}
