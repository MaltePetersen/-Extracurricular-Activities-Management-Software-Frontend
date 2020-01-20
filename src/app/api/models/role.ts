/* tslint:disable */
import { Privilege } from './privilege';
import { User } from './user';
export interface Role {
  id?: number;
  name?: string;
  privileges?: Array<Privilege>;
  users?: Array<User>;
}
