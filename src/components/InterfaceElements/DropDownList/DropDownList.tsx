import { useState } from 'react';

import IconSwitcher from '../IconSwitcher';

import { IDropDownListState } from 'types/IDropDownListState';
import { Wrapper, Header, Option } from './DropDownList.styled';

const DropDownList: React.FC<IDropDownListState> = ({
  options,
  label,
  getValue,
  top,
  bottom,
  left,
  right,
}) => {
  const [option, setOption] = useState<null | string>(null);
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const value = e.currentTarget.textContent;
    setOption(value);
    getValue(value as string);
  };

  const toogle = () => setIsOpen(prevState => !prevState);

  return (
    <Wrapper top={top} bottom={bottom} left={left} right={right}>
      <div onClick={toogle}>
        <Header>
          <p>{option ? option : label}</p>
          <IconSwitcher
            name="arrowdown"
            size="24px"
            fill="var(--brown-color)"
          />
        </Header>
        {isOpen && (
          <div>
            {options.map(item => (
              <Option key={item} onClick={selectOption}>
                {item}
              </Option>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default DropDownList;
