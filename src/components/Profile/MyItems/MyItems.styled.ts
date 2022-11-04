import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const List = styled.ul`
  width: 100%;

  @media screen and (min-width: ${screenWidth.tablet}) {
    display: flex;
    flex-wrap: wrap;

    margin: -5px;
  }
`;

export const Item = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;

  border: 3px solid var(--white-transparent);
  border-radius: 10px;

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;

    :last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: ${screenWidth.tablet}) {
    width: calc((100% - 4 * 5px) / 2);
    margin: 5px;
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    width: calc((100% - 8 * 5px) / 4);
    margin: 5px;
  }
`;

export const Photo = styled.img`
  max-height: 150px;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  color: var(--green-color);
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
