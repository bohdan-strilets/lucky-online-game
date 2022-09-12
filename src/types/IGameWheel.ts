export interface IGameWheelState {
  value: number;
  isWon: boolean;
}

export type IInnerCircleStyled = Pick<IGameWheelState, 'isWon'>;
