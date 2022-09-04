import styled from '@emotion/styled';
import logoBg from 'images/logo/logo-bg.png';
import { Link } from 'react-router-dom';
import { IWrapperStyled } from 'types/ILogo';

export const Wrapper = styled.div<IWrapperStyled>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 212px;
  height: 132px;
  margin: ${({ margin }) => (margin ? margin : '')};

  background-image: url(${logoBg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.15));
`;

export const StyledLink = styled(Link)`
  position: absolute;
  bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 5px;
  color: var(--brown-color);

  margin-bottom: 10px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Title = styled.p`
  font-weight: 900;
  font-size: 38px;
  color: var(--brown-color);
`;
