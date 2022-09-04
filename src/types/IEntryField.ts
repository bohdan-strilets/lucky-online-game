export interface IEntryFieldState {
  label: string;
  type: string;
  name: string;
  value: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  width?: string;
  height?: string;
  margin?: string;
}

export type IWrapperStyled = Pick<IEntryFieldState, 'margin'>;

export type IInputStyled = Pick<IEntryFieldState, 'width' | 'height'>;
