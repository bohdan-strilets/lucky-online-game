import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.8);
`;

export const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 780px;
  height: auto;
  padding: 60px;

  background-color: var(--white-color);
  color: var(--brown-color);
  border-radius: 30px;
  border: 5px solid var(--brown-transparent);
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 70px;
  padding-bottom: 30px;

  border-bottom: 1px solid var(--green-color);
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--brown-color);
  background-color: transparent;
  border: none;

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--green-color);
  }
`;
