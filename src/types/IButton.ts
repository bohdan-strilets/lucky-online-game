export interface IButtonState {
  children: any;
  type: 'button' | 'submit' | 'reset' | undefined;
  width?: string;
  height?: string;
  background?: 'green' | 'blue';
  shadow?: boolean;
  borderRadius?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type IButtonWrapperStyled = Pick<
  IButtonState,
  'width' | 'height' | 'background' | 'shadow' | 'borderRadius'
>;
