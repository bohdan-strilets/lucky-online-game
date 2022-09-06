export interface IEditComplexityState {
  onClose: () => void;
  complexity?: 'low' | 'medium' | 'high' | null;
}
