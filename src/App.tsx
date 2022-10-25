import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import useGetCurrentUser from 'hooks/useGetCurrentUser';

import Layout from 'components/Routes/Layout';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import Loader from 'components/InterfaceElements/Loader';

import { Wrapper } from 'styles/App.styled';

const HomePage = lazy(() => import('pages/HomePage'));
const SignupPage = lazy(() => import('pages/SignupPage'));
const TermsConditionsPage = lazy(() => import('pages/TermsConditionsPage'));
const PrivacyPolicyPage = lazy(() => import('pages/PrivacyPolicyPage'));
const SigninPage = lazy(() => import('pages/SigninPage'));
const ResetPasswordPage = lazy(() => import('pages/ResetPasswordPage'));
const WelcomePage = lazy(() => import('pages/WelcomePage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const CreateNewGamePage = lazy(() => import('pages/CreateNewGamePage'));
const GamePage = lazy(() => import('pages/GamePage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));
const RatingPage = lazy(() => import('pages/RatingPage'));
const InformationPage = lazy(() => import('pages/InformationPage'));
const BetLlistPage = lazy(() => import('pages/BetLlistPage'));
const StorePage = lazy(() => import('pages/StorePage'));

const App: React.FC = () => {
  const { isRefreshing } = useGetCurrentUser();

  return (
    <Wrapper>
      <Suspense fallback={<Loader />}>
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
            <Route
              path="/game"
              element={
                <PrivateRoute>
                  <Layout showSidebars>
                    <GamePage />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/statistics"
              element={
                <PrivateRoute>
                  <Layout showSidebars>
                    <StatisticsPage />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/rating"
              element={
                <PrivateRoute>
                  <Layout showSidebars>
                    <RatingPage />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/information"
              element={
                <PrivateRoute>
                  <Layout showSidebars>
                    <InformationPage />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/bet-list"
              element={
                <PrivateRoute>
                  <Layout showSidebars>
                    <BetLlistPage />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/store"
              element={
                <PrivateRoute>
                  <Layout showSidebars>
                    <StorePage />
                  </Layout>
                </PrivateRoute>
              }
            />
          </Routes>
        )}
      </Suspense>
    </Wrapper>
  );
};

export default App;
