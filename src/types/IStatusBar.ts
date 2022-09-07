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
}
