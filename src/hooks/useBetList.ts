import { useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/bets/betsOperations';
import useSound from 'use-sound';
import { useAppSelector } from 'hooks/useAppSelector';
import { getSoundOff } from 'redux/options/optionsSelectors';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';
import { IGetAllBetsRes, IBets } from 'types/IBetsApi';

const useBetList = () => {
  const dispatch = useAppDispatch();

  const [bets, setBets] = useState<IBets[] | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  useEffect(() => {
    (async () => {
      if (page === 1) {
        const result = await dispatch(operations.getAllBets(page));

        setBets((result.payload as IGetAllBetsRes).bets);
        setTotal((result.payload as IGetAllBetsRes).total);
      }

      if (page !== 1) {
        const result = await dispatch(operations.getAllBets(page));

        setBets(prevState => {
          const newBets = (result.payload as IGetAllBetsRes).bets;
          return prevState !== null ? [...prevState, ...newBets] : [];
        });
      }
    })();
  }, [dispatch, page]);

  const showMore = () => {
    setPage(prevState => prevState + 1);
    play({ id: 'counter_click' });
  };

  const disabledbutton = () => {
    if (bets !== null && total !== null) {
      return bets?.length + 1 >= total;
    }
  };

  return { bets, showMore, disabledbutton };
};

export default useBetList;
