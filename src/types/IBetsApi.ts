export interface IBets {
  _id: string;
  owner: string;
  type: string;
  number: number;
  color: string;
  isWon: boolean;
  betAmount: number;
  coefficient: number;
  winningAmount: number;
  createdAt: string;
  updatedAt: string;
}

export interface IGetAllBetsRes {
  status: string;
  code: number;
  bets: IBets[];
}

export interface IGetOneBetRes {
  status: string;
  code: number;
  bet: IBets;
}

export interface ICreateBetRes {
  status: string;
  code: number;
  bet: IBets;
}

export interface ICreateBetData {
  type: string | null;
  color: string | null;
  number: number | null;
  betAmount: number | null;
  coefficient: number | undefined;
}

export interface IChangeBetRes {
  status: string;
  code: number;
  bet: IBets;
}
