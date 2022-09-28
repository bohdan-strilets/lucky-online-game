export interface IListItemState {
  position: number;
  avatar: string;
  name: string;
  experience: number;
  level: number;
  bank: number;
  totalBets: number;
  wonBets: number;
  lostBets: number;
}

export type IListItemStyled = Pick<IListItemState, 'position'>;
