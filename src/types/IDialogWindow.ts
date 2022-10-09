export interface IDialogWindowState {
  onCencel: () => void;
  onDelete: () => void;
  text?: string;
  successBtnText: string;
  failureBtnText: string;
}
