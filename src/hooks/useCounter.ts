import { useState } from 'react';
import useSound from 'use-sound';

import counterClick from 'sounds/counter_click.mp3';

const useCounter = () => {
  const [value, setValue] = useState(0);
  const [play] = useSound(counterClick);

  const increment = () => {
    play();
    setValue(prevstate => prevstate + 1);
  };

  const decrement = () => {
    play();
    setValue(prevstate => prevstate - 1);
  };

  const addedValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    play();
    const value = Number(e.currentTarget.textContent);
    setValue(prevState => prevState + value);
  };

  const resetValue = () => {
    play();
    setValue(0);
  };

  return { increment, decrement, value, addedValue, resetValue };
};

export default useCounter;
