import styled from '@emotion/styled';
import background from 'images/app/bg.png';

export const Wrapper = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  overflow-y: auto;
`;
