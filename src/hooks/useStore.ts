import { useState, useEffect } from 'react';
import { useGetAllItemsQuery } from 'redux/store/storeApi';
import { useAppDispatch } from './useAppDispatch';
import operations from 'redux/user/userOperations';
import { useAppSelector } from './useAppSelector';
import { getBank } from 'redux/user/userSelectors';

import { IItem } from 'types/IStore';
import { toast } from 'react-toastify';

const useStore = () => {
  const [items, setItems] = useState<null | undefined | IItem[]>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [allImages, setAllImages] = useState(0);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [currentTitle, setCurrentTitle] = useState<null | string>(null);
  const [currentId, setCurrentId] = useState<null | string>(null);
  const [currentAmount, setCurrentAmount] = useState<null | number>(null);
  const [showModalBuyItem, setShowModalBuyItem] = useState(false);

  const bank = useAppSelector(getBank);
  const dispatch = useAppDispatch();
  const { data, isFetching } = useGetAllItemsQuery({ page, limit: 9 });

  useEffect(() => {
    if (data !== undefined) {
      if (page === 1) {
        setItems(data?.items);
        setTotal(data?.total);
        setAllImages(data.items.length);
      }

      if (page !== 1) {
        setItems(data.items);
        setAllImages(prevState => prevState + data.items.length);
      }
    }
  }, [data, page]);

  const showMore = () => setPage(prevState => prevState + 1);

  const comeBack = () => setPage(prevState => prevState - 1);

  const openModalMoreInfo = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.dataset.id;
    const title = e.currentTarget.children[0].textContent;

    setCurrentTitle(title);
    setShowMoreDetails(true);

    if (id) {
      setCurrentId(id);
    }
  };

  const closeModalMoreInfo = () => setShowMoreDetails(false);

  const openModalDialogWindow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const price = e.currentTarget.dataset.price;
    const id = e.currentTarget.dataset.id;

    if (price !== null && price !== undefined && id !== undefined) {
      setCurrentAmount(Number(price));
      setCurrentId(id);
    }

    setShowModalBuyItem(true);
  };

  const closeModalDialogWindow = () => setShowModalBuyItem(false);

  const buy = (id: string, price: number) => {
    if (bank !== null && bank !== undefined && price > bank) {
      toast.error('Sorry, there is not enough money in your account.');
      setShowModalBuyItem(false);
      return;
    }

    if (bank !== null && bank !== undefined && price <= bank) {
      dispatch(operations.buyItem({ id, price: -price }));
      toast.success('The item has been successfully purchased. Thank you.');
      setShowModalBuyItem(false);
      return;
    }
  };

  return {
    showMore,
    comeBack,
    openModalMoreInfo,
    items,
    page,
    total,
    allImages,
    showMoreDetails,
    currentTitle,
    currentId,
    isFetching,
    closeModalMoreInfo,
    buy,
    showModalBuyItem,
    openModalDialogWindow,
    closeModalDialogWindow,
    currentAmount,
  };
};

export default useStore;
