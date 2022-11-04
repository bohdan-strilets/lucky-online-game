import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Text = styled.p`
  text-align: center;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 150px;
  margin-bottom: 50px;

  background-color: var(--brown-transparent);
  border-radius: 30px;
`;

export const Input = styled.input`
  font-weight: 900;
  font-family: inherit;

  color: var(--white-color);
  background-color: var(--brown-color);

  @media screen and (min-width: ${screenWidth.tablet}) {
    font-size: 26px;
  }
`;

export const Preview = styled.img`
  width: 150px;
  margin-left: 50%;
  transform: translate(-50%);
  margin-bottom: 50px;
`;
