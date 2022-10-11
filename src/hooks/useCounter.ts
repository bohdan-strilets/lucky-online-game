import { useState } from 'react';
import useSound from 'use-sound';
import { useAppSelector } from 'hooks/useAppSelector';
import { getSoundOff } from 'redux/options/optionsSelectors';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';

const useCounter = () => {
  const [value, setValue] = useState(0);
  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  const increment = () => {
    play({ id: 'counter_click' });
    setValue(prevstate => prevstate + 1);
  };

  const decrement = () => {
    play({ id: 'counter_click' });
    setValue(prevstate => prevstate - 1);
  };

  const addedValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    play({ id: 'counter_click' });
    const value = Number(e.currentTarget.textContent);
    setValue(prevState => prevState + value);
  };

  const resetValue = () => {
    play({ id: 'counter_click' });
    setValue(0);
  };

  return { increment, decrement, value, addedValue, resetValue };
};

export default useCounter;
