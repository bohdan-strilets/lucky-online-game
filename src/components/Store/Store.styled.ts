import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  padding: 30px;
`;

export const Item = styled.li`
  width: calc((100% - 6 * 15px) / 3);
  margin: 15px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  margin-bottom: auto;
`;

export const Title = styled.h2`
  width: 100%;
  margin-bottom: 15px;

  font-weight: 900;
  font-size: 24px;
  text-align: center;
`;

export const Photo = styled.img`
  margin: 0 auto 40px auto;
  max-height: 300px;
`;

export const Description = styled.p`
  margin-bottom: 15px;
  overflow-y: auto;
  height: 50px;
`;

export const Price = styled.p`
  width: 100%;
  margin-bottom: 30px;

  font-weight: 900;
  text-align: center;

  color: var(--green-color);
`;

export const Navigation = styled.div`
  display: flex;
`;
