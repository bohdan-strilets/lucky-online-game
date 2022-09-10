export interface IContainerState {
  children: any;
  type: 'color' | 'transparent';
  direction?: 'row' | 'column';
  justifyContent?: string;
  width: string;
  height?: string;
  padding?: string;
  margin?: string;
  alignItems?: 'center' | 'right';
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export type IWrapperStyled = Pick<
  IContainerState,
  | 'width'
  | 'direction'
  | 'justifyContent'
  | 'height'
  | 'margin'
  | 'padding'
  | 'alignItems'
  | 'type'
>;

export type IPointStyled = Pick<
  IContainerState,
  'top' | 'bottom' | 'left' | 'right'
>;
