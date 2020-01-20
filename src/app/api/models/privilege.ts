/* tslint:disable */
import { Role } from './role';
export interface Privilege {
  id?: number;
  name?: string;
  roles?: Array<Role>;
}
