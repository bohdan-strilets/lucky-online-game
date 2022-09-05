export type TLevel = {
  _id: string;
  owner: string;
  level: number;
  experience: number;
  rank:
    | 'homeless'
    | 'jester'
    | 'beginning'
    | 'entrepreneur'
    | 'businessman'
    | 'deputy'
    | 'investor';
  createdAt: string;
  updatedAt: string;
};

export interface ILevelRes {
  status: string;
  code: number;
  level: TLevel;
}

export interface IChangeLevelRes {
  status: string;
  code: number;
  level: Pick<TLevel, 'level'>;
}

export interface IChangeExperienceRes {
  status: string;
  code: number;
  experience: Pick<TLevel, 'experience'>;
}

export interface IChangeRankRes {
  status: string;
  code: number;
  rank: Pick<TLevel, 'rank'>;
}
