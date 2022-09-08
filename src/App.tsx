import { Routes, Route } from 'react-router-dom';
import useGetCurrentUser from 'hooks/useGetCurrentUser';
import styled from '@emotion/styled';

import Layout from 'components/Routes/Layout';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

import HomePage from 'pages/HomePage';
import SignupPage from 'pages/SignupPage';
import TermsConditionsPage from 'pages/TermsConditionsPage';
import PrivacyPolicyPage from 'pages/PrivacyPolicyPage';
import SigninPage from 'pages/SigninPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import WelcomePage from 'pages/WelcomePage';
import ProfilePage from 'pages/ProfilePage';
import CreateNewGamePage from 'pages/CreateNewGamePage';

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
  const { isRefreshing } = useGetCurrentUser();

  return (
    <Wrapper>
      {!isRefreshing && (
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Layout>
                  <HomePage />
                </Layout>
              </PublicRoute>
            }
          />
          <Route
            path="/sign-up"
            element={
              <PublicRoute restricted>
                <Layout>
                  <SignupPage />
                </Layout>
              </PublicRoute>
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <PublicRoute>
                <Layout>
                  <TermsConditionsPage />
                </Layout>
              </PublicRoute>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PublicRoute>
                <Layout>
                  <PrivacyPolicyPage />
                </Layout>
              </PublicRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <PublicRoute restricted>
                <Layout>
                  <SigninPage />
                </Layout>
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <PublicRoute restricted>
                <Layout>
                  <ResetPasswordPage />
                </Layout>
              </PublicRoute>
            }
          />
          <Route
            path="/welcome"
            element={
              <PrivateRoute>
                <Layout>
                  <WelcomePage />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Layout showSidebars>
                  <ProfilePage />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/new-game"
            element={
              <PrivateRoute>
                <Layout>
                  <CreateNewGamePage />
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      )}
    </Wrapper>
  );
};

export default App;
