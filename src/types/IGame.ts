export interface IGameState {
  direction?: 'row' | 'column';
  width?: string;
  height?: string;
  wrap?: 'wrap';
  margin?: string;
  topRightRadius?: string;
  topLeftRadius?: string;
  bottomRightRadius?: string;
  bottomLeftRadius?: string;
  fontSize?: string;
  background?: string;
}

export type IWrapperStyled = Pick<
  IGameState,
  'direction' | 'width' | 'height' | 'wrap'
>;

export type IItemStyled = Pick<
  IGameState,
  | 'width'
  | 'height'
  | 'margin'
  | 'topRightRadius'
  | 'topLeftRadius'
  | 'bottomRightRadius'
  | 'bottomLeftRadius'
  | 'background'
>;

export type ILabel = Pick<IGameState, 'fontSize'>;
