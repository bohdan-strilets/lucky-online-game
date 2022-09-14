export interface IStatistics {
  _id: string;
  owner: string;
  timeInGame: number;
  totalBets: number;
  wonBets: number;
  lostBets: number;
  moneySpent: number;
  moneyEarned: number;
}

export interface IStatisticsRes {
  status: string;
  code: number;
  statistics: IStatistics;
}
