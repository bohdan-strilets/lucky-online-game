export interface IItem {
  _id: string;
  price: number;
  title: string;
  description: string;
  imageURL: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetAllItemsRes {
  status: string;
  code: number;
  items: IItem[];
  page: number;
  limit: number;
  total: number;
}

export interface IGetOneItemRes {
  status: string;
  code: number;
  item: IItem;
}
