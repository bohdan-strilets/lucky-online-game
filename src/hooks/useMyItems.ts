import { useState } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';

import { toast } from 'react-toastify';

const useMyItems = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<null | number>(null);
  const [currentPrice, setCurrentPrice] = useState<null | number>(null);
  const [halfPrice, setHalfPrice] = useState(0);

  const dispatch = useAppDispatch();

  const openDialogWindow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setShowDialog(true);

    const index = e.currentTarget.dataset.index;
    const price = e.currentTarget.dataset.price;

    if (index !== undefined && price !== undefined) {
      setCurrentIndex(Number(index));
      setCurrentPrice(Number(price));
      setHalfPrice(Number(price) / 2);
    }
  };

  const closeDialogWindow = () => setShowDialog(false);

  const sell = () => {
    if (currentIndex !== null && currentPrice !== null) {
      dispatch(operations.sellItem({ index: currentIndex, price: currentPrice / 2 }));
      closeDialogWindow();
      toast.success("You have successfully sold an item you don't want.");
    }
  };

  return { openDialogWindow, closeDialogWindow, sell, showDialog, currentPrice, halfPrice };
};

export default useMyItems;
