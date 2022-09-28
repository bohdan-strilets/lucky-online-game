import { IUser } from './IUserState';

export interface IGetAllUsers {
  status: string;
  code: number;
  allUsers: IUser[];
  limit: number;
  page: string;
  total: number;
}
