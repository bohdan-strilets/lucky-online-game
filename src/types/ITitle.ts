export interface ITitleState {
  children: string;
  type: 'h1' | 'h2' | 'h3' | 'h4';
}

export type ITextStyledd = Pick<ITitleState, 'type'>;
