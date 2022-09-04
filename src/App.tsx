import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';

import HomePage from 'pages/HomePage';

const App: React.FC = () => {
  return (
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
  );
};

export default App;
