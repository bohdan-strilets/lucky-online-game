import { useState } from 'react';
import randomNumberGenerator from 'helpers/randomNumberGenerator';
import { useChangeExperienceMutation } from 'redux/level/levelApi';
import useCoefficient from './useCoefficient';
import useExperience from './useExperience';
import { useAppSelector } from './useAppSelector';
import { getUser } from 'redux/user/userSelectors';
import numbers from 'data/numbers.json';
import { useAppDispatch } from './useAppDispatch';
import operations from 'redux/user/userOperations';
import { useGetLevelInfoQuery } from 'redux/level/levelApi';
import betsOperations from 'redux/bets/betsOperations';

import { IChangeBetRes } from 'types/IBetsApi';

const useMakeMove = () => {
  const dispatch = useAppDispatch();

  const [changeExperience] = useChangeExperienceMutation();
  const { coefficientInfo } = useCoefficient();
  const { complexity } = useAppSelector(getUser);
  const { updateLevel, updateRank } = useExperience();
  const { data: levelInfo } = useGetLevelInfoQuery();

  const [isWon, setIsWon] = useState(false);
  const [randomNumber, setRandomNumber] = useState(() =>
    randomNumberGenerator(),
  );

  const types = {
    ZERO: 'zero',
    NUMBER: 'number',
    HIGH: 'high',
    LOW: 'low',
    EVEN: 'even',
    ODD: 'odd',
    BLACK: 'black',
    RED: 'red',
    DOZEN_1: 'dozen-1',
    DOZEN_2: 'dozen-2',
    DOZEN_3: 'dozen-3',
    COLUMN_1: 'column-1',
    COLUMN_2: 'column-2',
    COLUMN_3: 'column-3',
  };

  const getWinner = async (type: string, number: number, id: string) => {
    switch (type) {
      // case types.ZERO:
      //   setRandomNumber(randomNumberGenerator());
      //   if (number === randomNumber) {
      //     setIsWon(true);
      //     return { isWon, randomNumber, number };
      //   }
      //   setIsWon(false);
      //   return { isWon, randomNumber, number };

      case types.NUMBER:
        setRandomNumber(randomNumberGenerator());

        if (number === randomNumber) {
          setIsWon(true);
          if (complexity) {
            changeExperience({
              experience:
                coefficientInfo[complexity].coefficient *
                coefficientInfo[complexity].experience,
            });
          }
          // changeBet({ betId: id, isWon });
          return { isWon, randomNumber, number };
        }
        setIsWon(false);
        return { isWon, randomNumber, number };

      case types.HIGH:
        setRandomNumber(randomNumberGenerator());
        const num = numbers.find(item => item.number === randomNumber);

        if (num?.high) {
          setIsWon(true);
          if (complexity) {
            changeExperience({
              experience:
                coefficientInfo[complexity].coefficient *
                coefficientInfo[complexity].experience,
            });
          }

          const data = await dispatch(
            betsOperations.changeBet({ betId: id, isWon: true }),
          );

          if (levelInfo) {
            updateLevel({
              currentLevel: levelInfo?.level.level,
              currentExperience: levelInfo?.level.experience,
            });

            updateRank(levelInfo.level.level);
          }

          if (data) {
            dispatch(
              operations.changeBank({
                bank: (data.payload as IChangeBetRes).bet.winningAmount,
              }),
            );
          }

          return { isWon, randomNumber, number };
        }
        setIsWon(false);
        return { isWon, randomNumber, number };

      default:
        break;
    }
  };

  return { getWinner };
};

export default useMakeMove;
