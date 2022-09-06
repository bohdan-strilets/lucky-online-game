export interface ISignupData {
  name: string;
  email: string;
  password: string;
  passwordAgain?: string;
}

export interface ISigninData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface IEditProfileData {
  name: string;
  nickname: string;
  gender: 'man' | 'woman' | 'other';
  dateBirth: string;
}

export interface IEditEmailData {
  email: string;
}

export interface IEditPasswordData {
  password: string;
  newPassword: string;
  passwordAgain?: string;
}

export interface IResetPasswordData {
  email: string;
  password: string;
  passwordAgain: string;
}

export interface IEditComplexityData {
  complexity?: 'low' | 'medium' | 'high' | null;
}

export interface IEditBankData {
  bank: number;
}
