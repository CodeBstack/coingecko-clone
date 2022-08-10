import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.components';
import Home from './routes/home/home.components';
import CryptoCurrencies from './routes/cryptocurrencie/cryptocurrencies.component';


import { Suspense } from 'react';

const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={<Navigation />}
          >
            <Route index element={<Home />} />
            <Route
              path="cryptocurrencies"
              element={<CryptoCurrencies />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
