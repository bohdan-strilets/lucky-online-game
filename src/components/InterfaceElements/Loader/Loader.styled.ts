import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 300px;
  width: 100%;
`;

export const Spinner = styled.div`
  animation-name: spin;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Text = styled.p`
  font-weight: 900;
  margin-top: 15px;
`;
