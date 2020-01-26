/* tslint:disable */
import { Attendance } from './attendance';
import { School } from './school';
import { AfterSchoolCare } from './after-school-care';
import { Role } from './role';
import { VerificationToken } from './verification-token';
export interface User {
  parent?: User;
  address?: string;
  attendances?: Array<Attendance>;
  childSchool?: School;
  children?: Array<User>;
  email?: string;
  employeesSchools?: Array<School>;
  fullname?: string;
  iban?: string;
  id?: number;
  afterSchoolCares?: Array<AfterSchoolCare>;
  password?: string;
  phoneNumber?: string;
  roles?: Array<Role>;
  schoolClass?: string;
  schoolCoordinator?: boolean;
  schoolCoordinatorsSchools?: Array<School>;
  subject?: string;
  username?: string;
  verificationTokens?: VerificationToken;
  verified?: boolean;
}
