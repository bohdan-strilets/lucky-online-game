import { useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/bets/betsOperations';

import { IGetAllBetsRes, IBets } from 'types/IBetsApi';

const useBetList = () => {
  const [bets, setBets] = useState<IBets[] | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(operations.getAllBets())
      .then(data => {
        const betsArr = (data.payload as IGetAllBetsRes).bets;
        setBets(betsArr);
      })
      .catch(error => console.log(error));
  }, [dispatch]);

  return { bets };
};

export default useBetList;
