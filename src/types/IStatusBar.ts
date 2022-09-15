export interface ILevelInfoState {
  experience?: number;
  level?: number;
  experienceToImprove?: number;
}

export interface IUserInfoState {
  name: string | undefined | null;
  nickname: string | undefined | null;
  rank: string | undefined;
  level: number | undefined;
  inGame?: boolean;
}

export interface IRateInfoState {
  type: string | null;
  number: number | null;
  color: string | null;
  betAmount: number | null;
  coefficient: number | null;
}
