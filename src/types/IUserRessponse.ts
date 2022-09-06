import { ILevel } from './ILevel';
import { IStatistics } from './IStatistics';

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IUser {
  _id: string;
  name: string;
  nickname: string;
  email: string;
  dateBirth: string;
  gender: 'man' | 'woman' | 'other';
  bank: number;
  avatarURL: string;
  isVerified: boolean;
  complexity: 'low' | 'medium' | 'high';
  inGame: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IAuthRes {
  status: string;
  code: number;
  tokens: ITokens;
  user: IUser;
}

export interface ICurrentRes {
  status: string;
  code: number;
  user: IUser;
}

export interface IChangeAvatarRes {
  status: string;
  code: number;
  avatarURL: string;
}

export interface IChangeAccountRes {
  status: string;
  code: number;
  user: IUser;
}

export interface IDeleteAccountRes {
  status: string;
  code: number;
  message: string;
}

export interface IChangeEmailRes {
  status: string;
  code: number;
  email: string;
  message: string;
}

export interface IChangePasswordRes {
  status: string;
  code: number;
  message: string;
}

export interface IChangeComplexityRes {
  status: string;
  code: number;
  complexity: 'low' | 'medium' | 'high';
}

export interface ICreateSessionRes {
  status: string;
  code: number;
  user: Pick<IUser, 'name' | 'email' | 'complexity' | 'inGame'>;
  userLevel: ILevel;
  userStatistics: IStatistics;
}

export interface IChangeBankRes {
  status: string;
  code: number;
  bank: number;
}

export interface IDeleteSessionRes {
  status: string;
  code: number;
  message: string;
}
