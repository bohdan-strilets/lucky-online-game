import { useState, useEffect } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from 'redux/user/userSelectors';
import useCoefficient from 'hooks/useCoefficient';
import useMakeMove from 'hooks/useMakeMove';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import betsOperations from 'redux/bets/betsOperations';
import { getSoundOff } from 'redux/options/optionsSelectors';

import { toast } from 'react-toastify';

import useSound from 'use-sound';
import sounds from 'sounds/sounds.mp3';

import { ICreateBetRes } from 'types/IBetsApi';
import sprite from 'sounds/sprite';

const useGame = () => {
  const dispatch = useAppDispatch();

  const { complexity, bank } = useAppSelector(getUser);
  const { getCoefficient } = useCoefficient();
  const { getWinner } = useMakeMove();

  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  const [type, setType] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [number, setNumber] = useState<number | null>(null);
  const [amount, setAmount] = useState<number | null>(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [experienceGained, setExperienceGained] = useState(0);
  const [receivedMoney, setReceivedMoney] = useState(0);

  useEffect(() => {
    if (isWon) {
      setShowSuccessModal(true);
      setIsWon(false);
    }
  }, [isWon]);

  const toggleSuccesModal = () => setShowSuccessModal(prevState => !prevState);

  const rateHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const type = e.currentTarget.dataset.type;
    const color = e.currentTarget.dataset.color;
    const number = e.currentTarget.dataset.number;

    setType(type !== undefined ? type : null);
    setColor(color !== undefined ? color : null);
    setNumber(number !== undefined ? Number(number) : null);
  };

  const amountHandler = (value: number) => setAmount(value);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rate = {
      type,
      color,
      number,
      betAmount: amount,
      coefficient: getCoefficient(complexity && complexity, type),
    };

    if (
      rate.betAmount !== null &&
      rate.betAmount > 0 &&
      bank &&
      bank >= rate.betAmount
    ) {
      dispatch(operations.changeBank({ bank: -rate.betAmount }));
      const data = await dispatch(betsOperations.createBet(rate));

      const result = await getWinner(
        rate.type as string,
        rate.number as number,
        (data.payload as ICreateBetRes).bet._id,
      );
      setRandomNumber(result?.randomNumber as number);
      setIsWon(result?.isWon as boolean);
      setExperienceGained(result?.experience as number);
      setReceivedMoney(result?.money as number);

      return;
    }

    return toast.error(
      'The amount of the bet must be greater than zero, and this amount must also be in your account.',
    );
  };

  return {
    rateHandler,
    amountHandler,
    submitHandler,
    randomNumber,
    showSuccessModal,
    experienceGained,
    receivedMoney,
    isWon,
    toggleSuccesModal,
    play,
  };
};

export default useGame;
