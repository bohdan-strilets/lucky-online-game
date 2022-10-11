import { useEffect, useState } from 'react';
import getAllUsers from 'helpers/getAllUsers';
import useSound from 'use-sound';
import { useAppSelector } from 'hooks/useAppSelector';
import { getSoundOff } from 'redux/options/optionsSelectors';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';
import { IUser } from 'types/IUserState';

const useRating = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<null | IUser[] | undefined>(null);
  const [totalUsers, setTotalUsers] = useState(null);
  const [sortOption, setSortOption] = useState<string | null>(null);

  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  useEffect(() => {
    (async () => {
      if (page === 1) {
        const { allUsers, total } = await getAllUsers(page);
        setUsers(allUsers);
        setTotalUsers(total);
      }

      if (page !== 1) {
        const { allUsers } = await getAllUsers(page);
        setUsers(prevState =>
          prevState !== null && prevState !== undefined
            ? [...prevState, ...allUsers]
            : [],
        );
      }
    })();
  }, [page]);

  const showMore = () => {
    setPage(prevState => prevState + 1);
    play({ id: 'counter_click' });
  };

  const disabledbutton = () => {
    if (users !== undefined && users !== null && totalUsers !== null) {
      return users?.length + 1 >= totalUsers;
    }
  };

  const sorting = () => {
    const types = {
      experience: 'EXPERIENCE',
      level: 'LEVEL',
      bank: 'BANK',
      totalBets: 'TOTAL BETS',
      wonBets: 'WON BETS',
      lostBets: 'LOST BETS',
    };

    if (users) {
      switch (sortOption) {
        case types.experience:
          users.sort((a, b) => {
            if (
              a.level !== null &&
              a.level !== undefined &&
              b.level !== null &&
              b.level !== undefined
            ) {
              return b.level?.experience - a.level?.experience;
            }
            return 1;
          });
          break;

        case types.level:
          users.sort((a, b) => {
            if (
              a.level !== null &&
              a.level !== undefined &&
              b.level !== null &&
              b.level !== undefined
            ) {
              return b.level?.level - a.level?.level;
            }
            return 1;
          });
          break;

        case types.bank:
          users.sort((a, b) => {
            if (
              a.bank !== null &&
              a.bank !== undefined &&
              b.bank !== null &&
              b.bank !== undefined
            ) {
              return b.bank - a.bank;
            }
            return 1;
          });
          break;

        case types.totalBets:
          users.sort((a, b) => {
            if (
              a.statistics !== null &&
              a.statistics !== undefined &&
              b.statistics !== null &&
              b.statistics !== undefined
            ) {
              return b.statistics?.totalBets - a.statistics?.totalBets;
            }
            return 1;
          });
          break;

        case types.wonBets:
          users.sort((a, b) => {
            if (
              a.statistics !== null &&
              a.statistics !== undefined &&
              b.statistics !== null &&
              b.statistics !== undefined
            ) {
              return b.statistics?.wonBets - a.statistics?.wonBets;
            }
            return 1;
          });
          break;

        case types.lostBets:
          users.sort((a, b) => {
            if (
              a.statistics !== null &&
              a.statistics !== undefined &&
              b.statistics !== null &&
              b.statistics !== undefined
            ) {
              return b.statistics?.lostBets - a.statistics?.lostBets;
            }
            return 1;
          });
          break;

        default:
      }
    }
  };

  const getSortOption = (value: string) => {
    setSortOption(value);

    if (users && sortOption) {
    }
  };

  return { showMore, disabledbutton, sorting, getSortOption, users };
};

export default useRating;
