export interface ILevel {
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
}

export interface ILevelRes {
  status: string;
  code: number;
  level: ILevel;
}

export interface IChangeLevelRes {
  status: string;
  code: number;
  level: Pick<ILevel, 'level'>;
}

export interface IChangeExperienceRes {
  status: string;
  code: number;
  experience: Pick<ILevel, 'experience'>;
}

export interface IChangeRankRes {
  status: string;
  code: number;
  rank: Pick<ILevel, 'rank'>;
}
