import { useState, useEffect } from 'react';
import useSound from 'use-sound';

import IconSwitcher from 'components/InterfaceElements/IconSwitcher';

import counterClick from 'sounds/counter_click.mp3';
import { ICounterState } from 'types/ICounter';
import { Wrapper, MainField, Button, Value, Option } from './Counter.styled';

const Counter: React.FC<ICounterState> = ({ margin, getValue }) => {
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

  useEffect(() => {
    (() => getValue(value))();
  }, [getValue, value]);

  return (
    <Wrapper margin={margin}>
      <MainField>
        <Button type="button" onClick={decrement} width="30px">
          <IconSwitcher name="minus" size="16px" fill="var(--brown-color)" />
        </Button>
        <Value>{value}</Value>
        <Button type="button" onClick={increment} width="30px">
          <IconSwitcher name="plus" size="16px" fill="var(--brown-color)" />
        </Button>
      </MainField>

      <Option>
        <Button
          type="button"
          onClick={resetValue}
          width="50px"
          margin="0 25px 0 0"
        >
          0
        </Button>
        <Button
          type="button"
          onClick={addedValue}
          width="50px"
          margin="0 25px 0 0"
        >
          +10
        </Button>
        <Button
          type="button"
          onClick={addedValue}
          width="50px"
          margin="0 25px 0 0"
        >
          +50
        </Button>
        <Button
          type="button"
          onClick={addedValue}
          width="50px"
          margin="0 25px 0 0"
        >
          +100
        </Button>
        <Button
          type="button"
          onClick={addedValue}
          width="50px"
          margin="0 25px 0 0"
        >
          +500
        </Button>
        <Button type="button" onClick={addedValue} width="50px">
          +1000
        </Button>
      </Option>
    </Wrapper>
  );
};

export default Counter;