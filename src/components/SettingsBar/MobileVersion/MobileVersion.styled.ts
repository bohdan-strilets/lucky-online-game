import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(255, 255, 255, 0.9);
`;

export const CloseMenu = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

export const List = styled.ul`
  padding: 40px 10px 10px 10px;
`;

export const Item = styled.li`
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;
