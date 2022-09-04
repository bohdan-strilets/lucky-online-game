import { useState } from 'react';

import IconSwitcher from 'components/IconSwitcher';
import { Wrapper, MainField, Button, Value, Option } from './Counter.styled';

const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(prevstate => prevstate + 1);

  const decrement = () => setValue(prevstate => prevstate - 1);

  const addedValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = Number(e.currentTarget.textContent);
    setValue(prevState => prevState + value);
  };

  const resetValue = () => setValue(0);

  return (
    <Wrapper>
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
          margin="0 5px 0 0"
        >
          0
        </Button>
        <Button
          type="button"
          onClick={addedValue}
          width="50px"
          margin="0 5px 0 0"
        >
          +10
        </Button>
        <Button
          type="button"
          onClick={addedValue}
          width="50px"
          margin="0 5px 0 0"
        >
          +50
        </Button>
        <Button
          type="button"
          onClick={addedValue}
          width="50px"
          margin="0 5px 0 0"
        >
          +100
        </Button>
        <Button
          type="button"
          onClick={addedValue}
          width="50px"
          margin="0 5px 0 0"
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