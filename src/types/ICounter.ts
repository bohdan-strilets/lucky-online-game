export interface ICounterState {
  margin?: string;
  getValue: (value: number) => void;
}

export type IWrapperStyled = Pick<ICounterState, 'margin'>;
