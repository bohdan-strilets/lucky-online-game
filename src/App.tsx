import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Layout from 'components/Layout';

import HomePage from 'pages/HomePage';

import background from 'images/app/bg.png';

const Wrapper = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  overflow-y: auto;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
      </Routes>
    </Wrapper>
  );
};

export default App;
