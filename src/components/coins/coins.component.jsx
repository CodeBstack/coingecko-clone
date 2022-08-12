import './coins.style.scss';
import CoinCategories from '../coin-categories/coin-categories.components';
import Load from '../onLoad/onLoad.component';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// import SearchFunc from '../../Apis/userApis';

const fetchCoinData = async (page) => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins//markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
  );

  return data;
};

const Coins = ({ fdvDisp }) => {
  const [page, setPage] = useState(1);

  // useQuery hook
  const { isError, error, data, isFetching } =
    useQuery(['coins', page], () =>
      fetchCoinData(page)
    );

  // handle change on pagination button
  const handleChange = (e) => {
    const numClicked = parseInt(
      e.target.textContent
    );
    if (numClicked > 0) {
      setPage(numClicked);
    }
  };

  return (
    <div className="coin-container">
      {/* <SearchFunc /> */}
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
        {isFetching ? (
          <div className="loader-container">
            <Load />
          </div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          data.map((coin) => {
            return (
              <CoinCategories
                key={coin.id}
                fdvDisplay={fdvDisp}
                coin={coin}
              />
            );
          })
        )}
      </div>

      <div className="page-btn">
        <Stack spacing={1}>
          <Pagination
            onChange={handleChange}
            count={50}
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
};
export default Coins;
