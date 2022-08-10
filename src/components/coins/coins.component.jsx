import './coins.style.scss';
import CoinCategories from '../coin-categories/coin-categories.components';
import { useQuery } from '@tanstack/react-query';

const fetchCoinData = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h'
  );
  return res.json();
};
// console.log(fetchCoinData());

const Coins = ({ fdvDisp }) => {
  const { data, status } = useQuery(
    ['coins'],
    fetchCoinData
  );
  console.log(data);

  return (
    <div className="coin-container">
      <div className="coins-heading">
        <div className="count">
          <p>#</p>
        </div>
        <div className="coin">
          <h3>Coin</h3>
        </div>
        <div className="price">
          <h3>Price</h3>
        </div>
        <div className="hour">
          <h3>1h</h3>
        </div>
        <div className="day">
          <h3>24h</h3>
        </div>
        <div className="week">
          <h3>7d</h3>
        </div>
        <div className="volume">
          <h3>24h Volume</h3>
        </div>
        <div className="mktcap">
          <h3>Mkt Cap</h3>
        </div>
        <div
          className={fdvDisp ? 'fdv' : 'fdv-none'}
        >
          <h3>FDV</h3>
        </div>
        <div className="last-week">
          <h3>Last 7 Days</h3>
        </div>
      </div>

      <div className="coin-lists">
        <CoinCategories fdvDisplay={fdvDisp} />
      </div>
    </div>
  );
};
export default Coins;
