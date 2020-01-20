/* tslint:disable */
import { User } from './user';
export interface ISchool {
  address?: string;
  employees?: Array<User>;
  id?: number;
  name?: string;
  schoolCoordinators?: Array<User>;
}
