export interface IButtonState {
  children: any;
  type: 'button' | 'submit' | 'reset' | undefined;
  width?: string;
  height?: string;
  margin?: string;
  background?: 'green' | 'blue';
  shadow?: boolean;
  borderRadius?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean | undefined;
  otherAttributes?: any;
}

export type IButtonWrapperStyled = Pick<
  IButtonState,
  'width' | 'height' | 'margin' | 'background' | 'shadow' | 'borderRadius' | 'otherAttributes'
>;
