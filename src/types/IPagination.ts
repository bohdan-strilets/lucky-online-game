export interface IGap {
  before: boolean;
  paginationGroup: number[];
  after: boolean;
}

export interface IusePagination {
  contentPerPage: number;
  count: number;
}

export interface IPagination {
  contentPerPage: number;
  arr: any[];
  prevPage: () => void;
  nextPage: () => void;
  page: number;
  setPage: (page: number) => void;
  gaps: { before: boolean; paginationGroup: number[]; after: boolean };
  totalPages: number;
  margin?: string;
}
