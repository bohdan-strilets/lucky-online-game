import styled from '@emotion/styled';
import { IWrapperStyled } from 'types/ICounter';

export const Wrapper = styled.div<IWrapperStyled>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  margin: ${({ margin }) => (margin ? margin : '')};
  padding: 10px;
  width: 100%;

  background: var(--brown-transparent);
  border: 2px solid var(--brown-color);
  border-radius: 8px;
`;

export const MainField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Button = styled.button<{ width: string; margin?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => (width ? width : '')};
  height: 30px;
  margin: ${({ margin }) => (margin ? margin : '')};

  font-family: inherit;
  font-size: 16px;
  font-weight: 700;

  color: var(--brown-color);
  background: #fde3a7;
  border-radius: 8px;
  border: none;

  cursor: pointer;
  transition: opacity var(--hover-effect);

  :hover,
  :focus {
    opacity: 0.7;
  }
`;

export const Value = styled.span`
  font-size: 19px;
  margin: 0 90px 0 90px;
`;

export const Option = styled.div`
  display: flex;
`;
