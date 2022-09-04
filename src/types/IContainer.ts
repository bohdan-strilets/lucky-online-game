export interface IContainerState {
  children: any;
  type: 'color' | 'transparent';
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
  'width' | 'height' | 'margin' | 'padding' | 'alignItems' | 'type'
>;

export type IPointStyled = Pick<
  IContainerState,
  'top' | 'bottom' | 'left' | 'right'
>;
