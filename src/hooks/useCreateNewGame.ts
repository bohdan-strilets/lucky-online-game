import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useNavigate } from 'react-router-dom';
import useCoefficient from 'hooks/useCoefficient';
import useSound from 'use-sound';
import { useAppSelector } from 'hooks/useAppSelector';
import { getSoundOff } from 'redux/options/optionsSelectors';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';
import { IChangeBankRes } from 'types/IUserRessponse';

const useCreateNewGame = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { coefficientInfo } = useCoefficient();
  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  const createNewGame = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.textContent as 'low' | 'medium' | 'high';
    play({ id: 'counter_click' });

    const res = await dispatch(
      operations.createSession({
        complexity: value,
        bank: coefficientInfo?.[value].initialFunds,
      }),
    );

    if ((res.payload as IChangeBankRes).status === 'ok') {
      navigate('/game');
    }
  };

  return { createNewGame };
};

export default useCreateNewGame;
