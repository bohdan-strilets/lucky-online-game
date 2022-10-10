export interface IDialogWindowState {
  onFailure: () => void;
  onSuccess: () => void;
  text?: string;
  successBtnText: string;
  failureBtnText: string;
}
