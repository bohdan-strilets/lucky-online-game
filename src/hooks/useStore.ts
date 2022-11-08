import { useState, useEffect } from 'react';
import { useGetAllItemsQuery } from 'redux/store/storeApi';
import { useAppDispatch } from './useAppDispatch';
import operations from 'redux/user/userOperations';
import { useAppSelector } from './useAppSelector';
import { getBank } from 'redux/user/userSelectors';
import useSound from 'use-sound';
import { getSoundOff } from 'redux/options/optionsSelectors';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';
import { IItem } from 'types/IStore';
import { toast } from 'react-toastify';

const useStore = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [currentTitle, setCurrentTitle] = useState<null | string>(null);
  const [currentId, setCurrentId] = useState<null | string>(null);
  const [currentAmount, setCurrentAmount] = useState<null | number>(null);
  const [showModalBuyItem, setShowModalBuyItem] = useState(false);

  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });
  const bank = useAppSelector(getBank);
  const dispatch = useAppDispatch();
  const { data, isFetching } = useGetAllItemsQuery();
  const items = data?.items;

  const openModalMoreInfo = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.dataset.id;
    const title = e.currentTarget.children[0].textContent;

    play({ id: 'counter_click' });
    setCurrentTitle(title);
    setShowMoreDetails(true);

    if (id) {
      setCurrentId(id);
    }
  };

  const closeModalMoreInfo = () => {
    setShowMoreDetails(false);
    play({ id: 'counter_click' });
  };

  const openModalDialogWindow = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const price = e.currentTarget.dataset.price;
    const id = e.currentTarget.dataset.id;

    if (price !== null && price !== undefined && id !== undefined) {
      setCurrentAmount(Number(price));
      setCurrentId(id);
    }

    play({ id: 'counter_click' });
    setShowModalBuyItem(true);
  };

  const closeModalDialogWindow = () => {
    setShowModalBuyItem(false);
    play({ id: 'counter_click' });
  };

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
      play({ id: 'sound_victory' });
      return;
    }
  };

  return {
    openModalMoreInfo,
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
    items,
  };
};

export default useStore;
