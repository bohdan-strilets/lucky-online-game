import React from 'react';

export interface ILayoutState {
  children: React.ReactElement;
  showSidebars?: boolean;
}

export type IBodyStyled = Pick<ILayoutState, 'showSidebars'>;
