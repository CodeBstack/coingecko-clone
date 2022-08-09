import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.components';
import Home from './routes/home/home.components';
import CryptoCurrencies from './routes/cryptocurrencie/cryptocurrencies.component';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route
            path="cryptocurrencies"
            element={<CryptoCurrencies />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
