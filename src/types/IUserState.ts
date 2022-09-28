import { ILevel } from './ILevel';
import { IStatistics } from './IStatistics';

export interface IUser {
  _id?: string | null;
  name: string | null;
  nickname?: string | null;
  email: string | null;
  dateBirth?: string | null;
  gender?: 'man' | 'woman' | 'other' | null;
  bank?: number | null;
  avatarURL: string | null;
  isVerified: boolean;
  complexity?: 'low' | 'medium' | 'high' | null;
  inGame?: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
  level?: ILevel | null;
  statistics?: IStatistics | null;
}

export interface IAuthState {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}
