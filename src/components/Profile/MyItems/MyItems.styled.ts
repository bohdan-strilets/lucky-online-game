import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  margin: -5px;
`;

export const Item = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc((100% - 8 * 5px) / 4);
  margin: 5px;
  padding: 15px;

  border: 3px solid var(--white-transparent);
  border-radius: 10px;
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
