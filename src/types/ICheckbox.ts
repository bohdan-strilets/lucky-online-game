export interface ICheckboxState {
  label: string;
  name: string;
  value?: any;
  required?: boolean;
  checked: boolean;
}

export type ICustomCheckboxStyled = Pick<ICheckboxState, 'checked'>;
