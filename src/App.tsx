import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Layout from 'components/Layout';
import Modal from 'components/Modal';

import HomePage from 'pages/HomePage';
import SignupPage from 'pages/SignupPage';
import TermsConditionsPage from 'pages/TermsConditionsPage';
import PrivacyPolicyPage from 'pages/PrivacyPolicyPage';
import SigninPage from 'pages/SigninPage';

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
      <Modal title="text" onClose={() => null}>
        <h2>sadsdadsad</h2>
      </Modal>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Layout>
              <SignupPage />
            </Layout>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              <TermsConditionsPage />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicyPage />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SigninPage />
            </Layout>
          }
        />
      </Routes>
    </Wrapper>
  );
};

export default App;
