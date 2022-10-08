export interface IBet {
  _id: string | null;
  owner: string | null;
  type: string | null;
  number: number | null;
  color: string | null;
  isWon: boolean;
  betAmount: number | null;
  coefficient: number | null;
  winningAmount: number | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface IBetsState {
  bets: IBet[] | null;
  bet: IBet;
  page: number;
  limit: number;
  total: number;
}
