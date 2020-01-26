/* tslint:disable */
import { User } from './user';
export interface VerificationToken {
  expiryDate?: string;
  id?: number;
  token?: string;
  user?: User;
}
