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

export interface ISignupRes {
  status: string;
  code: number;
  tokens: ITokens;
  user: IUser;
}
