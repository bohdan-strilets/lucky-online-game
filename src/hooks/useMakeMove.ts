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
import types from 'helpers/betTypes';
import useSound from 'use-sound';
import { getSoundOff } from 'redux/options/optionsSelectors';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';
import { IChangeBetRes } from 'types/IBetsApi';

const useMakeMove = () => {
  const dispatch = useAppDispatch();
  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  const [changeExperience] = useChangeExperienceMutation();
  const { coefficientInfo } = useCoefficient();
  const { complexity } = useAppSelector(getUser);
  const { updateLevel, updateRank } = useExperience();
  const { data: levelInfo } = useGetLevelInfoQuery();

  const [randomNumber, setRandomNumber] = useState(() =>
    randomNumberGenerator(),
  );

  const getWinner = async (type: string, number: number, id: string) => {
    let num = null;
    let experience = null;

    switch (type) {
      case types.ZERO:
        setRandomNumber(randomNumberGenerator());

        if (number === randomNumber) {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.number *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.NUMBER:
        setRandomNumber(randomNumberGenerator());

        if (number === randomNumber) {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.number *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.HIGH:
        setRandomNumber(randomNumberGenerator());
        num = numbers.find(item => item.number === randomNumber);

        if (num?.high) {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.oneFromTwo *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.LOW:
        setRandomNumber(randomNumberGenerator());
        num = numbers.find(item => item.number === randomNumber);

        if (num?.low) {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.oneFromTwo *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.EVEN:
        setRandomNumber(randomNumberGenerator());
        num = numbers.find(item => item.number === randomNumber);

        if (num?.even) {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.oneFromTwo *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.ODD:
        setRandomNumber(randomNumberGenerator());
        num = numbers.find(item => item.number === randomNumber);

        if (num?.odd) {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.oneFromTwo *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.BLACK:
        setRandomNumber(randomNumberGenerator());
        num = numbers.find(item => item.number === randomNumber);

        if (num?.color === 'black') {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.oneFromTwo *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.RED:
        setRandomNumber(randomNumberGenerator());
        num = numbers.find(item => item.number === randomNumber);

        if (num?.color === 'red') {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.oneFromTwo *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.DOZEN_1:
        setRandomNumber(randomNumberGenerator());
        num = numbers.find(item => item.number === randomNumber);

        if (num?.['dozen-1']) {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.bottomRow *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.DOZEN_2:
        setRandomNumber(randomNumberGenerator());
        num = numbers.find(item => item.number === randomNumber);

        if (num?.['dozen-2']) {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.bottomRow *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.DOZEN_3:
        setRandomNumber(randomNumberGenerator());
        num = numbers.find(item => item.number === randomNumber);

        if (num?.['dozen-3']) {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.bottomRow *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.COLUMN_1:
        setRandomNumber(randomNumberGenerator());
        num = numbers.find(item => item.number === randomNumber);

        if (num?.['column-1']) {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.bottomRow *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.COLUMN_2:
        setRandomNumber(randomNumberGenerator());
        num = numbers.find(item => item.number === randomNumber);

        if (num?.['column-2']) {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.bottomRow *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      case types.COLUMN_3:
        setRandomNumber(randomNumberGenerator());
        num = numbers.find(item => item.number === randomNumber);

        if (num?.['column-3']) {
          if (complexity) {
            experience =
              coefficientInfo[complexity].coefficient.bottomRow *
              coefficientInfo[complexity].experience;
            changeExperience({ experience });
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

          play({ id: 'sound_victory' });
          return {
            isWon: true,
            randomNumber,
            money: (data.payload as IChangeBetRes).bet.winningAmount,
            experience,
          };
        }
        return { isWon: false, randomNumber };

      default:
        return console.log('No such type exists.');
    }
  };

  return { getWinner, types };
};

export default useMakeMove;
